/**
 * Blocks for cub:bit
 * cub:bit is a small humanoid robot with movable arms and legs, and
 * an LED matrix to express emotions. 
 * Anyone can easily use cub:bit through programing and onboard sensors.
 */
//% color=#00C6F5 icon="\uf1b2" block="Hackbit cubbit"
namespace cubbit {

    let cubbitServos: hackbitmotors.Servos[] =
       	[hackbitmotors.Servos.S1,
        hackbitmotors.Servos.S2,
    	hackbitmotors.Servos.S3,
    	hackbitmotors.Servos.S4,
    	hackbitmotors.Servos.S5,
    	hackbitmotors.Servos.S6,
    	hackbitmotors.Servos.S7,
    	hackbitmotors.Servos.S8]

    //% blockId=cub:bit_servo
    //% block="servo motor %ServoNum|number %Degree|degrees"
    //% ServoNum.min=1 ServoNum.max=8
    //% degree.min=0 degree.max=180
	export function DoServo(ServoNum: number, Degree: number) {
		if (ServoNum > 0 && Degree >= 0) {
            hackbitmotors.Servo(cubbitServos[ServoNum - 1], Degree)
		}
	}

	export function DoServos(Rotate: number[]) {
		for (let i = 1; i <= 8; i++) {
			DoServo(i, Rotate[i-1])
		}
	}

	export function InitialPosition() {
		DoServos([90, 95, 85, 100, 100, 90, 90, 90])
	}

    //% blockId=cub:bit_servo
    //% block="initial position"
	export function InitialPosition2() {
		for (let i = 0; i < 8; i++) {
			DoServo(1, 20)
			DoServo(8, 160)
			DoServo(4, 75)
			DoServo(5, 122)
			basic.pause(500)
			DoServo(1, 20)
			DoServo(8, 160)
			DoServo(4, 100)
			DoServo(5, 100)
			basic.pause(700)
		}
	}

	// MovimentHand
	export function MovimentHand2() {
		for (let i = 0; i < 4; i++) {
			DoServo(1, 55)
			DoServo(8, 125)
			DoServo(4, 100)
			DoServo(5, 100)
			DoServo(2, 135)
			DoServo(7, 45)
			basic.pause(500)
			DoServo(1, 55)
			DoServo(8, 125)
			DoServo(4, 100)
			DoServo(5, 100)
			DoServo(2, 85)
			DoServo(7, 100)
			basic.pause(700)
			DoServo(1, 55)
			DoServo(8, 125)
			DoServo(4, 75)
			DoServo(5, 122)
			DoServo(2, 170)
			DoServo(7, 10)
			basic.pause(500)
			DoServo(1, 55)
			DoServo(8, 125)
			DoServo(4, 100)
			DoServo(5, 100)
			DoServo(2, 95)
			DoServo(7, 90)
			basic.pause(700)
		}
	}

	// InsideOutWave
	export function InsideOutWave() {
	    for (let i = 0; i < 2; i++) {
			DoServo(2, 135)
			DoServo(7, 50)
			DoServo(1, 30)
			DoServo(8, 150)
			DoServo(4, 100)
			DoServo(5, 100)
			basic.pause(500)
			DoServo(2, 165)
			DoServo(7, 20)
			DoServo(1, 90)
			DoServo(8, 90)
			DoServo(4, 75)
			DoServo(5, 122)
			basic.pause(700)
			DoServo(2, 135)
			DoServo(7, 50)
			DoServo(1, 125)
			DoServo(8, 55)
			DoServo(4, 100)
			DoServo(5, 100)
			basic.pause(500)
			InitialPosition()
			basic.pause(700)
			DoServo(2, 135)
			DoServo(7, 50)
			DoServo(1, 125)
			DoServo(8, 55)
			DoServo(4, 100)
			DoServo(5, 100)
			basic.pause(500)
			DoServo(2, 165)
			DoServo(7, 20)
			DoServo(1, 90)
			DoServo(8, 90)
			DoServo(4, 75)
			DoServo(5, 122)
			basic.pause(700)
			DoServo(2, 135)
			DoServo(7, 50)
			DoServo(1, 30)
			DoServo(8, 150)
			DoServo(4, 100)
			DoServo(5, 100)
			basic.pause(500)
			InitialPosition()
			basic.pause(700)
		}
	}
	
