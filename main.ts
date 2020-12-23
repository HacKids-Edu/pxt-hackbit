input.onButtonPressed(Button.A, function () {
    hackbitmotors.StepperDual(-360, 0)
})
input.onButtonPressed(Button.B, function () {
    hackbitmotors.MotorStopAll()
})
