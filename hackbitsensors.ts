//% weight=10 color=#C82A32 icon="\uf0eb" block="Hackbit Sensors"
namespace hackbitsensor {
    let gesture_first_init = true
    const initRegisterArray: number[] = [
        0xEF, 0x00, 0x32, 0x29, 0x33, 0x01, 0x34, 0x00, 0x35, 0x01, 0x36, 0x00, 0x37, 0x07, 0x38, 0x17,
        0x39, 0x06, 0x3A, 0x12, 0x3F, 0x00, 0x40, 0x02, 0x41, 0xFF, 0x42, 0x01, 0x46, 0x2D, 0x47, 0x0F,
        0x48, 0x3C, 0x49, 0x00, 0x4A, 0x1E, 0x4B, 0x00, 0x4C, 0x20, 0x4D, 0x00, 0x4E, 0x1A, 0x4F, 0x14,
        0x50, 0x00, 0x51, 0x10, 0x52, 0x00, 0x5C, 0x02, 0x5D, 0x00, 0x5E, 0x10, 0x5F, 0x3F, 0x60, 0x27,
        0x61, 0x28, 0x62, 0x00, 0x63, 0x03, 0x64, 0xF7, 0x65, 0x03, 0x66, 0xD9, 0x67, 0x03, 0x68, 0x01,
        0x69, 0xC8, 0x6A, 0x40, 0x6D, 0x04, 0x6E, 0x00, 0x6F, 0x00, 0x70, 0x80, 0x71, 0x00, 0x72, 0x00,
        0x73, 0x00, 0x74, 0xF0, 0x75, 0x00, 0x80, 0x42, 0x81, 0x44, 0x82, 0x04, 0x83, 0x20, 0x84, 0x20,
        0x85, 0x00, 0x86, 0x10, 0x87, 0x00, 0x88, 0x05, 0x89, 0x18, 0x8A, 0x10, 0x8B, 0x01, 0x8C, 0x37,
        0x8D, 0x00, 0x8E, 0xF0, 0x8F, 0x81, 0x90, 0x06, 0x91, 0x06, 0x92, 0x1E, 0x93, 0x0D, 0x94, 0x0A,
        0x95, 0x0A, 0x96, 0x0C, 0x97, 0x05, 0x98, 0x0A, 0x99, 0x41, 0x9A, 0x14, 0x9B, 0x0A, 0x9C, 0x3F,
        0x9D, 0x33, 0x9E, 0xAE, 0x9F, 0xF9, 0xA0, 0x48, 0xA1, 0x13, 0xA2, 0x10, 0xA3, 0x08, 0xA4, 0x30,
        0xA5, 0x19, 0xA6, 0x10, 0xA7, 0x08, 0xA8, 0x24, 0xA9, 0x04, 0xAA, 0x1E, 0xAB, 0x1E, 0xCC, 0x19,
        0xCD, 0x0B, 0xCE, 0x13, 0xCF, 0x64, 0xD0, 0x21, 0xD1, 0x0F, 0xD2, 0x88, 0xE0, 0x01, 0xE1, 0x04,
        0xE2, 0x41, 0xE3, 0xD6, 0xE4, 0x00, 0xE5, 0x0C, 0xE6, 0x0A, 0xE7, 0x00, 0xE8, 0x00, 0xE9, 0x00,
        0xEE, 0x07, 0xEF, 0x01, 0x00, 0x1E, 0x01, 0x1E, 0x02, 0x0F, 0x03, 0x10, 0x04, 0x02, 0x05, 0x00,
        0x06, 0xB0, 0x07, 0x04, 0x08, 0x0D, 0x09, 0x0E, 0x0A, 0x9C, 0x0B, 0x04, 0x0C, 0x05, 0x0D, 0x0F,
        0x0E, 0x02, 0x0F, 0x12, 0x10, 0x02, 0x11, 0x02, 0x12, 0x00, 0x13, 0x01, 0x14, 0x05, 0x15, 0x07,
        0x16, 0x05, 0x17, 0x07, 0x18, 0x01, 0x19, 0x04, 0x1A, 0x05, 0x1B, 0x0C, 0x1C, 0x2A, 0x1D, 0x01,
        0x1E, 0x00, 0x21, 0x00, 0x22, 0x00, 0x23, 0x00, 0x25, 0x01, 0x26, 0x00, 0x27, 0x39, 0x28, 0x7F,
        0x29, 0x08, 0x30, 0x03, 0x31, 0x00, 0x32, 0x1A, 0x33, 0x1A, 0x34, 0x07, 0x35, 0x07, 0x36, 0x01,
        0x37, 0xFF, 0x38, 0x36, 0x39, 0x07, 0x3A, 0x00, 0x3E, 0xFF, 0x3F, 0x00, 0x40, 0x77, 0x41, 0x40,
        0x42, 0x00, 0x43, 0x30, 0x44, 0xA0, 0x45, 0x5C, 0x46, 0x00, 0x47, 0x00, 0x48, 0x58, 0x4A, 0x1E,
        0x4B, 0x1E, 0x4C, 0x00, 0x4D, 0x00, 0x4E, 0xA0, 0x4F, 0x80, 0x50, 0x00, 0x51, 0x00, 0x52, 0x00,
        0x53, 0x00, 0x54, 0x00, 0x57, 0x80, 0x59, 0x10, 0x5A, 0x08, 0x5B, 0x94, 0x5C, 0xE8, 0x5D, 0x08,
        0x5E, 0x3D, 0x5F, 0x99, 0x60, 0x45, 0x61, 0x40, 0x63, 0x2D, 0x64, 0x02, 0x65, 0x96, 0x66, 0x00,
        0x67, 0x97, 0x68, 0x01, 0x69, 0xCD, 0x6A, 0x01, 0x6B, 0xB0, 0x6C, 0x04, 0x6D, 0x2C, 0x6E, 0x01,
        0x6F, 0x32, 0x71, 0x00, 0x72, 0x01, 0x73, 0x35, 0x74, 0x00, 0x75, 0x33, 0x76, 0x31, 0x77, 0x01,
        0x7C, 0x84, 0x7D, 0x03, 0x7E, 0x01
    ];
    /////////////////////////color/////////////////////////
    const APDS9960_ADDR = 0x39
    const APDS9960_ENABLE = 0x80
    const APDS9960_ATIME = 0x81
    const APDS9960_CONTROL = 0x8F
    const APDS9960_STATUS = 0x93
    const APDS9960_CDATAL = 0x94
    const APDS9960_CDATAH = 0x95
    const APDS9960_RDATAL = 0x96
    const APDS9960_RDATAH = 0x97
    const APDS9960_GDATAL = 0x98
    const APDS9960_GDATAH = 0x99
    const APDS9960_BDATAL = 0x9A
    const APDS9960_BDATAH = 0x9B
    const APDS9960_GCONF4 = 0xAB
    const APDS9960_AICLEAR = 0xE7
    let color_first_init = false

