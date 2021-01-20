basic.forever(function () {
    serial.writeValue("x", hackbit.measureDistanceCentimeter(DigitalPin.P13, hackbit.DistanceUnit.inch))
})
