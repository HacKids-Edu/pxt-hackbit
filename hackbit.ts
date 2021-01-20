/**
 * Library for hackbit,  grove micro:bit project board https://www.hackids.com.br
*/
//% weight=10 color=#C82A32 icon="\uf0eb"    
namespace hackbit {
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

    export enum OnOff {
        //% block="On"
        On = 1,
        //% block="Off"
        Off = 0
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

    export let identifiant = 0;
    export let grovegestureinit = 0;

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

    /**
     * get distance from ultrasonic range sensor [cm|inch]
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
    export function measureDistanceCentimeter(name: DigitalPin, Unit: DistanceUnit): number {
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

        return distance;
    }

    /**
     * Get line finder sensor state [0-1]
    */
    //% blockId=hackbitLineFinderRead
    //% block="pin |%pin| line finder is seeing black"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Sensor  group="Digital" 
    //% color=#D84A51 
    export function detectline(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 0) {
            return false
        }
        else {
            return true
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
            return true
        }
        else {
            return false
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
        R = 1023.0/A-1.0
        R = R0*R;
        temp = 1.0/(Math.log(R/R0)/B+1/298.15)-273.15 // convert to temperature via datasheet
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
        if(sensor==GasList.Co2){
            return 1024-pins.analogReadPin(gaspin)
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

    /**
     * Get button state [0-1]
    */
    //% blockId=hackbitButtonRead
    //% block="button pin |%pin| is pressed"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% subcategory=Input  group="Digital" 
    //% color=#DA5259 
    export function buttonState(pin: DigitalPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        if (pins.digitalReadPin(pin) == 1) {
            return true
        }
        else {
            return false
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
        if (pins.digitalReadPin(pin) == 0) {
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
        if(gesture_first_init){
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
    function swap16(val: NumberFormat.UInt16BE) {
        return ((val & 0xFF) << 8)
            | ((val >> 8) & 0xFF);
    }

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

}