// www.hackids.com.br
basic.forever(function () {
    if (hackbit.PIRState(DigitalPin.P8)) {
        basic.showIcon(IconNames.Ghost)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(100)
})
