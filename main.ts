basic.forever(function () {
    if (hackbit.detectline(DigitalPin.P1)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
