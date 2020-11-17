// www.hackids.com.br
basic.forever(function () {
    if (hackbit.MagneticSwitchState(DigitalPin.P3)) {
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
