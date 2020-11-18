basic.forever(function () {
    basic.showNumber(hackbit.dht11value(DigitalPin.P12, hackbit.DHT11Type.DHT11_temperature_C))
})
