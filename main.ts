basic.forever(function () {
    serial.writeValue("x", hackbit.us_sonar(
    DigitalPin.P13,
    DigitalPin.P0,
    hackbit.PingUnit.MicroSeconds
    ))
})
