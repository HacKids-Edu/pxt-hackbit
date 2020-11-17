// www.hackids.com.br
basic.forever(function () {
    serial.writeValue("x", pins.digitalReadPin(DigitalPin.P2))
    if (hackbit.buttonState(DigitalPin.P2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
