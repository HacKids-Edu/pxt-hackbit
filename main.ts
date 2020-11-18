basic.forever(function () {
    basic.showString("temp:")
    basic.showNumber(hackbit.dht11value(hackbit.DHT11Type.DHT11_temperature_C, DigitalPin.P12))
})
