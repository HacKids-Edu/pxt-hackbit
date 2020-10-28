// MakeCode blocks for sending commands using an IR LED
// Hackbit blocks supporting a Keyestudio Infrared Wireless Module Kit
// (receiver module+remote controller)
/**
 * MakeCode extension for IR Kit
 */
namespace Planet_Color {
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

    function i2cwrite_color(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cread_color(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    function rgb2hsl(color_r: number, color_g: number, color_b: number): number {
        let Hue = 0
        // normalizes red-green-blue values  把RGB值转成【0，1】中数值。
        let R = color_r * 100 / 255;   //由于H25不支持浮点运算，放大100倍在计算，下面的运算也放大100倍
        let G = color_g * 100 / 255;
        let B = color_b * 100 / 255;

        let maxVal = Math.max(R, Math.max(G, B))//找出R,G和B中的最大值
        let minVal = Math.min(R, Math.min(G, B)) //找出R,G和B中的最小值

        let Delta = maxVal - minVal;  //△ = Max - Min

        /***********   计算Hue  **********/
        if (Delta < 0) {
            Hue = 0;
        }
        else if (maxVal == R && G >= B) //最大值为红色
        {
            Hue = (60 * ((G - B) * 100 / Delta)) / 100;  //放大100倍
        }
        else if (maxVal == R && G < B) {
            Hue = (60 * ((G - B) * 100 / Delta) + 360 * 100) / 100;
        }
        else if (maxVal == G) //最大值为绿色
        {
            Hue = (60 * ((B - R) * 100 / Delta) + 120 * 100) / 100;
        }
        else if (maxVal == B) {
            Hue = (60 * ((R - G) * 100 / Delta) + 240 * 100) / 100;
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
        let tmp = i2cread_color(APDS9960_ADDR, APDS9960_ENABLE) | 0x2;
        i2cwrite_color(APDS9960_ADDR, APDS9960_ENABLE, tmp);
    }

    //% blockId=apds9960_readcolor block="Color sensor IIC port color HUE(0~360)"
    //% subcategory=Sensor group="IIC Port"
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
    //% block="Color sensor IIC port detects %color"
    //% subcategory=Sensor group="IIC Port"
    //% color.fieldEditor="gridpicker" color.fieldOptions.columns=3
    export function checkColor(color: ColorList): boolean {
        let hue = readColor()
        switch (color) {
            case ColorList.red:
                if (hue > 330 || hue < 20) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.green:
                if (hue > 110 && 150 > hue) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.blue:
                if (hue > 200 && 270 > hue) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.cyan:
                if (hue > 160 && 180 > hue) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.magenta:
                if (hue > 260 && 330 > hue) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.yellow:
                if (hue > 30 && 90 > hue) {
                    return true
                }
                else {
                    return false
                }
                break
            case ColorList.white:
                if (hue >= 180 && 200 > hue) {
                    return true
                }
                else {
                    return false
                }
                break
        }
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

}