basic.forever(function () {
    basic.showNumber(hackbit.dht11Sensor(DigitalPin.P1, hackbit.DHT11Type.DHT11_temperature_C))
})
