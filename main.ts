input.onButtonPressed(Button.A, function () {
    hackbit.digit_bit(1, 0)
    basic.pause(100)
    hackbit.digit_bit(2, 0)
    basic.pause(100)
    hackbit.digit_bit(3, 0)
    basic.pause(100)
    hackbit.digit_bit(4, 0)
    basic.pause(100)
    hackbit.digit_clear()
})
hackbit.digit_createDisplay(DigitalPin.P0, DigitalPin.P1)
hackbit.digit_set(7)
hackbit.digit_point(true)
// www.hackids.com.br
basic.forever(function () {
	
})
