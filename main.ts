basic.forever(function () {
    serial.writeValue("x", hackbit.measureDistanceCentimeter_v2(DigitalPin.P13, hackbit.DistanceUnit.inch))
})
