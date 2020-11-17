input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    strip.show()
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(500)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
basic.forever(function () {
	
})
