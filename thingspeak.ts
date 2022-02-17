/**
 * MakeCode extension for ESP8266 Wifi modules and ThinkSpeak and IFTTT. https://thingspeak.com/ e https://maker.ifttt.com/
 */
//% weight=9 color=#54AB9B icon="\uf20e" block="Hackbit IoT"
namespace ESP8266ThingSpeak {

    let wifi_connected: boolean = false
    let thingspeak_connected: boolean = false
    let last_upload_successful: boolean = false

    let array_keys: Array<string> = []
    let array_values: Array<string> = []
    let httpReturnString: string = ""
    let HTTP_received: (Error_code: string, Data: string) => void = null;

    let Wifi_remote = false
    let myChannel = ""
    let Wifi_Remote_Conn: (channel: string, WifiMessage: string) => void = null;
    let Wifi_Remote_Conn_value: (channel: string, WifiMessage: string, Value: number) => void = null;
    let Wifi_sender: (status: string, Error_code: string) => void = null;
    let Wifi_Remote_create: (channel: string, Error_code: string) => void = null;

    export enum httpMethod {
        //% block="GET"
        GET,
        //% block="POST"
        POST
    }


    // ------- WiFi -------

    /**
    * Initialize ESP8266 module and connect it to Wifi router
    */
    //% block="Initialize ESP8266|RX (Tx of micro:bit) %tx|TX (Rx of micro:bit) %rx|Baud rate %baudrate|Wifi SSID = %ssid|Wifi PW = %pw"
    //% tx.defl=SerialPin.P16
    //% rx.defl=SerialPin.P15
    //% tx.fieldEditor="gridpicker"
    //% tx.fieldOptions.columns=3
    //% rx.fieldEditor="gridpicker"
    //% rx.fieldOptions.columns=3
    //% baudrate.fieldEditor="gridpicker"
    //% baudrate.fieldOptions.columns=3
    //% ssid.defl=your_ssid
    //% pw.defl=your_pw
    //% color=#75BBAE    
    export function connectWifi(tx: SerialPin, rx: SerialPin, baudrate: BaudRate, ssid: string, pw: string) {
        wifi_connected = false
        thingspeak_connected = false
        serial.redirect(
            tx,
            rx,
            baudrate
        )
        sendAT("AT+RESTORE", 1000) // restore to factory settings
        sendAT("AT+CWMODE=1") // set to STA mode
        sendAT("AT+RST", 1000) // reset
        sendAT("AT+CWJAP=\"" + ssid + "\",\"" + pw + "\"", 0) // connect to Wifi router
        wifi_connected = waitResponse()
        basic.pause(100)
    }

    // ------- ThingSpeak -------
    // write AT command with CR+LF ending
    function sendAT(command: string, wait: number = 100) {
        serial.writeString(command + "\u000D\u000A")
        basic.pause(wait)
    }

    // wait for certain response from ESP8266
    function waitResponse(): boolean {
        let serial_str: string = ""
        let result: boolean = false
        let time: number = input.runningTime()
        while (true) {
            serial_str += serial.readString()
            if (serial_str.length > 200) serial_str = serial_str.substr(serial_str.length - 200)
            if (serial_str.includes("OK") || serial_str.includes("ALREADY CONNECTED")) {
                result = true
                break
            } else if (serial_str.includes("ERROR") || serial_str.includes("SEND FAIL")) {
                break
            }
            if (input.runningTime() - time > 30000) break
        }
        return result
    }

    /**
    * Connect to ThingSpeak and upload data. It would not upload anything if it failed to connect to Wifi or ThingSpeak.
    */
    //% block="Upload data to ThingSpeak|URL/IP = %ip|Write API key = %write_api_key|Field 1 = %n1|Field 2 = %n2|Field 3 = %n3|Field 4 = %n4|Field 5 = %n5|Field 6 = %n6|Field 7 = %n7|Field 8 = %n8"
    //% ip.defl=api.thingspeak.com
    //% write_api_key.defl=your_write_api_key
    //% subcategory="IoT Service" 
    //% weight=130 group="Thingspeak"
    //% color=#75BBAE    
    export function connectThingSpeak(ip: string, write_api_key: string, n1: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number, n8: number) {
        if (wifi_connected && write_api_key != "") {
            thingspeak_connected = false
            sendAT("AT+CIPSTART=\"TCP\",\"" + ip + "\",80", 0) // connect to website server
            thingspeak_connected = waitResponse()
            basic.pause(100)
            if (thingspeak_connected) {
                last_upload_successful = false
                let str: string = "GET /update?api_key=" + write_api_key + "&field1=" + n1 + "&field2=" + n2 + "&field3=" + n3 + "&field4=" + n4 + "&field5=" + n5 + "&field6=" + n6 + "&field7=" + n7 + "&field8=" + n8
                sendAT("AT+CIPSEND=" + (str.length + 2))
                sendAT(str, 0) // upload data
                last_upload_successful = waitResponse()
                basic.pause(100)
            }
        }
    }