    export enum PingUnit {
        //% block="cm",
        cm,
        //% block="inch"
        inch,
        //% block="μs"
        MicroSeconds
    }

    export enum DistanceUnit {
        //% block="cm"
        cm,
        //% block="inch"
        inch
    }
    export enum Color {
        //% block="Red"
        Red,
        //% block="Green"
        Green,
        //% block="Blue"
        Blue,
        //% block="Clear"
        Clear
    }

    export enum ColorList {
        //% block="Red"
        red,
        //% block="Green"
        green,
        //% block="Blue"
        blue,
        //% block="Cyan"
        cyan,
        //% block="Magenta"
        magenta,
        //% block="Yellow"
        yellow,
        //% block="White"
        white
    }

    export enum GroveGesture {
        //% block=None
        None = 0,
        //% block=Right
        Right = 1,
        //% block=Left
        Left = 2,
        //% block=Up
        Up = 3,
        //% block=Down
        Down = 4,
        //% block=Forward
        Forward = 5,
        //% block=Backward
        Backward = 6,
        //% block=Clockwise
        Clockwise = 7,
        //% block=Anticlockwise
        Anticlockwise = 8,
        //% block=Wave
        Wave = 9
    }

    export enum DHTtype {
        //% block="DHT11"
        DHT11,
        //% block="DHT22"
        DHT22,
    }

    export enum dataType {
        //% block="humidity"
        humidity,
        //% block="temperature"
        temperature,
    }

    export enum tempType {
        //% block="Celsius (*C)"
        celsius,
        //% block="Fahrenheit (*F)"
        fahrenheit,
    }

    export let _temperature: number = -999.0
    export let _humidity: number = -999.0
    export let _temptype: tempType = tempType.celsius
    export let _readSuccessful: boolean = false
    export let _sensorresponding: boolean = false

    export enum GasList {
        //% block="Co"
        Co,
        //% block="Co2"
        Co2,
        //% block="Smoke"
        Smoke,
        //% block="Alcohol"
        Alcohol
    }


    export let identifiant = 0;
    export let grovegestureinit = 0;


    /**
     * get distance from Grove ultrasonic range sensor [cm|inch]
     * @param pin Input pin
     */
    //% blockId=RobotDriverultrasonic_cm 
    //% block="ultrasonic ranger pin |%name| distance in %Unit"
    //% name.fieldEditor="gridpicker" 
    //% name.fieldOptions.columns=5
    //% name.fieldOptions.tooltips="false"
    //% name.fieldOptions.width="0"
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function measureDistance(name: DigitalPin, Unit: DistanceUnit): number {
        let duration = 0;
        let distance = 0;
        let distanceBackup = 0;
        pins.digitalWritePin(name, 0); //make sure pin is low
        control.waitMicros(2);
        pins.digitalWritePin(name, 1); //send echo
        control.waitMicros(10);
        pins.digitalWritePin(name, 0);

        duration = pins.pulseIn(name, PulseValue.High, 50000); // Max duration 50 ms - receive echo

        if (Unit == DistanceUnit.cm) distance = duration * 153 / 58 / 100;
        else distance = duration * 153 / 148 / 100;

        if (distance > 0) distanceBackup = distance;
        else distance = distanceBackup;
        basic.pause(50);

        return Math.roundWithPrecision(distance, 4);
    }

    /**
     * get distance from Grove ultrasonic range sensor [cm|inch]
     * @param pin Input pin
     */
    //% blockId=RobotDriverultrasonic_cm_v2 
    //% block="(v2) ultrasonic ranger pin |%name| distance in %Unit"
    //% name.fieldEditor="gridpicker" 
    //% name.fieldOptions.columns=5
    //% name.fieldOptions.tooltips="false"
    //% name.fieldOptions.width="0"
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function measureDistance_v2(name: DigitalPin, Unit: DistanceUnit): number {
        let duration = 0;
        let distance = 0;
        let distanceBackup = 0;
        pins.digitalWritePin(name, 0); //make sure pin is low
        control.waitMicros(2);
        pins.digitalWritePin(name, 1); //send echo
        control.waitMicros(10);
        pins.digitalWritePin(name, 0);

        duration = pins.pulseIn(name, PulseValue.High, 50000); // Max duration 50 ms - receive echo

        if (Unit == DistanceUnit.cm) distance = duration * 153 / 88 / 100;
        else distance = duration * 153 / 226 / 100;

        if (distance > 0) distanceBackup = distance;
        else distance = distanceBackup;
        basic.pause(50);

        return Math.roundWithPrecision(distance, 4);
    }

