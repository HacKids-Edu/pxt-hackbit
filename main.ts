// www.hackids.com.br
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