    /**
    * Wait between uploads
    */
    //% block="Wait %delay ms"
    //% delay.min=0 delay.defl=5000
    //% color=#75BBAE    
    export function wait(delay: number) {
        if (delay > 0) basic.pause(delay)
    }

    /**
    * Check if ESP8266 successfully connected to Wifi
    */
    //% block="Wifi connected ?"
    //% color=#75BBAE    
    export function isWifiConnected() {
        return wifi_connected
    }

    /**
    * Check if ESP8266 successfully connected to ThingSpeak
    */
    //% block="ThingSpeak connected ?"
    //% subcategory="IoT Service" 
    //% weight=130 group="Thingspeak"
    //% color=#75BBAE
    export function isThingSpeakConnected() {
        return thingspeak_connected
    }

    /**
    * Check if ESP8266 successfully uploaded data to ThingSpeak
    */
    //% block="Last data upload successful ?"
    //% subcategory="IoT Service" 
    //% weight=130 group="Thingspeak"
    //% color=#75BBAE
    export function isLastUploadSuccessful() {
        return last_upload_successful
    }

    // ------- IFTTT -------
    function sendAtCmd(cmd: string) {
        serial.writeString(cmd + "\u000D\u000A")
    }

    function waitAtResponse(target1: string, target2: string, target3: string, timeout: number) {
        let buffer = ""
        let start = input.runningTime()

        while ((input.runningTime() - start) < timeout) {
            buffer += serial.readString()

            if (buffer.includes(target1)) return 1
            if (buffer.includes(target2)) return 2
            if (buffer.includes(target3)) return 3

            basic.pause(100)
        }

        return 0
    }

    /**
     * Send data to IFTTT
     */
    //% block="Send Data to your IFTTT Event|Event %event|Key %key|value1 %value1|value2 %value2|value3 %value3"
    //% event.defl="Event"
    //% key.defl="Key"
    //% value1.defl="hello"
    //% value2.defl="hack:"
    //% value3.defl="bit"
    //% subcategory="IoT Service" 
    //% weight=130 group="IFTTT"
    //% color=#75BBAE    
    export function sendToIFTTT(event: string, key: string, value1: string, value2: string, value3: string) {
        let result = 0
        let retry = 2

        // close the previous TCP connection
        if (isWifiConnected) {
            sendAtCmd("AT+CIPCLOSE")
            waitAtResponse("OK", "ERROR", "None", 2000)
        }

        while (isWifiConnected && retry > 0) {
            retry = retry - 1;
            // establish TCP connection
            sendAtCmd("AT+CIPSTART=\"TCP\",\"maker.ifttt.com\",80")
            result = waitAtResponse("OK", "ALREADY CONNECTED", "ERROR", 2000)
            if (result == 3) continue

            let data = "GET /trigger/" + event + "/with/key/" + key
            data = data + "?value1=" + value1
            data = data + "&value2=" + value2
            data = data + "&value3=" + value3
            data = data + " HTTP/1.1"
            data = data + "\u000D\u000A"
            data = data + "User-Agent: curl/7.58.0"
            data = data + "\u000D\u000A"
            data = data + "Host: maker.ifttt.com"
            data = data + "\u000D\u000A"
            data = data + "Accept: */*"
            data = data + "\u000D\u000A"

            sendAtCmd("AT+CIPSEND=" + (data.length + 2))
            result = waitAtResponse(">", "OK", "ERROR", 2000)
            if (result == 3) continue
            sendAtCmd(data)
            result = waitAtResponse("SEND OK", "SEND FAIL", "ERROR", 5000)

            // // close the TCP connection
            // sendAtCmd("AT+CIPCLOSE")
            // waitAtResponse("OK", "ERROR", "None", 2000)

            if (result == 1) break
        }
    }

    // ------- HTTP -------
    /**
     * Use hack:bit & ESP8266 to send the HTTP request, input the URL of your API.
     * The Body content only available for POST method.
     * The POST Body Content-Type was "application/json",
     * DO NOT include "&" symbol in the JSON content.
     * 
     */
    //%subcategory="IoT Service"
    //%blockId=wifi_ext_board_generic_http
    //% block="Send HTTP Request |Method %method|URL:%url|Body:%body"
    //% weight=115	 group="HTTP" 
    //% inlineInputMode=external
    export function sendGenericHttp(method: httpMethod, url: string, body: string): void {
        //httpReturnArray = []
        let temp = ""
        switch (method) {
            case httpMethod.GET:
                temp = "GET"
                break
            case httpMethod.POST:
                temp = "POST"
                break
        }
        serial.writeLine("(AT+http?method=" + temp + "&url=" + url + "&header=" + "&body=" + body + ")");
    }

    /**
     * After sending the HTTP request, the response will be return to this handler, you may access the http stauts code and the return body.
     */

    //%subcategory="IoT Service"
    //% blockId="wifi_ext_board_http_receive" 
    //% block="On HTTP received"	 group="HTTP"
    //% weight=108 draggableParameters=reporter
    //% blockGap=20

    export function on_HTTP_recevid(handler: (HTTP_Status_Code: string, Data: string) => void): void {
        HTTP_received = handler;
    }

