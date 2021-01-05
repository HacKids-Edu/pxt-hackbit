basic.forever(function () {
    serial.writeValue("x", pins.digitalReadPin(DigitalPin.P2))
    if (hackbit.WaterState(DigitalPin.P2)) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
