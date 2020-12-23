input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    hackbitmotors.GeekServo360(hackbitmotors.Servos.S1, hackbitmotors.enPos.forward, 0)
    hackbitmotors.GeekServo(hackbitmotors.Servos.S1, 0)
})
