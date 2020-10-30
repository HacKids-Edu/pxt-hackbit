// Library for hack:bit - micro:bit project board https://www.hackids.com.br
basic.forever(function () {
    if (hackbit.buttonLEDState(DigitalPin.P1)) {
        hackbit.ledState(DigitalPin.P2, hackbit.OnOff.On)
        basic.showIcon(IconNames.Heart)
    }
})
