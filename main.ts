basic.forever(function () {
    basic.showNumber(hackbit.dht11Sensor(DigitalPin.P12, hackbit.DHT11Type.DHT11_humidity))
})
