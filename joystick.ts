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

let TubeTab: number [] = [
    0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07,
    0x7f, 0x6f, 0x77, 0x7c, 0x39, 0x5e, 0x79, 0x71
];

enum GroveJoystickKey {
    //% block="None"
    None = 0,
    //% block="Right"
    Right = 1,
    //% block="Left"
    Left = 2,
    //% block="Up"
    Up = 3,
    //% block="Down"
    Down = 4,
    //% block="Upper left"
    UL = 5,
    //% block="Upper right"
    UR = 6,
    //% block="Lower left"
    LL = 7,
    //% block="Lower right"
    LR = 8,
    //% block="press"
    Press = 9
}


/**
 * Functions to operate Grove module.
 */
//% weight=10 color=#9F79EE icon="\uf1b3" block="Joy"
//% groups='["4-Digit","Ultrasonic","Gesture","Thumbjoystick","UartWiFi"]'
namespace joy {
    /**
     * 
     */
    export class PAJ7620 {
        private paj7620WriteReg(addr: number, cmd: number) {
            let buf: Buffer = pins.createBuffer(2);

            buf[0] = addr;
            buf[1] = cmd;

            pins.i2cWriteBuffer(0x73, buf, false);
        }

        private paj7620ReadReg(addr: number): number {
            let buf: Buffer = pins.createBuffer(1);

            buf[0] = addr;

            pins.i2cWriteBuffer(0x73, buf, false);

            buf = pins.i2cReadBuffer(0x73, 1, false);

            return buf[0];
        }

        private paj7620SelectBank(bank: number) {
            if (bank == 0) this.paj7620WriteReg(0xEF, 0);
            else if (bank == 1) this.paj7620WriteReg(0xEF, 1);
        }

        private paj7620Init() {
            let temp = 0;

            this.paj7620SelectBank(0);

            temp = this.paj7620ReadReg(0);
            if (temp == 0x20) {
                for (let i = 0; i < 438; i += 2) {
                    this.paj7620WriteReg(initRegisterArray[i], initRegisterArray[i + 1]);
                }
            }

            this.paj7620SelectBank(0);
        }
    }
    /**
     * 
     */
    export class TM1637
    {
        clkPin: DigitalPin;
        dataPin: DigitalPin;
        brightnessLevel: number;     
        pointFlag: boolean;
        buf: Buffer;

        private writeByte(wrData: number) 
        {
            for(let i = 0; i < 8; i ++)
            {
                pins.digitalWritePin(this.clkPin, 0);
                if(wrData & 0x01)pins.digitalWritePin(this.dataPin, 1);
                else pins.digitalWritePin(this.dataPin, 0);
                wrData >>= 1;
                pins.digitalWritePin(this.clkPin, 1);
            }
            
            pins.digitalWritePin(this.clkPin, 0); // Wait for ACK
            pins.digitalWritePin(this.dataPin, 1);
            pins.digitalWritePin(this.clkPin, 1);
        }
        
        private start()
        {
            pins.digitalWritePin(this.clkPin, 1);
            pins.digitalWritePin(this.dataPin, 1);
            pins.digitalWritePin(this.dataPin, 0);
            pins.digitalWritePin(this.clkPin, 0);
        }
        
        private stop()
        {
            pins.digitalWritePin(this.clkPin, 0);
            pins.digitalWritePin(this.dataPin, 0);
            pins.digitalWritePin(this.clkPin, 1);
            pins.digitalWritePin(this.dataPin, 1);
        }
        
        private coding(dispData: number): number
        {
            let pointData = 0;
            
            if(this.pointFlag == true)pointData = 0x80;
            else if(this.pointFlag == false)pointData = 0;
            
            if(dispData == 0x7f)dispData = 0x00 + pointData;
            else dispData = TubeTab[dispData] + pointData;
            
            return dispData;
        } 
    }

    export class GroveJoystick
    {
        /**
         * Detect position from Grove - Thumb Joystick
         * @param xPin
         * @param yPin
         */
     
        joyread(xPin: AnalogPin, yPin: AnalogPin): number {

            let xdata = 0, ydata = 0, result = 0;
            if (xPin && yPin) {
                xdata = pins.analogReadPin(xPin);
                ydata = pins.analogReadPin(yPin);
                if (xdata > 1000) {
                    result = GroveJoystickKey.Press;
                }
                else if (xdata > 600) {
                    if (ydata > 600) result = GroveJoystickKey.UR;
                    else if (ydata < 400) result = GroveJoystickKey.LR;
                    else result = GroveJoystickKey.Right;
                }
                else if (xdata < 400) {
                    if (ydata > 600) result = GroveJoystickKey.UL;
                    else if (ydata < 400) result = GroveJoystickKey.LL;
                    else result = GroveJoystickKey.Left;
                }
                else {
                    if (ydata > 600) result = GroveJoystickKey.Up;
                    else if (ydata < 400) result = GroveJoystickKey.Down;
                    else result = GroveJoystickKey.None;
                }
            }
            else {
                result =  GroveJoystickKey.None;
            }
            return result;
        }
    }
    
    const joystickEventID = 3101;
    let lastJoystick = GroveJoystickKey.None;
    let distanceBackup: number = 0;
    let joystick = new GroveJoystick();
    let paj7620 = new PAJ7620();
    // adapted to Calliope mini V2 Core by M.Klein 17.09.2020

    /**
     * get Joystick key
     * 
     */
    //% blockId=grove_getjoystick block="get joystick key at|%xpin|and|%ypin"
    //% group="Thumbjoystick" xpin.defl=AnalogPin.C16 ypin.defl=AnalogPin.C17
    export function getJoystick(xpin: AnalogPin, ypin: AnalogPin): number {
        return joystick.joyread(xpin, ypin);
    }

    /**
     * Converts the key name to a number
     * Useful for comparisons
     */
    //% blockId=joystickkey block="%key"
    //% group="Thumbjoystick"
    export function joystickkey(key: GroveJoystickKey): number {
        return key;
    }

    /**
     * Do something when a key is detected by Grove - Thumb Joystick
     * @param key type of joystick to detect
     * @param xpin
     * @param ypin
     * @param handler code to run
     */
    //% blockId=grove_joystick_create_event block="on Key|%key at |%xpin|and|%ypin"
    //% group="Thumbjoystick" xpin.defl=AnalogPin.C16 ypin.defl=AnalogPin.C17

    export function onJoystick(key: GroveJoystickKey, xpin: AnalogPin, ypin: AnalogPin, handler: () => void) {
        control.onEvent(joystickEventID, key, handler);
        control.inBackground(() => {
            while(true) {
                const key = joystick.joyread(xpin, ypin);
                if (key != lastJoystick) {
                    lastJoystick = key; 
                    control.raiseEvent(joystickEventID, lastJoystick);
                }
                basic.pause(50);
            }
        })
        
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

    function sendAtCmd(cmd: string) {
        serial.writeString(cmd + "\u000D\u000A")
    }
}