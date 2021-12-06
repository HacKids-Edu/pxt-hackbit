//% weight=9 color=#C82A32 icon="\uf0eb" block="Hackbit Sensors"
namespace hackbitsensor {
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
}