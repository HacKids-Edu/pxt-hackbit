input.onButtonPressed(Button.A, function () {
    hackbit.hackbitVibrationMotorState(DigitalPin.P3, hackbit.OnOff.Off)
})
input.onButtonPressed(Button.B, function () {
    hackbit.hackbitVibrationMotorState(DigitalPin.P3, hackbit.OnOff.On)
})
hackbit.hackbitVibrationMotorState(DigitalPin.P3, hackbit.OnOff.Off)
// www.hackids.com.br
basic.forever(function () {
	
})