    /**
     * This function can extract the value of specific key from a JSON format String.
     * Fill in the Key field that you are searching from json_object, then put the source into the Source placeholder(e.g HTTP return Data).
     * It will search the key from Source string and return the corresponding value.
     * When using at the mulit-level JSON, you need to use this function several time to extract the value one by one level.
     * @param target Key that looking for
     * @param source Source string that to be extract from
     */
    //%subcategory="IoT Service"
    //% blockId="JSON_extractor"
    //%block="Get value of Key %target from JSON String %source"
    //% weight=107 group="HTTP"
    export function get_value(target: string, source: string): string {

        //clear the keys & values array
        array_keys = []
        array_values = []
        //prase the JSON String to Object
        let json_object = JSON.parse(source)
        //Get the count of keys for the For-Loop to run
        let total_keys = Object.keys(json_object).length
        // Start work on each keys
        for (let i = 0; i < total_keys; i++) {
            //Push each key from JSON Object to keys array
            array_keys.push(Object.keys(json_object)[i])
            // Check the corresponding value of the key from Object, 
            // if it is string or number type, push it to value array as normal
            if ((typeof (json_object[array_keys[array_keys.length - 1]]) == "string") || (typeof (json_object[array_keys[array_keys.length - 1]]) == "number")) {
                //push the string or number value to array
                array_values.push(json_object[array_keys[array_keys.length - 1]])

            }
            // if the value is a Object type, mostly is next level JSON object
            else if (typeof (json_object[array_keys[array_keys.length - 1]]) == "object") {
                //Use stringify to convert it back to string, allow to return the stringify object to user,
                //User can perform JSON prase function again later, while the source can set as this return string
                array_values.push(JSON.stringify(json_object[array_keys[array_keys.length - 1]]))

            }
        }
        //After input all the data, search the target's key index
        let target_index = array_keys.indexOf(target)
        //Return the value of that key
        return array_values[target_index]
    }

    //% subcategory="IoT Service"
    //% blockId="wifi_ext_board_generic_http_array_return" 

    //% block="HTTP response (string array)"
    //% weight=110	 group="HTTP"
    //% blockGap=7
    //% blockHidden=true
    export function getGenericHttpReturn(): Array<string> {
        return [""];
    }
    //% subcategory="IoT Service"
    //% blockId="wifi_ext_board_generic_http_return" 
    //% block="HTTP response (string)"
    //% weight=110	 group="HTTP"
    //% blockGap=7
    //% blockHidden=true
    export function getHttpReturn(): string {
        return httpReturnString;

    }

    // ------- Channel -------
    //%subcategory=Channel
    //%blockId=wifi_listen_channel
    //%block="WiFi Receiver join channel %channel"
    //% weight=20 group="Receiver"
    export function wifi_listen_channel(channel: string): void {
        Wifi_remote = true
        myChannel = channel
        serial.writeLine("(AT+pubnubreceiver?channel=" + myChannel + ")")
    }
    //%subcategory=Channel
    //%blockId=wifi_ext_board_on_wifi_receieved
    //%block="On WiFi Receiver received"
    //% weight=18 group="Receiver"
    //% draggableParameters=reporter
    export function on_wifi_received(handler: (Channel: string, receivedMessage: string) => void): void {
        Wifi_Remote_Conn = handler;
    }
    //%subcategory=Channel
    //%blockId=wifi_ext_board_on_wifi_receieved_value
    //%block="On WiFi Receiver received"
    //% weight=17 draggableParameters=reporter group="Receiver"
    export function on_wifi_received_value(handler: (Channel: string, receivedMessage: string, Value: number) => void): void {
        Wifi_Remote_Conn_value = handler;
    }

    //%subcategory=Channel
    //%blockId=wifi_send_message
    //%block="WiFi Sender send channel %channel message %message"
    //% weight=15
    //% group="Sender"
    export function wifi_send_message(Channel: string, message: string): void {
        myChannel = Channel
        serial.writeLine("(AT+pubnubsender?channel=" + myChannel + "&message=" + message + ")")
    }

    //%subcategory=Channel
    //%blockId=wifi_send_message_value
    //%block="WiFi Sender send channel %channel message %message value %value"
    //% weight=14
    //% group="Sender"
    export function wifi_send_message_value(channel: string, message: string, value: number): void {
        myChannel = channel
        serial.writeLine("(AT+pubnubsender?channel=" + myChannel + "&message=" + message + "&value=" + value + ")");
    }

    //%subcategory=Channel
    //%blockId=wifi_ext_board_on_wifi_sent
    //%block="On Wifi message sent"
    //% weight=13 draggableParameters=reporter group="Advanced"

    export function on_wifi_sender_sent(handler: (Status: string, Error_code: string) => void): void {
        Wifi_sender = handler;
    }

    //%subcategory=Channel
    //%blockId=wifi_ext_board_on_wifi_channel_create
    //%block="On WiFi channel joined" group="Receiver"
    //% weight=19 draggableParameters=reporter group="Advanced"

    export function on_wifi_create_channel(handler: (Channel: string, Error_code: string) => void): void {
        Wifi_Remote_create = handler;
    }

}