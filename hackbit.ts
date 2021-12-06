/**
 * Library for hackbit,  micro:bit project board https://www.hackids.com.br
*/
//% weight=50 color=#C82A32 icon="\uf0eb"    
namespace hackbit {
    export enum OnOff {
        //% block="On"
        On = 1,
        //% block="Off"
        Off = 0
    }

    export enum GroveJoystickKey {
        //% block="none"
        None = 0,
        //%block="Right"
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

    let TubeTab: number[] = [
        0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07,
        0x7f, 0x6f, 0x77, 0x7c, 0x39, 0x5e, 0x79, 0x71
    ];

    export let digit_clkPin: DigitalPin;
    export let digit_dataPin: DigitalPin;
    export let digit_brightnessLevel: number;
    export let digit_pointFlag: boolean;
    export let digit_buf: Buffer;


    /**
    * Set relay state
    */
    //% blockId=hackbitRelay
    //% block="relay pin |%pin| state |%RelayState|"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% RelayState.fieldEditor="gridpicker"
    //% RelayState.fieldOptions.columns=2
    //% RelayState.min=0 RelayState.max=1
    //% subcategory=Actuators  group="Digital" 
    //% color=#D74149 
    export function hackbitRelayState(pin: DigitalPin, RelayState: OnOff): void {
        switch (RelayState) {
            case 0:
                pins.digitalWritePin(pin, 0)
                break;
            case 1:
                pins.digitalWritePin(pin, 1)
                break;
        }
    }

    /**
     * Set vibration motor state
    */
    //% blockId=hackbitVibrationMotor
    //% block="vibration motor pin |%pin| state |%VibrationMotorState|"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% VibrationMotorState.fieldEditor="gridpicker"
    //% VibrationMotorState.fieldOptions.columns=2
    //% VibrationMotorState.min=0 VibrationMotorState.max=1
    //% subcategory=Actuators  group="Digital" 
    //% color=#D74149 
    export function hackbitVibrationMotorState(pin: DigitalPin, VibrationMotorState: OnOff): void {
        pins.setPull(pin, PinPullMode.PullUp)
        switch (VibrationMotorState) {
            case 0:
                pins.digitalWritePin(pin, 0)
                break;
            case 1:
                pins.digitalWritePin(pin, 1)
                break;
        }
    }

    /**
     * Set mini fan state
    */
    //% blockId=hackbitMiniFan
    //% block="mini fan pin |%pin| state |%MiniFanState|"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% MiniFanState.fieldEditor="gridpicker"
    //% MiniFanState.fieldOptions.columns=2
    //% MiniFanState.min=0 MiniFanState.max=1
    //% subcategory=Actuators  group="Digital" 
    //% color=#D74149 
    export function hackbitMiniFanState(pin: DigitalPin, MiniFanState: OnOff): void {
        switch (MiniFanState) {
            case 0:
                pins.digitalWritePin(pin, 0)
                break;
            case 1:
                pins.digitalWritePin(pin, 1)
                break;
        }
    }

    /**
     * Set laser state
    */
    //% blockId=hackbitLaser
    //% block="laser pin |%pin| state |%LaserState|"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% LaserState.fieldEditor="gridpicker"
    //% LaserState.fieldOptions.columns=2
    //% LaserState.min=0 LaserState.max=1
    //% subcategory=Actuators  group="Digital" 
    //% color=#D74149 
    export function hackbitLaserState(pin: DigitalPin, LaserState: OnOff): void {
        switch (LaserState) {
            case 0:
                pins.digitalWritePin(pin, 0)
                break;
            case 1:
                pins.digitalWritePin(pin, 1)
                break;
        }
    }