	//Shrug
	export function Shrug2() {
	    for (let i = 0; i < 2; i++) {
	        DoServo(2, 95)
	        DoServo(7, 10)
	        basic.pause(150)
	        DoServo(1, 90)
	        DoServo(8, 170)
	        basic.pause(150)
			DoServo(1, 90)
	        DoServo(8, 90)
	        basic.pause(200)
	        DoServo(7, 10)
	        DoServo(2, 95)
	        DoServo(1, 90)
			DoServo(8, 170)
	        basic.pause(200)
	        DoServo(2, 95)
	        DoServo(7, 10)
	        DoServo(1, 90)
	        DoServo(8, 90)
			basic.pause(250)
	        InitialPosition()
	        basic.pause(250)
	        DoServo(2, 170)
	        DoServo(7, 90)
			basic.pause(150)
	        DoServo(1, 10)
	        DoServo(8, 90)
	        basic.pause(150)
	        DoServo(1, 90)
	        DoServo(8, 90)
	        basic.pause(200)
	        DoServo(2, 170)
	        DoServo(7, 90)
	        DoServo(1, 10)
	        DoServo(8, 90)
	        basic.pause(200)
	        DoServo(2, 170)
	        DoServo(7, 90)
	        DoServo(1, 90)
	        DoServo(8, 90)
			basic.pause(250)
	        InitialPosition()
	        basic.pause(250)
	        DoServo(2, 140)
	        DoServo(7, 40)
	        DoServo(1, 90)
	        DoServo(8, 90)
	        basic.pause(250)
	        DoServo(1, 20)
	        DoServo(8, 160)
	        basic.pause(250)
	        DoServo(2, 170)
	        DoServo(7, 10)
	        DoServo(4, 75)
	        DoServo(5, 122)
	        basic.pause(700)
	        DoServo(2, 170)
	        DoServo(7, 10)
	        DoServo(4, 75)
	        DoServo(5, 122)
	        DoServo(1, 160)
	        DoServo(8, 20)
	        basic.pause(500)
	        InitialPosition()
	        basic.pause(700)
	    }
	}
	
	// MoveBack
	export function MoveBack() {
	    for (let i = 0; i < 2; i++) {
	        DoServo(3, 105)
	        DoServo(6, 112)
	        DoServo(4, 105)
			DoServo(5, 120)
	        DoServo(2, 60)
	        DoServo(7, 55)
	        basic.pause(500)
	        DoServo(3, 105)
	        DoServo(6, 112)
	        DoServo(4, 100)
	        DoServo(5, 100)
	        basic.pause(500)
	        DoServo(3, 60)
	        DoServo(6, 72)
	        DoServo(4, 80)
	        DoServo(5, 95)
	        DoServo(2, 130)
	        DoServo(7, 125)
	        basic.pause(500)
	        DoServo(3, 60)
	        DoServo(6, 72)
	        DoServo(4, 100)
	        DoServo(5, 100)
	        basic.pause(500)
	    }
	}
	
	// MovementChest
	export function MovementChest2() {
	    for (let i = 0; i < 8; i++) {
	        DoServo(1, 170)
	        DoServo(8, 10)
	        DoServo(2, 95)
	        DoServo(7, 90)
	        DoServo(4, 75)
	        DoServo(5, 122)
	        basic.pause(500)
	        DoServo(1, 10)
	        DoServo(8, 170)
	        DoServo(2, 95)
	        DoServo(7, 90)
	        DoServo(4, 100)
	        DoServo(5, 100)
	        basic.pause(700)
	    }
	}
	
	// Left
	export function Left2() {
	    for (let i = 0; i < 2; i++) {
	        DoServo(1, 140)
	        DoServo(8, 140)
	        DoServo(4, 100)
	        DoServo(5, 135)
	        basic.pause(500)
	        DoServo(1, 40)
			DoServo(8, 140)
			DoServo(4, 65)
			DoServo(5, 135)
			basic.pause(700)
			DoServo(1, 40)
			DoServo(8, 40)
			DoServo(4, 65)
			DoServo(5, 100)
			basic.pause(500)
			DoServo(1, 90)
			DoServo(8, 90)
			DoServo(4, 100)
			DoServo(5, 100)
			basic.pause(500)
		}
	}

