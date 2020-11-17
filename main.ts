// www.hackids.com.br
basic.forever(function () {
    serial.writeValue("x", pins.digitalReadPin(DigitalPin.P2))
    if (hackbit.buttonLEDState(DigitalPin.P2)) {
        hackbit.ledState(DigitalPin.P1, hackbit.OnOff.On)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        hackbit.ledState(DigitalPin.P1, hackbit.OnOff.Off)
    }
})
