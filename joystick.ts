/**
 * Library for hackbit,  grove micro:bit project board https://www.hackids.com.br
*/
//% weight=10 color=#FF1344 icon="\uf0eb"
namespace joystick {
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
    
    export class GroveJoystick
        {
            /**
            * detect position from Grove - Thumb Joystick
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
    let joystick = new GroveJoystick();    

    /**
     * get Joystick key
     * 
     */
    //% blockId=grove_getjoystick block="get joystick key at|%xpin|and|%ypin"
    //% group="Thumbjoystick" xpin.defl=AnalogPin.C16 ypin.defl=AnalogPin.C17
    //% subcategory=Input  group="Analog" color=#851DE8 icon="\uf1eb"
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
}