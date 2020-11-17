hackbit.hackbitVibrationMotorState(DigitalPin.P0, hackbit.OnOff.On)
// www.hackids.com.br
basic.forever(function () {
    if (input.temperature() > 34) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        hackbit.hackbitVibrationMotorState(DigitalPin.P3, hackbit.OnOff.On)
    } else {
        hackbit.hackbitVibrationMotorState(DigitalPin.P3, hackbit.OnOff.Off)
    }
})