	// Right
	export function Right2() {
		for (let i = 0; i < 2; i++) {
			DoServo(1, 40)
			DoServo(8, 40)
			DoServo(4, 65)
			DoServo(5, 100)
			basic.pause(500)
			DoServo(1, 140)
			DoServo(8, 40)
			DoServo(4, 65)
			DoServo(5, 135)
			basic.pause(700)
			DoServo(1, 140)
			DoServo(8, 140)
			DoServo(4, 100)
			DoServo(5, 135)
			basic.pause(500)
			DoServo(1, 90)
			DoServo(8, 90)
			DoServo(4, 100)
			DoServo(5, 100)
			basic.pause(500)
		}
	}

	// Forward
	export function Forward() {
		for (let i = 0; i < 2; i++) {
			DoServo(3, 100)
			DoServo(6, 115)
			DoServo(4, 80)
			DoServo(5, 95)
			DoServo(2, 60)
			DoServo(7, 55)
			basic.pause(500)
			DoServo(3, 100)
			DoServo(6, 115)
			DoServo(4, 100)
			DoServo(5, 100)
			basic.pause(500)
			DoServo(3, 60)
			DoServo(6, 72)
			DoServo(4, 105)
			DoServo(5, 120)
			DoServo(2, 130)
			DoServo(7, 125)
			basic.pause(500)
			DoServo(3, 80)
			DoServo(6, 92)
			DoServo(4, 100)
			DoServo(5, 100)
			basic.pause(500)
		}
	}

	// Right to left
	export function RightToLeft2() {
		for (let i = 0; i < 1; i++) {
			Right2()
			basic.pause(200)
			InitialPosition()
			basic.pause(200)
			Left2()
			basic.pause(200)
			InitialPosition()
			basic.pause(200)
		}
	}

	// BackForward
	export function BackForward2() {
		for (let i = 0; i < 1; i++) {
			MoveBack()
			basic.pause(200)
			InitialPosition()
			basic.pause(200)
			Forward()
			basic.pause(200)
			InitialPosition()
			basic.pause(200)
		}
	}

	// Movement of limbs
	export function MovementOfLimbs() {
		for (let i = 0; i < 4; i++) {
			DoServo(1, 170)
			DoServo(8, 10)
			DoServo(4, 80)
			DoServo(5, 100)
			basic.pause(500)
			InitialPosition()
			basic.pause(700)
			DoServo(1, 170)
			DoServo(8, 10)
			DoServo(4, 100)
			DoServo(5, 125)
			basic.pause(500)
			InitialPosition()
			basic.pause(700)
		}
	}

	// Sway
	export function Sway() {
		for (let i = 0; i < 2; i++) {
			DoServo(2, 170)
			DoServo(7, 10)
			DoServo(1, 170)
			DoServo(8, 170)
			DoServo(3, 100)
			DoServo(6, 112)
			basic.pause(500)
			DoServo(1, 90)
			DoServo(8, 90)
			DoServo(3, 80)
			DoServo(6, 92)
			basic.pause(700)
			InitialPosition()
			basic.pause(500)
			DoServo(2, 170)
			DoServo(7, 10)
			basic.pause(700)
			DoServo(1, 10)
			DoServo(8, 10)
			DoServo(3, 60)
			DoServo(6, 72)
			basic.pause(500)
			DoServo(1, 90)
			DoServo(8, 90)
			DoServo(3, 80)
			DoServo(6, 92)
			basic.pause(700)
			InitialPosition()
			basic.pause(500)
			DoServo(2, 170)
			DoServo(7, 10)
			basic.pause(700)
		}
	}

	// Regulation of movement
	export function RegulationOfMovement() {
		for (let i = 0; i < 4; i++) {
			InitialPosition()
			basic.pause(500)
			DoServo(2, 130)
			DoServo(7, 55)
			basic.pause(500)
			InitialPosition()
			basic.pause(500)
			DoServo(2, 170)
			DoServo(7, 10)
			DoServo(4, 80)
			DoServo(5, 120)
			basic.pause(500)
		}
	}

	// Relax
	export function Relax() {
		for (let i = 0; i < 4; i++) {
			DoServo(4, 100)
			DoServo(5, 100)
			DoServo(2, 130)
			DoServo(7, 55)
			DoServo(4, 100)
			DoServo(5, 100)
			basic.pause(1000)
			DoServo(2, 170)
			DoServo(7, 10)
			DoServo(4, 75)
			DoServo(5, 125)
			basic.pause(1000)
			DoServo(1, 170)
			DoServo(8, 10)
			DoServo(4, 75)
			DoServo(5, 125)
			basic.pause(1000)
			InitialPosition()
			basic.pause(1000)
		}
	}

}