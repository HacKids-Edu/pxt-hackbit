// test cub:bit
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);

input.onButtonPressed(Button.A, function () {
    //cubbit.dance_motion(cubbit.danceMotions.DanceLStep)
    cubbit.stdMotion(cubbit.StdMotions.ArmPataPata)

})
input.onButtonPressed(Button.B, function () {
    cubbit.servoFree();
})

/*
basic.forever(function () {
    cubbit.serialread()
    if (pins.analogReadPin(AnalogPin.P0) <= 500) {
        cubbit.Move_motion(cubbit.moveMotions.PataPata)
        basic.pause(100)
    } else {
        if (pins.analogReadPin(AnalogPin.P2) >= 650) {
            cubbit.Move_motion(cubbit.moveMotions.WalkBack)
            basic.pause(100)
        }
    }
})
*/