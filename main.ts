basic.forever(function () {
    basic.showString("T")
    basic.showNumber(hackbit.dht11Sensor(DigitalPin.P2, hackbit.DHT11_state.DHT11_temperature_C))
    basic.showString("U")
    basic.showNumber(hackbit.dht11Sensor(DigitalPin.P2, hackbit.DHT11_state.DHT11_humidity))
})
