basic.forever(function () {
    serial.writeValue("x", hackbit.us_sonar(
    DigitalPin.P0,
    DigitalPin.P0,
    hackbit.PingUnit.MicroSeconds
    ))
})
