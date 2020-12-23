input.onButtonPressed(Button.A, function () {
    hackbitmotors.StepperDegree(hackbitmotors.Steppers.M1, -360)
})
input.onButtonPressed(Button.B, function () {
    hackbitmotors.MotorStopAll()
})
