led.enable(false)
basic.forever(function () {
    basic.clearScreen()
    if (hackbit.VibrationRead(DigitalPin.P6)) {
        soundExpression.hello.playUntilDone()
    }
})