    /**
     * get distance from ultrasonic range sensor (HC-SR04) [cm|inch|μs]
     * @param trig tigger pin
     * @param echo echo pin
     * @param unit desired conversion unit
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% blockId=ultrasonicsonar 
    //% block="(HC-SR04) ultrasonic pin |trig %trig|echo %echo|unit %unit"
    //% trig.defl=DigitalPin.P13
    //% echo.defl=DigitalPin.P14
    //% name.fieldEditor="gridpicker" 
    //% name.fieldOptions.columns=5
    //% name.fieldOptions.tooltips="false"
    //% name.fieldOptions.width="0"
    //% subcategory=Sensor group="Digital" 
    //% color=#D84A51 

    export function us_sonar(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.cm: return Math.roundWithPrecision(d / 58, 4);
            case PingUnit.inch: return Math.roundWithPrecision(d / 148, 4);
            default: return Math.roundWithPrecision(d, 4);
        }
    }

    /**
     * Get line finder sensor state [0-1]
    */
    //% blockId=hackbitLineFinderRead
    //% block="pin |%pin| line finder is seeing black. Reverse action |$reverseAction|"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function detectline(pin: DigitalPin, reverseAction: boolean): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (reverseAction) {
            if (pins.digitalReadPin(pin) == 1) {
                return false
            }
            else {
                return true
            }
        } else {
            if (pins.digitalReadPin(pin) == 1) {
                return true
            }
            else {
                return false
            }
        }
    }

    /**
     * Get collision sensor state [0-1]
    */
    //% blockId=hackbitCollisionRead
    //% block="collision sensor pin |%pin| activated"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function collisionSensor(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 0) {
            return true
        }
        else {
            return false
        }
    }

    /**
     * Get PIR sensor state [0-1]
    */
    //% blockId=hackbitPIRRead
    //% block="PIR sensor pin |%pin| detects motion"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function PIRState(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 0) {
            return false
        }
        else {
            return true
        }
    }

    /**
     * Get water sensor state [0-1]
    */
    //% blockId=hackbitWaterRead
    //% block="water sensor pin |%pin| detects water"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function WaterState(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 1) {
            return false
        }
        else {
            return true
        }
    }

    /**
     * Get Magnetic Switch state [0-1]
    */
    //% blockId=hackbitMagneticSwitchRead
    //% block="magnetic switch pin |%pin| activated"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function MagneticSwitchState(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullDown)
        if (pins.digitalReadPin(pin) == 1) {
            return true
        }
        else {
            return false
        }
    }

    /**
     * Get hall sensor state [0-1]
    */
    //% blockId=hackbitHallRead
    //% block="hall sensor pin |%pin| activated"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function HallState(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 0) {
            return true
        }
        else {
            return false
        }
    }

    /**
     * Get crash button state [0-1]
    */
    //% blockId=hackbitCrashRead
    //% block="crash sensor |%pin| is pressed"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function CrashButton(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 0) {
            return true
        }
        else {
            return false
        }
    }

    /**
     * Get flame sensor state [0-1]
    */
    //% blockId=hackbitFlameRead
    //% block="flame sensor pin |%pin| detects flame"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function FlameState(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 0) {
            return true
        }
        else {
            return false
        }
    }

    /**
     * Get touch sensor state [0-1]
    */
    //% blockId=hackbitTouchRead
    //% block="touch sensor pin |%pin| touched"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function TouchState(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 0) {
            return false
        }
        else {
            return true
        }
    }

    /**
     * Get vibration state [0-1] SW-420
    */
    //% blockId=hackbitVibrationRead
    //% block="vibration sensor pin |%pin| detects vibration"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function VibrationRead(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 0) {
            return false
        }
        else {
            return true
        }
    }

    let initairlevel: number = 0
    /**
    * Initialize Grove Air Quality Sensor (v1.3)
    * @param airlevelpin describe parameter here, eg: AnalogPin.P1
    */
    //% blockId="hackbitInitAirSensor" block="Initialize Air quality sensor at pin %airlevelpin"
    //% airlevelpin.fieldEditor="gridpicker"
    //% airlevelpin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Analog" 
    //% color=#D84A51 
    export function begin(airlevelpin: AnalogPin) {
        initairlevel = pins.analogReadPin(airlevelpin)
    }

    /**
    * Get Grove Air Quality Sensor (v1.3) level value (0~1023)
    * @param airlevelpin describe parameter here, eg: AnalogPin.P1
    */
    //% blockId="hackbitAirLevelRead" block="Air quality sensor (0~1023) at pin %airlevelpin |Serial output $serialOutput"
    //% airlevelpin.fieldEditor="gridpicker"
    //% airlevelpin.fieldOptions.columns=3
    //% serialOutput.defl=false
    //% subcategory=Sensor  group="Analog" 
    //% color=#D84A51 
    export function AirLevel(airlevelpin: AnalogPin, serialOutput: boolean): number {
        if (serialOutput) {
            serial.writeLine("Init value quality air level " + initairlevel)
        }
        let airlevel = (initairlevel + pins.analogReadPin(airlevelpin)) / 2
        initairlevel = airlevel
        if (serialOutput) {
            serial.writeLine("New value quality air level " + airlevel)
            serial.writeLine("----------------------------------------")
        }
        return Math.round(airlevel)
    }

    /**
    * Get soil moisture(0~100%) [capacitive]
    * @param capacitive soil moisture (range: 390~615) pin describe parameter here, eg: AnalogPin.P1
    */
    //% blockId="hackbitCapacitiveSoilMoistureRead" block="value of soil moisture(0~100) at pin %capacitivesoilhumiditypin. Range (sensor read) min|%vmin| max|%vmax|"
    //% capacitivesoilhumiditypin.fieldEditor="gridpicker"
    //% capacitivesoilhumiditypin.fieldOptions.columns=3
    //% vmin.defl=390
    //% vmax.defl=615
    //% subcategory=Sensor  group="Analog" 
    //% color=#BA474C 
    export function ReadCapacitiveSoilHumidity(capacitivesoilhumiditypin: AnalogPin, vmin: number, vmax: number): number {
        let voltage = 0;
        let soilmoisture = 0;
        voltage = pins.map(
            pins.analogReadPin(capacitivesoilhumiditypin),
            vmax,
            vmin,
            0,
            100
        );
        soilmoisture = voltage;
        return Math.round(soilmoisture);
    }


    /**
    * Get soil moisture(0~100%)
    * @param soilmoisturepin describe parameter here, eg: AnalogPin.P1
    */
    //% blockId="hackbitSoilMoistureRead" block="value of soil moisture(0~100) at pin %soilhumiditypin"
    //% soilhumiditypin.fieldEditor="gridpicker"
    //% soilhumiditypin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Analog" 
    //% color=#D84A51 
    export function ReadSoilHumidity(soilmoisturepin: AnalogPin): number {
        let voltage = 0;
        let soilmoisture = 0;
        voltage = pins.map(
            pins.analogReadPin(soilmoisturepin),
            0,
            1023,
            0,
            100
        );
        soilmoisture = voltage;
        return Math.round(soilmoisture);
    }

    /**
    * Get light intensity(0~100%)
    * @param lightintensitypin describe parameter here, eg: AnalogPin.P1
    */
    //% blockId="hackbitLightIntensityRead" block="value of light intensity(0~100) at pin %lightintensitypin"
    //% lightintensitypin.fieldEditor="gridpicker"
    //% lightintensitypin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Analog" 
    //% color=#D84A51 
    export function ReadLightIntensity(lightintensitypin: AnalogPin): number {
        let voltage2 = 0;
        let lightintensity = 0;
        voltage2 = pins.map(
            pins.analogReadPin(lightintensitypin),
            0,
            1023,
            0,
            100
        );
        lightintensity = voltage2;
        return Math.round(lightintensity);
    }

    /**
    * Get UV level value (0~15)
    * @param uvlevelpin describe parameter here, eg: AnalogPin.P1
    */
    //% blockId="hackbitUVLevelRead" block="UV sensor (0~15) at pin %uvlevelpin"
    //% uvlevelpin.fieldEditor="gridpicker"
    //% uvlevelpin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Analog" 
    //% color=#D84A51 
    export function UVLevel(uvlevelpin: AnalogPin): number {
        let UVlevel = pins.analogReadPin(uvlevelpin);
        if (UVlevel > 625) {
            UVlevel = 625
        }
        UVlevel = pins.map(
            UVlevel,
            0,
            625,
            0,
            15
        );
        return Math.round(UVlevel)
    }

    /** 
    * Get temperature value Celsius
    * @param temperaturepin describe parameter here, eg: AnalogPin.P1
    */
    //% blockId="hackbitTemperatureRead" block="value of temperature (Celsius) at pin %temperaturepin"
    //% temperaturepin.fieldEditor="gridpicker"
    //% temperaturepin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Analog" 
    //% color=#D84A51 
    export function ReadTemperature(temperaturepin: AnalogPin): number {
        let A               // value 
        let B = 4275        // B value of the thermistor
        let R = 0
        let R0 = 100000     // R0 = 100k
        let temp = 0
        A = pins.analogReadPin(temperaturepin)
        R = 1023.0 / A - 1.0
        R = R0 * R;
        temp = 1.0 / (Math.log(R / R0) / B + 1 / 298.15) - 273.15 // convert to temperature via datasheet
        return Math.round(temp)
    }

    /** 
    * Get Gas Sensor concentration value 
    */
    //% blockId="hackbitGasRead" block="%sensor gas sensor at pin %gaspin concentration value"
    //% gaspin.fieldEditor="gridpicker" gaspin.fieldOptions.columns=3
    //% sensor.fieldEditor="gridpicker" sensor.fieldOptions.columns=2    
    //% subcategory=Sensor  group="Analog" 
    //% color=#D84A51 
    export function hackbitGasRead(sensor: GasList, gaspin: AnalogPin): number {
        if (sensor == GasList.Co2) {
            return 1024 - pins.analogReadPin(gaspin)
        }
        return pins.analogReadPin(gaspin)
    }

    /** 
    * Get noise(dB)
    * @param noisepin describe parameter here, eg: AnalogPin.P1, (Loudness Sensor)
    */
    //% blockId="hackbitNoiseRead" block="value of noise(dB) at pin %noisepin (0~100)"
    //% noisepin.fieldEditor="gridpicker"
    //% noisepin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Analog" 
    //% color=#D84A51 
    export function ReadNoise(noisepin: AnalogPin): number {
        let level = 0
        let voltage3 = 0
        let noise = 0
        let h = 0
        let l = 0
        let sumh = 0
        let suml = 0
        pins.digitalWritePin(DigitalPin.P0, 0)
        for (let m = 0; m < 1000; m++) {
            level = level + pins.analogReadPin(noisepin)
        }
        level = level / 1000
        for (let n = 0; n < 1000; n++) {
            voltage3 = pins.analogReadPin(noisepin)
            if (voltage3 >= level) {
                h += 1
                sumh = sumh + voltage3
            } else {
                l += 1
                suml = suml + voltage3
            }
        }
        if (h == 0) {
            sumh = level
        } else {
            sumh = sumh / h
        }
        if (l == 0) {
            suml = level
        } else {
            suml = suml / l
        }
        noise = sumh - suml
        if (noise <= 4) {
            noise = pins.map(
                noise,
                0,
                4,
                30,
                50
            )
        } else if (noise <= 8) {
            noise = pins.map(
                noise,
                4,
                8,
                50,
                55
            )
        } else if (noise <= 14) {
            noise = pins.map(
                noise,
                9,
                14,
                55,
                60
            )
        } else if (noise <= 32) {
            noise = pins.map(
                noise,
                15,
                32,
                60,
                70
            )
        } else if (noise <= 60) {
            noise = pins.map(
                noise,
                33,
                60,
                70,
                75
            )
        } else if (noise <= 100) {
            noise = pins.map(
                noise,
                61,
                100,
                75,
                80
            )
        } else if (noise <= 150) {
            noise = pins.map(
                noise,
                101,
                150,
                80,
                85
            )
        } else if (noise <= 231) {
            noise = pins.map(
                noise,
                151,
                231,
                85,
                90
            )
        } else {
            noise = pins.map(
                noise,
                231,
                1023,
                90,
                120
            )
        }
        noise = Math.round(noise)
        return Math.round(noise)
    }

    /**
    * Get color from I2C Grove Color Sensor v1.3 (TCS3414CS) or v2.0 (TCS3472)
    * [0;65534]
    * @param selected color
    */
    //% blockId="grovecolorsensorgetcolor" 
    //% block="color sensor detected %Color"
    //% Color.fieldEditor="gridpicker"
    //% Color.fieldOptions.columns=2
    //% subcategory=Sensor  group="IIC" 
    //% color=#EB8071 
    export function color(col: Color): NumberFormat.UInt16BE {
        let nums, red, green, blue, clear: number;

        if (identifiant == 0) {   // No sensor previously detected
            pins.i2cWriteNumber(57, 132, NumberFormat.UInt8BE, false);
            nums = pins.i2cReadNumber(57, NumberFormat.UInt8BE, false);
            if (nums == 17) {     // Grove Sensor v1.3 detected
                identifiant = 1;
                pins.i2cWriteNumber(57, 129, NumberFormat.UInt8BE, false);
                pins.i2cWriteNumber(57, 0, NumberFormat.UInt8BE, true);
                pins.i2cWriteNumber(57, 135, NumberFormat.UInt8BE, false);
                pins.i2cWriteNumber(57, 48, NumberFormat.UInt8BE, true);
                pins.i2cWriteNumber(57, 128, NumberFormat.UInt8BE, false);
                pins.i2cWriteNumber(57, 3, NumberFormat.UInt8BE, true);
                basic.pause(50);
            } else {
                pins.i2cWriteNumber(41, 146, NumberFormat.UInt8BE, false);
                nums = pins.i2cReadNumber(41, NumberFormat.UInt8BE, false);
                if (nums == 68) {     // Grove Sensor v2 detected 
                    identifiant = 2;
                    pins.i2cWriteNumber(41, 129, NumberFormat.UInt8BE, false);
                    pins.i2cWriteNumber(41, 249, NumberFormat.UInt8BE, true);
                    pins.i2cWriteNumber(41, 143, NumberFormat.UInt8BE, false);
                    pins.i2cWriteNumber(41, 2, NumberFormat.UInt8BE, true);
                    pins.i2cWriteNumber(41, 128, NumberFormat.UInt8BE, false);
                    pins.i2cWriteNumber(41, 1, NumberFormat.UInt8BE, true);
                    basic.pause(50);
                    pins.i2cWriteNumber(41, 128, NumberFormat.UInt8BE, false);
                    pins.i2cWriteNumber(41, 3, NumberFormat.UInt8BE, true);
                    basic.pause(500);
                }
            }
        }

        if (identifiant == 1) {    // Grove Sensor v1.3 detected
            switch (col) {
                case Color.Red:
                    pins.i2cWriteNumber(57, 210, NumberFormat.UInt8BE, false);
                    red = pins.i2cReadNumber(57, NumberFormat.UInt16BE, true);
                    return swap16(red)
                    break
                case Color.Green:
                    pins.i2cWriteNumber(57, 208, NumberFormat.UInt8BE, false);
                    green = pins.i2cReadNumber(57, NumberFormat.UInt16BE, true);
                    return swap16(green)
                    break
                case Color.Blue:
                    pins.i2cWriteNumber(57, 212, NumberFormat.UInt8BE, false);
                    blue = pins.i2cReadNumber(57, NumberFormat.UInt16BE, true);
                    return swap16(blue)
                    break
                case Color.Clear:
                    pins.i2cWriteNumber(57, 214, NumberFormat.UInt8BE, false);
                    clear = pins.i2cReadNumber(57, NumberFormat.UInt16BE, true);
                    return swap16(clear)
                    break
            }
        }
        else if (identifiant == 2) {
            switch (col) {
                case Color.Red:
                    pins.i2cWriteNumber(41, 150, NumberFormat.UInt8BE, false);
                    red = pins.i2cReadNumber(41, NumberFormat.UInt16BE, true);
                    return swap16(red)
                    break
                case Color.Green:
                    pins.i2cWriteNumber(41, 152, NumberFormat.UInt8BE, false);
                    green = pins.i2cReadNumber(41, NumberFormat.UInt16BE, true);
                    return swap16(green)
                    break
                case Color.Blue:
                    pins.i2cWriteNumber(41, 154, NumberFormat.UInt8BE, false);
                    blue = pins.i2cReadNumber(41, NumberFormat.UInt16BE, true);
                    return swap16(blue)
                    break
                case Color.Clear:
                    pins.i2cWriteNumber(41, 148, NumberFormat.UInt8BE, false);
                    clear = pins.i2cReadNumber(41, NumberFormat.UInt16BE, true);
                    return swap16(clear)
                    break
            }
            return 0;
        }
        return 0;
    }

    /**
    * Read color from I2C APDS9960 Color Sensor [0;360]
    */
    //% blockId=apds9960_readcolor block="APDS9960 get color HUE (0~360)"
    //% subcategory=Sensor  group="IIC" 
    //% color=#EB8071 

    export function readColor(): number {
        if (color_first_init == false) {
            initModule()
            colorMode()
        }
        let tmp = i2cread_color(APDS9960_ADDR, APDS9960_STATUS) & 0x1;
        while (!tmp) {
            basic.pause(5);
            tmp = i2cread_color(APDS9960_ADDR, APDS9960_STATUS) & 0x1;
        }
        let c = i2cread_color(APDS9960_ADDR, APDS9960_CDATAL) + i2cread_color(APDS9960_ADDR, APDS9960_CDATAH) * 256;
        let r = i2cread_color(APDS9960_ADDR, APDS9960_RDATAL) + i2cread_color(APDS9960_ADDR, APDS9960_RDATAH) * 256;
        let g = i2cread_color(APDS9960_ADDR, APDS9960_GDATAL) + i2cread_color(APDS9960_ADDR, APDS9960_GDATAH) * 256;
        let b = i2cread_color(APDS9960_ADDR, APDS9960_BDATAL) + i2cread_color(APDS9960_ADDR, APDS9960_BDATAH) * 256;
        // map to rgb based on clear channel
        let avg = c / 3;
        r = r * 255 / avg;
        g = g * 255 / avg;
        b = b * 255 / avg;
        //let hue = rgb2hue(r, g, b);
        let hue = rgb2hsl(r, g, b)
        return hue
    }

    /**
    * Read color from I2C APDS9960 Color Sensor 
    * @param selected color
    */
    //% block="APDS9960 color sensor %color detects"
    //% subcategory=Sensor group="IIC Port"
    //% color.fieldEditor="gridpicker" color.fieldOptions.columns=3
    //% subcategory=Sensor  group="IIC" 
    //% color=#EB8071 

    export function checkColor(color: ColorList): boolean {
        let hue2 = readColor()
        switch (color) {
            case ColorList.red:
                if (hue2 > 330 || hue2 < 20) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.green:
                if (hue2 > 110 && 150 > hue2) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.blue:
                if (hue2 > 200 && 270 > hue2) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.cyan:
                if (hue2 > 160 && 180 > hue2) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.magenta:
                if (hue2 > 260 && 330 > hue2) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.yellow:
                if (hue2 > 30 && 90 > hue2) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.white:
                if (hue2 >= 180 && 200 > hue2) {
                    return true
                }
                else {
                    return false
                }
                break
        }
    }

    export class PAJ7620 {
        private paj7620WriteReg(addr: number, cmd: number) {
            let buf: Buffer = pins.createBuffer(2);
            buf[0] = addr;
            buf[1] = cmd;
            pins.i2cWriteBuffer(0x73, buf, false);
        }
        private paj7620ReadReg(addr: number): number {
            let buf2: Buffer = pins.createBuffer(1);
            buf2[0] = addr;
            pins.i2cWriteBuffer(0x73, buf2, false);
            buf2 = pins.i2cReadBuffer(0x73, 1, false);
            return buf2[0];
        }
        private paj7620SelectBank(bank: number) {
            if (bank == 0) this.paj7620WriteReg(0xEF, 0);
            else if (bank == 1) this.paj7620WriteReg(0xEF, 1);
        }
        private paj7620Init() {
            let temp2 = 0;
            this.paj7620SelectBank(0);
            temp2 = this.paj7620ReadReg(0);
            if (temp2 == 0x20) {
                for (let o = 0; o < 438; o += 2) {
                    this.paj7620WriteReg(initRegisterArray[o], initRegisterArray[o + 1]);
                }
            }
            this.paj7620SelectBank(0);
        }
        init() {
            this.paj7620Init();
            basic.pause(200);
        }
        read(): number {
            let data = 0, result2 = 0;
            data = this.paj7620ReadReg(0x43);
            switch (data) {
                case 0x01:
                    result2 = GroveGesture.Right;
                    break;
                case 0x02:
                    result2 = GroveGesture.Left;
                    break;
                case 0x04:
                    result2 = GroveGesture.Up;
                    break;
                case 0x08:
                    result2 = GroveGesture.Down;
                    break;
                case 0x10:
                    result2 = GroveGesture.Forward;
                    break;
                case 0x20:
                    result2 = GroveGesture.Backward;
                    break;
                case 0x40:
                    result2 = GroveGesture.Clockwise;
                    break;
                case 0x80:
                    result2 = GroveGesture.Anticlockwise;
                    break;
                default:
                    data = this.paj7620ReadReg(0x44);
                    if (data == 0x01)
                        result2 = GroveGesture.Wave;
                    break;
            }
            return result2;
        }
    }

    const gestureEventId = 3100;
    let lastGesture = GroveGesture.None;
    let paj7620 = new PAJ7620();
    /**
        * Do something when a gesture is detected
        * @param gesture type of gesture to detect
        * @param handler code to run
    */
    //% blockId= gesture_create_event block="on gesture sensor is %gesture"
    //% gesture.fieldEditor="gridpicker" gesture.fieldOptions.columns=3
    //% subcategory=Sensor  group="IIC" 
    //% color=#EB8071 
    export function onGesture(gesture: GroveGesture, handler: () => void) {
        control.onEvent(gestureEventId, gesture, handler);
        if (gesture_first_init) {
            paj7620.init();
            gesture_first_init = false
        }
        control.inBackground(() => {
            while (true) {
                const gesture = paj7620.read();
                if (gesture != lastGesture) {
                    lastGesture = gesture;
                    control.raiseEvent(gestureEventId, lastGesture);
                }
                basic.pause(100);
            }
        })
    }


    /*
     * Private functions
     */
    function swap16(val: NumberFormat.UInt16BE) {
        return ((val & 0xFF) << 8)
            | ((val >> 8) & 0xFF);
    }


    /***********   APDS 9960  **********/
    function i2cwrite_color(addr: number, reg: number, value: number) {
        let buf3 = pins.createBuffer(2)
        buf3[0] = reg
        buf3[1] = value
        pins.i2cWriteBuffer(addr, buf3)
    }

    function i2cread_color(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    function rgb2hsl(color_r: number, color_g: number, color_b: number): number {
        let Hue = 0
        // Convert the RGB value to the middle value of [0, 1].
        let R2 = color_r * 100 / 255;   //Since H25 does not support floating point operations, it is calculated by zooming 100 times, and the following calculations are also zooming 100 times
        let G = color_g * 100 / 255;
        let B2 = color_b * 100 / 255;

        let maxVal = Math.max(R2, Math.max(G, B2))//Find the maximum of R, G, and B
        let minVal = Math.min(R2, Math.min(G, B2)) //Find the minimum of R, G and B

        let Delta = maxVal - minVal;  //△ = Max - Min

        /***********   Calculate Hue  **********/
        if (Delta < 0) {
            Hue = 0;
        }
        else if (maxVal == R2 && G >= B2) //Maximum value is red
        {
            Hue = (60 * ((G - B2) * 100 / Delta)) / 100;  //Magnify 100 times
        }
        else if (maxVal == R2 && G < B2) {
            Hue = (60 * ((G - B2) * 100 / Delta) + 360 * 100) / 100;
        }
        else if (maxVal == G) //Maximum value is green
        {
            Hue = (60 * ((B2 - R2) * 100 / Delta) + 120 * 100) / 100;
        }
        else if (maxVal == B2) {
            Hue = (60 * ((R2 - G) * 100 / Delta) + 240 * 100) / 100;
        }
        return Hue
    }

    function initModule(): void {
        i2cwrite_color(APDS9960_ADDR, APDS9960_ATIME, 252) // default inte time 4x2.78ms
        i2cwrite_color(APDS9960_ADDR, APDS9960_CONTROL, 0x03) // todo: make gain adjustable
        i2cwrite_color(APDS9960_ADDR, APDS9960_ENABLE, 0x00) // put everything off
        i2cwrite_color(APDS9960_ADDR, APDS9960_GCONF4, 0x00) // disable gesture mode
        i2cwrite_color(APDS9960_ADDR, APDS9960_AICLEAR, 0x00) // clear all interrupt
        i2cwrite_color(APDS9960_ADDR, APDS9960_ENABLE, 0x01) // clear all interrupt
        color_first_init = true
    }

    function colorMode(): void {
        let tmp2 = i2cread_color(APDS9960_ADDR, APDS9960_ENABLE) | 0x2;
        i2cwrite_color(APDS9960_ADDR, APDS9960_ENABLE, tmp2);
    }


    /**
    * Query data from DHT11/DHT22 sensor. If you are using 4 pins/no PCB board versions, you'll need to pull up the data pin. 
    * It is also recommended to wait 1 (DHT11) or 2 (DHT22) seconds between each query.
    */
    //% blockId=dhtquery     
    //% block="Query $DHT|Data pin $dataPin|Pin pull up $pullUp|Serial output $serialOtput|Wait 2 sec after query $wait"
    //% pullUp.defl=true
    //% serialOtput.defl=false
    //% wait.defl=true
    //% blockExternalInputs=true
    //% subcategory=Sensor  group="DHT11/DHT22" 
    //% color=#DE6268 
    //% advanced=false

    export function queryData(DHT: DHTtype, dataPin: DigitalPin, pullUp: boolean, serialOtput: boolean, wait: boolean) {

        //initialize
        let startTime: number = 0
        let endTime: number = 0
        let checksum: number = 0
        let checksumTmp: number = 0
        let dataArray: boolean[] = []
        let resultArray: number[] = []
        let DHTstr: string = (DHT == DHTtype.DHT11) ? "DHT11" : "DHT22"

        for (let index = 0; index < 40; index++) dataArray.push(false)
        for (let index = 0; index < 5; index++) resultArray.push(0)

        _humidity = -999.0
        _temperature = -999.0
        _readSuccessful = false
        _sensorresponding = false
        startTime = input.runningTimeMicros()

        //request data
        pins.digitalWritePin(dataPin, 0) //begin protocol, pull down pin
        basic.pause(18)

        if (pullUp) pins.setPull(dataPin, PinPullMode.PullUp) //pull up data pin if needed
        pins.digitalReadPin(dataPin) //pull up pin
        control.waitMicros(40)

        if (pins.digitalReadPin(dataPin) == 1) {
            if (serialOtput) {
                serial.writeLine(DHTstr + " not responding!")
                serial.writeLine("----------------------------------------")
            }

        } else {

            _sensorresponding = true

            while (pins.digitalReadPin(dataPin) == 0); //sensor response
            while (pins.digitalReadPin(dataPin) == 1); //sensor response

            //read data (5 bytes)
            for (let index = 0; index < 40; index++) {
                while (pins.digitalReadPin(dataPin) == 1);
                while (pins.digitalReadPin(dataPin) == 0);
                control.waitMicros(28)
                //if sensor still pull up data pin after 28 us it means 1, otherwise 0
                if (pins.digitalReadPin(dataPin) == 1) dataArray[index] = true
            }

            endTime = input.runningTimeMicros()

            //convert byte number array to integer
            for (let index = 0; index < 5; index++)
                for (let index2 = 0; index2 < 8; index2++)
                    if (dataArray[8 * index + index2]) resultArray[index] += 2 ** (7 - index2)

            //verify checksum
            checksumTmp = resultArray[0] + resultArray[1] + resultArray[2] + resultArray[3]
            checksum = resultArray[4]
            if (checksumTmp >= 512) checksumTmp -= 512
            if (checksumTmp >= 256) checksumTmp -= 256
            if (checksum == checksumTmp) _readSuccessful = true

            //read data if checksum ok
            if (_readSuccessful) {
                if (DHT == DHTtype.DHT11) {
                    //DHT11
                    _humidity = resultArray[0] + resultArray[1] / 100
                    _temperature = resultArray[2] + resultArray[3] / 100
                } else {
                    //DHT22
                    let temp_sign: number = 1
                    if (resultArray[2] >= 128) {
                        resultArray[2] -= 128
                        temp_sign = -1
                    }
                    _humidity = (resultArray[0] * 256 + resultArray[1]) / 10
                    _temperature = (resultArray[2] * 256 + resultArray[3]) / 10 * temp_sign
                }
                if (_temptype == tempType.fahrenheit)
                    _temperature = _temperature * 9 / 5 + 32
            }
            //serial output
            if (serialOtput) {
                serial.writeLine(DHTstr + " query completed in " + (endTime - startTime) + " microseconds")
                if (_readSuccessful) {
                    serial.writeLine("Checksum ok")
                    serial.writeLine("Humidity: " + _humidity + " %")
                    serial.writeLine("Temperature: " + _temperature + (_temptype == tempType.celsius ? " *C" : " *F"))
                } else {
                    serial.writeLine("Checksum error")
                }
                serial.writeLine("----------------------------------------")
            }
        }
        //wait 2 sec after query if needed
        if (wait) basic.pause(2000)
    }

    /**
    * Read humidity/temperature data from lastest query of DHT11/DHT22
    */
    //% block="Read $data"
    //% blockId=dhtRead     
    //% subcategory=Sensor  group="DHT11/DHT22" 
    //% color=#DE6268 
    //% advanced=false

    export function readData(data: dataType): number {
        return data == dataType.humidity ? _humidity : _temperature
    }

    /**
    * Select temperature type (Celsius/Fahrenheit)"
    */
    //% block="Temperature type: $temp" 
    //% blockId=dhtTempType     
    //% subcategory=Sensor  group="DHT11/DHT22" 
    //% color=#DE6268 
    //% advanced=false

    export function selectTempType(temp: tempType) {
        _temptype = temp
    }

    /**
    * Determind if last query is successful (checksum ok)
    */
    //% block="Last query successful?"
    //% blockId=dhtLastQuerySuccess     
    //% subcategory=Sensor  group="DHT11/DHT22" 
    //% color=#DE6268 
    //% advanced=false

    export function readDataSuccessful(): boolean {
        return _readSuccessful
    }

    /**
    * Determind if sensor responded successfully (not disconnected, etc) in last query
    */
    //% block="Last query sensor responding?" 
    //% blockId=dhtLastQueryResponding     
    //% subcategory=Sensor  group="DHT11/DHT22" 
    //% color=#DE6268 
    //% advanced=false

    export function sensorrResponding(): boolean {
        return _sensorresponding
    }
    /* BME280/BMP280 */
    class hckbme280 {
        is_setup: boolean
        addr: number
        dig_t1: uint16
        dig_t2: int16
        dig_t3: int16
        dig_p1: uint16
        dig_p2: int16
        dig_p3: int16
        dig_p4: int16
        dig_p5: int16
        dig_p6: int16
        dig_p7: int16
        dig_p8: int16
        dig_p9: int16
        dig_h1: uint8
        dig_h2: int16
        dig_h3: uint8
        dig_h4: int16
        dig_h5: int16
        dig_h6: int8

        temperature: number
        pressure: number
        humidity: number
        altitude: number
        //qnh: number

        constructor(addr: number) {
            this.is_setup = false
            this.addr = addr
        }

        setup(): void {
            if (this.is_setup) return
            this.is_setup = true
            //this.qnh = 101325 // hPa standard ISO atmosphere at sea level

            smbus.writeByte(this.addr, 0xe0, 0xb6) // Soft reset
            control.waitMicros(200000)
            smbus.writeByte(this.addr, 0xf2, 0b00000111) // x16 humidity oversampling
            control.waitMicros(200000)
            smbus.writeByte(this.addr, 0xf4, 0b10110111) // x16 oversampling, normal mode
            control.waitMicros(200000)
            smbus.writeByte(this.addr, 0xf5, 0b10010000) // 500ms standby time, 16 filter coef
            control.waitMicros(200000)

            // Registers 0x88 to 0x9F, then 0xA0 padding byte (b) and finally 0xA1
            let compensation: number[] = smbus.unpack("<HhhHhhhhhhhhbB", smbus.readBuffer(this.addr, 0x88, 26))

            // Registers 0xE1 to 0xE7
            let temp: number[] = smbus.unpack("<hBbBbb", smbus.readBuffer(this.addr, 0xe1, 7))

            compensation.push(temp.shift()) // first two-byte number is dig_h2 (0xe1 / 0xe2)
            compensation.push(temp.shift()) // second single-byte number is dig_h3 (0xe3)

            let reg_e4: number = temp.shift()
            let reg_e5: number = temp.shift()
            let reg_e6: number = temp.shift()

            compensation.push((reg_e5 & 0x0f) | (reg_e4 << 4)) // dig_h4
            compensation.push((reg_e5 >> 4) | (reg_e6 << 4)) // dig_h5

            compensation.push(temp.shift()) // dig_h6 (0xe7)

            this.dig_t1 = compensation.shift()
            this.dig_t2 = compensation.shift()
            this.dig_t3 = compensation.shift()
            this.dig_p1 = compensation.shift()
            this.dig_p2 = compensation.shift()
            this.dig_p3 = compensation.shift()
            this.dig_p4 = compensation.shift()
            this.dig_p5 = compensation.shift()
            this.dig_p6 = compensation.shift()
            this.dig_p7 = compensation.shift()
            this.dig_p8 = compensation.shift()
            this.dig_p9 = compensation.shift()
            compensation.shift() // Dispose of unused byte (0xa0)
            this.dig_h1 = compensation.shift()
            this.dig_h2 = compensation.shift()
            this.dig_h3 = compensation.shift()
            this.dig_h4 = compensation.shift()
            this.dig_h5 = compensation.shift()
            this.dig_h6 = compensation.shift()
        }

        getChipID(): number {
            this.setup()
            return smbus.readBuffer(this.addr, 0xd0, 1)[0]
        }

        update(): void {
            this.setup()
            let raw: Buffer = smbus.readBuffer(this.addr, 0xf7, 8)

            let raw_temp: number = (raw[3] << 12) + (raw[4] << 4) + (raw[5] >> 4)
            let raw_press: number = (raw[0] << 12) + (raw[1] << 4) + (raw[2] >> 4)
            let raw_hum: number = (raw[6] << 8) + raw[7]

            let var1: number = ((((raw_temp >> 3) - (this.dig_t1 << 1))) * (this.dig_t2)) >> 11;
            let var2: number = (((((raw_temp >> 4) - (this.dig_t1)) * ((raw_temp >> 4) - (this.dig_t1))) >> 12) * (this.dig_t3)) >> 14;
            let t_fine: number = var1 + var2;
            this.temperature = ((t_fine * 5 + 128) >> 8)
            var1 = (t_fine >> 1) - 64000
            var2 = (((var1 >> 2) * (var1 >> 2)) >> 11) * this.dig_p6
            var2 = var2 + ((var1 * this.dig_p5) << 1)
            var2 = (var2 >> 2) + (this.dig_p4 << 16)
            var1 = (((this.dig_p3 * ((var1 >> 2) * (var1 >> 2)) >> 13) >> 3) + (((this.dig_p2) * var1) >> 1)) >> 18
            var1 = ((32768 + var1) * this.dig_p1) >> 15
            if (var1 == 0) {
                return // avoid exception caused by division by zero
            }

            let _p = ((1048576 - raw_press) - (var2 >> 12)) * 3125
            _p = (_p / var1) * 2;
            var1 = (this.dig_p9 * (((_p >> 3) * (_p >> 3)) >> 13)) >> 12
            var2 = (((_p >> 2)) * this.dig_p8) >> 13
            this.pressure = _p + ((var1 + var2 + this.dig_p7) >> 4)

            var1 = t_fine - 76800
            var2 = (((raw_hum << 14) - (this.dig_h4 << 20) - (this.dig_h5 * var1)) + 16384) >> 15
            var1 = var2 * (((((((var1 * this.dig_h6) >> 10) * (((var1 * this.dig_h3) >> 11) + 32768)) >> 10) + 2097152) * this.dig_h2 + 8192) >> 14)
            var2 = var1 - (((((var1 >> 15) * (var1 >> 15)) >> 7) * this.dig_h1) >> 4)
            if (var2 < 0) var2 = 0
            if (var2 > 419430400) var2 = 419430400
            this.humidity = (var2 >> 12)

        }

        /*setQNH(qnh: number): void {
            this.qnh = qnh
        }*/

        getTemperature(): number {
            this.update()
            return this.temperature
        }

        getPressure(): number {
            this.update()
            return this.pressure
        }

        getHumidity(): number {
            this.update()
            return this.humidity
        }

        getAltitude(): number {
            this.update()
            return this.altitude
        }
    }

    let _bme280: hckbme280 = new hckbme280(0x76)

    let sensitivity: number = 25

    export function getBME280ChipID(): number {
        return _bme280.getChipID()
    }

    /**
     * Return the temperature in degrees celcius with two decimal places
     */
    //% blockId=envirobit_get_temperature_decimal
    //% block="Get temperature (decimal)"
    //% subcategory=Sensor  group="BMP280/BME280" 
    //% color=#E38A8E
    //% advanced=false

    export function getTemperatureDecimal(): number {
        return Math.roundWithPrecision(_bme280.getTemperature() / 100.0, 2)
    }

    /**
     * Return the temperature in degrees celcius * 100
     */
    //% blockId=envirobit_get_temperature_fine
    //% block="Get temperature (x100)"
    //% subcategory=Sensor  group="BMP280/BME280" 
    //% color=#E38A8E
    //% advanced=false
    export function getTemperatureFine(): number {
        return Math.round(_bme280.getTemperature())
    }

    /**
     * Get the air pressure in hPa with two decimal places
     */
    //% blockId=envirobit_get_pressure_decimal
    //% block="Get pressure (decimal)"
    //% subcategory=Sensor  group="BMP280/BME280" 
    //% color=#E38A8E
    //% advanced=false
    export function getPressureDecimal(): number {
        return Math.roundWithPrecision(_bme280.getPressure() / 100.0, 2)
    }

    /**
     * Get the air pressure in pascals (hPa * 100)
     */
    //% blockId=envirobit_get_pressure_fine
    //% block="Get pressure (x100)"
    //% subcategory=Sensor  group="BMP280/BME280" 
    //% color=#E38A8E
    //% advanced=false
    export function getPressureFine(): number {
        return _bme280.getPressure()
    }

    /**
     * Get the relative humidity in % with two decimal places
     */
    //% blockId=envirobit_get_humidity_decimal
    //% block="Get humidity (decimal)"
    //% subcategory=Sensor  group="BMP280/BME280" 
    //% color=#E38A8E
    //% advanced=false
    export function getHumidityDecimal(): number {
        return Math.roundWithPrecision(_bme280.getHumidity() / 1024.0, 2)
    }

    /**
     * Get the relative humidity in % * 100
     */
    //% blockId=envirobit_get_humidity_fine
    //% block="Get humidity (x100)"
    //% subcategory=Sensor  group="BMP280/BME280" 
    //% color=#E38A8E
    //% advanced=false
    export function getHumidityFine(): number {
        return Math.round((_bme280.getHumidity() * 100.0) / 1024.0)
    }

    /**
     * Get the altitude  
     * @param atmosphere Input atmosphere (Pa)
     */
    //% blockId=envirobit_get_altitude_decimal
    //% block="Get altitude (decimal) $stdatmosphere Pa"
    //% stdatmosphere.defl=101325
    //% subcategory=Sensor  group="BMP280/BME280" 
    //% color=#E38A8E
    //% advanced=false
    export function getAltitudeDecimal(stdatmosphere: number): number {
        let vAtmosphere: number = stdatmosphere; // Standard atmosphere
        let vRd: number = 287.053; // Ideal Gas Constant
        let vTZ: number = 459.67; // Absolute zero Fahrenheit scale
        let vTemperatureF: number = getTemperatureDecimal() * 9 / 5 + 32;
        let vPressure: number = getPressureDecimal() * 100;
        let vAlt1: number = vPressure / vAtmosphere;
        let vAlt2: number = Math.log(vAlt1);
        let vAlt3: number = vAlt2 * vRd;
        let vAlt4: number = vAlt3 * ((vTemperatureF + vTZ) * 5 / 9);
        let vAltitude: number = vAlt4 / -9.8;
        return Math.roundWithPrecision(vAltitude, 2)
    }

    /**
     * round with precision  
     * @param decimals
     */
    //% blockId=hackibit_roundprecision
    //% block="round $value decimal $decimal"
    //% block.loc.pt-BR="arredondar $value decimal $decimal"
    //% decimal.defl=2
    //% subcategory=Math
    //% color=#600DA3
    //% advanced=false
    export function roundwithprecision(value: number, decimal: number): number {
        return Math.roundWithPrecision(value, decimal)
    }
}