    export class GroveJoystick {
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
                result = GroveJoystickKey.None;
            }
            return result;
        }
    }

    const joystickEventID = 3101;
    let lastJoystick = GroveJoystickKey.None;
    let joystick = new GroveJoystick();
    /**
     * get Joystick key
     * 
     */
    //% blockId=grove_getjoystick block="get joystick key at|%xpin|and|%ypin"
    //% xpin.fieldEditor="gridpicker"
    //% xpin.fieldOptions.columns=3
    //% ypin.fieldEditor="gridpicker"
    //% ypin.fieldOptions.columns=3
    //% group="Thumb Joystick" xpin.defl=AnalogPin.C16 ypin.defl=AnalogPin.C17
    //% subcategory=Input  color=#DA5259 
    export function getJoystick(xpin: AnalogPin, ypin: AnalogPin): number {
        return joystick.joyread(xpin, ypin);
    }

    /**
     * Converts the key name to a number
     * Useful for comparisons
     */
    //% blockId=joystickkey block="%key"
    //% key.fieldEditor="gridpicker"
    //% key.fieldOptions.columns=2
    //% group="Thumb Joystick"
    //% subcategory=Input  color=#DA5259 

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
    //% blockId=grove_joystick_create_event block="on key|%key at |%xpin|and|%ypin"
    //% key.fieldEditor="gridpicker"
    //% key.fieldOptions.columns=2
    //% xpin.fieldEditor="gridpicker"
    //% xpin.fieldOptions.columns=3
    //% ypin.fieldEditor="gridpicker"
    //% ypin.fieldOptions.columns=3
    //% group="Thumb Joystick" xpin.defl=AnalogPin.C16 ypin.defl=AnalogPin.C17
    //% subcategory=Input  color=#DA5259 

    export function onJoystick(key: GroveJoystickKey, xpin: AnalogPin, ypin: AnalogPin, handler: () => void) {
        control.onEvent(joystickEventID, key, handler);
        control.inBackground(() => {
            while (true) {
                const key = joystick.joyread(xpin, ypin);
                if (key != lastJoystick) {
                    lastJoystick = key;
                    control.raiseEvent(joystickEventID, lastJoystick);
                }
                basic.pause(50);
            }
        })

    }

    /**
     * Get button state [0-1]
    */
    //% blockId=hackbitButtonRead
    //% block="button pin |$pin| is pressed. Reverse action |$reverseAction|"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% reverseAction.defl=false
    //% subcategory=Input  group="Digital" 
    //% color=#DA5259 
    export function buttonState(pin: DigitalPin, reverseAction: boolean): boolean {
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
     * Get Switch (P) state [0-1]
    */
    //% blockId=hackbitSwitchRead
    //% block="switch(P) pin |%pin| activated"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Input  group="Digital" 
    //% color=#DA5259 
    export function SwitchState(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 1) {
            return true
        }
        else {
            return false
        }
    }

    /**
     * Get button LED state [0-1]
    */
    //% blockId=hackbitButtonLEDRead
    //% block="button pin LED |%pin| is pressed (w)"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Input  group="Digital" 
    //% color=#DA5259 
    export function buttonLEDState(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 0) {
            return true
        }
        else {
            return false
        }
    }

    /**
     * Get Tilt state [0-1]
    */
    //% blockId=hackbitTiltRead
    //% block="tilt switch pin |%pin| tilted"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Input  group="Digital" 
    //% color=#DA5259 
    export function TiltState(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullDown)
        if (pins.digitalReadPin(pin) == 1) {
            return false
        }
        else {
            return true
        }
    }

    /**
     * Get analog potentiometer value [0-1023]
    */
    //% blockId=hackbitPotargRead
    //% block="potentiometer pin |%pin| value"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Input  group="Analog" 
    //% color=#DA5259 
    export function potarValue(pin: AnalogPin): number {
        return pins.analogReadPin(pin);
    }

    /**
     * Get rotary angle sensor [0-300]
    */
    //% blockId=hackbitRotaryRead
    //% block="rotary angle sensor pin |%pin| value"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Input  group="Analog" 
    //% color=#DA5259 
    export function rotaryValue(pin: AnalogPin): number {
        let tRotaryAngle = pins.analogReadPin(pin)
        let RotaryAngle
        RotaryAngle = pins.map(
            tRotaryAngle,
            0,
            1023,
            0,
            300
        );
        return Math.round(RotaryAngle)
    }

    /**
     * Set Led state
    */
    //% blockId=hackbitLedSet
    //% block="led |%pin| to |%state|"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% state.fieldEditor="gridpicker"
    //% state.fieldOptions.columns=2
    //% state.min=0 state.max=1

    //% state.min=0 state.max=1
    //% subcategory=Display  group="Digital" 
    //% color=#DC5A60 
    export function ledState(pin: DigitalPin, state: OnOff): void {
        pins.digitalWritePin(pin, state);
    }

    /**
     * Create a new driver Grove - 4-Digit Display
     * @param clkPin value of clk pin number
     * @param dataPin value of data pin number
     */
    //% blockId=hackbit_tm1637_create block="4-Digit Display at|%clkPin|and|%dataPin"
    //% clkPin.defl=DigitalPin.P13
    //% dataPin.defl=DigitalPin.P14
    //% clkPin.fieldEditor="gridpicker"    
    //% clkPin.fieldOptions.columns=3
    //% dataPin.fieldEditor="gridpicker"
    //% dataPin.fieldOptions.columns=3
    //% subcategory=Display  group="7-Seg" 
    //% color=#DE6268 
    //% weight=60
    export function digit_createDisplay(clkPin: DigitalPin, dataPin: DigitalPin): void {
        digit_buf = pins.createBuffer(4);
        digit_clkPin = clkPin;
        digit_dataPin = dataPin;
        digit_brightnessLevel = 0;
        digit_pointFlag = false;
        digit_clear();
    }

    /**
    * Show a 4 digits number on display
    * @param dispData value of number
    */
    //% blockId=hackbit_tm1637_display_number block="show number|%dispData"
    //% subcategory=Display  group="7-Seg" 
    //% color=#DE6268 
    //% weight=59
    export function digit_show(dispData: number) {
        let compare_01: number = dispData % 100;
        let compare_001: number = dispData % 1000;

        if (dispData < 10) {
            digit_bit(dispData, 3);
            digit_bit(0x7f, 2);
            digit_bit(0x7f, 1);
            digit_bit(0x7f, 0);
        }
        else if (dispData < 100) {
            digit_bit(dispData % 10, 3);
            if (dispData > 90) {
                digit_bit(9, 2);
            } else {
                digit_bit(Math.floor(dispData / 10) % 10, 2);
            }

            digit_bit(0x7f, 1);
            digit_bit(0x7f, 0);
        }
        else if (dispData < 1000) {
            digit_bit(dispData % 10, 3);
            if (compare_01 > 90) {
                digit_bit(9, 2);
            } else {
                digit_bit(Math.floor(dispData / 10) % 10, 2);
            }
            if (compare_001 > 900) {
                digit_bit(9, 1);
            } else {
                digit_bit(Math.floor(dispData / 100) % 10, 1);
            }
            digit_bit(0x7f, 0);
        }
        else if (dispData < 10000) {
            digit_bit(dispData % 10, 3);
            if (compare_01 > 90) {
                digit_bit(9, 2);
            } else {
                digit_bit(Math.floor(dispData / 10) % 10, 2);
            }
            if (compare_001 > 900) {
                digit_bit(9, 1);
            } else {
                digit_bit(Math.floor(dispData / 100) % 10, 1);
            }
            if (dispData > 9000) {
                digit_bit(9, 0);
            } else {
                digit_bit(Math.floor(dispData / 1000) % 10, 0);
            }
        }
        else {
            digit_bit(9, 3);
            digit_bit(9, 2);
            digit_bit(9, 1);
            digit_bit(9, 0);
        }
    }

    /**
     * Set the brightness level of display at from 0 to 7
     * @param level value of brightness light level
     */
    //% blockId=hackbit_tm1637_set_display_level block="brightness level to|%level"
    //% level.min=0 level.max=7
    //% weight=58
    //% subcategory=Display  group="7-Seg" 
    //% color=#DE6268 
    export function digit_set(level: number) {
        digit_brightnessLevel = level;

        digit_bit(digit_buf[0], 0x00);
        digit_bit(digit_buf[1], 0x01);
        digit_bit(digit_buf[2], 0x02);
        digit_bit(digit_buf[3], 0x03);
    }

    /**
     * Show a single number from 0 to 9 at a specified digit of Grove - 4-Digit Display
     * @param dispData value of number
     * @param bitAddr value of bit number
     */
    //% blockId=grove_tm1637_display_bit block="%strip|show single number|%dispData|at digit|%bitAddr"
    //% dispData.min=0 dispData.max=9
    //% bitAddr.min=0 bitAddr.max=3
    //% subcategory=Display  group="7-Seg" 
    //% color=#DE6268 
    //% advanced=false
    export function digit_bit(dispData: number, bitAddr: number) {
        if ((dispData == 0x7f) || ((dispData <= 9) && (bitAddr <= 3))) {
            let segData = 0;

            segData = digit_coding(dispData);
            digit_start();
            digit_writeByte(0x44);
            digit_stop();
            digit_start();
            digit_writeByte(bitAddr | 0xc0);
            digit_writeByte(segData);
            digit_stop();
            digit_start();
            digit_writeByte(0x88 + digit_brightnessLevel);
            digit_stop();

            digit_buf[bitAddr] = dispData;
        }
    }

    /**
     * Turn on or off the colon point on Grove - 4-Digit Display
     * @param pointEn value of point switch
     */
    //% blockId=grove_tm1637_display_point block="%strip|turn|%point|colon point"
    //% subcategory=Display  group="7-Seg" 
    //% color=#DE6268 
    //% advanced=false
    export function digit_point(point: boolean) {
        digit_pointFlag = point;

        digit_bit(digit_buf[0], 0x00);
        digit_bit(digit_buf[1], 0x01);
        digit_bit(digit_buf[2], 0x02);
        digit_bit(digit_buf[3], 0x03);
    }

    /**
     * Clear the display
     */
    //% blockId=grove_tm1637_display_clear block="%strip|clear"
    //% subcategory=Display  group="7-Seg" 
    //% color=#DE6268 
    //% advanced=false
    export function digit_clear() {
        digit_bit(0x7f, 0x00);
        digit_bit(0x7f, 0x01);
        digit_bit(0x7f, 0x02);
        digit_bit(0x7f, 0x03);
    }

    /*
     * Private functions
     */

    function digit_writeByte(wrData: number) {
        for (let p = 0; p < 8; p++) {
            pins.digitalWritePin(digit_clkPin, 0);
            if (wrData & 0x01) pins.digitalWritePin(digit_dataPin, 1);
            else pins.digitalWritePin(digit_dataPin, 0);
            wrData >>= 1;
            pins.digitalWritePin(digit_clkPin, 1);
        }

        pins.digitalWritePin(digit_clkPin, 0); // Wait for ACK
        pins.digitalWritePin(digit_dataPin, 1);
        pins.digitalWritePin(digit_clkPin, 1);
    }

    function digit_start() {
        pins.digitalWritePin(digit_clkPin, 1);
        pins.digitalWritePin(digit_dataPin, 1);
        pins.digitalWritePin(digit_dataPin, 0);
        pins.digitalWritePin(digit_clkPin, 0);
    }

    function digit_stop() {
        pins.digitalWritePin(digit_clkPin, 0);
        pins.digitalWritePin(digit_dataPin, 0);
        pins.digitalWritePin(digit_clkPin, 1);
        pins.digitalWritePin(digit_dataPin, 1);
    }

    function digit_coding(dispData: number): number {
        let pointData = 0;

        if (digit_pointFlag == true) pointData = 0x80;
        else if (digit_pointFlag == false) pointData = 0;

        if (dispData == 0x7f) dispData = 0x00 + pointData;
        else dispData = TubeTab[dispData] + pointData;

        return dispData;
    }


}