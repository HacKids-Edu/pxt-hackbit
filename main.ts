input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    strip.show()
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
basic.forever(function () {
	
})