namespace smbus {
    export function writeByte(addr: number, register: number, value: number): void {
        let temp = pins.createBuffer(2);
        temp[0] = register;
        temp[1] = value;
        pins.i2cWriteBuffer(addr, temp, false);
    }
    export function writeBuffer(addr: number, register: number, value: Buffer): void {
        let temp = pins.createBuffer(value.length + 1);
        temp[0] = register;
        for (let x = 0; x < value.length; x++) {
            temp[x + 1] = value[x];
        }
        pins.i2cWriteBuffer(addr, temp, false);
    }
    export function readBuffer(addr: number, register: number, len: number): Buffer {
        let temp = pins.createBuffer(1);
        temp[0] = register;
        pins.i2cWriteBuffer(addr, temp, false);
        return pins.i2cReadBuffer(addr, len, false);
    }
    function readNumber(addr: number, register: number, fmt: NumberFormat = NumberFormat.UInt8LE): number {
        let temp = pins.createBuffer(1);
        temp[0] = register;
        pins.i2cWriteBuffer(addr, temp, false);
        return pins.i2cReadNumber(addr, fmt, false);
    }
    export function unpack(fmt: string, buf: Buffer): number[] {
        let le: boolean = true;
        let offset: number = 0;
        let result: number[] = [];
        let num_format: NumberFormat = 0;
        for (let c = 0; c < fmt.length; c++) {
            switch (fmt.charAt(c)) {
                case '<':
                    le = true;
                    continue;
                case '>':
                    le = false;
                    continue;
                case 'c':
                case 'B':
                    num_format = le ? NumberFormat.UInt8LE : NumberFormat.UInt8BE; break;
                case 'b':
                    num_format = le ? NumberFormat.Int8LE : NumberFormat.Int8BE; break;
                case 'H':
                    num_format = le ? NumberFormat.UInt16LE : NumberFormat.UInt16BE; break;
                case 'h':
                    num_format = le ? NumberFormat.Int16LE : NumberFormat.Int16BE; break;
            }
            result.push(buf.getNumber(num_format, offset));
            offset += pins.sizeOf(num_format);
        }
        return result;
    }

}