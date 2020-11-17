// www.hackids.com.br
basic.forever(function () {
    serial.writeValue("x", pins.digitalReadPin(DigitalPin.P3))
    if (hackbit.MagneticSwitchState(DigitalPin.P3)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
