basic.forever(function () {
    serial.writeValue("x", hackbit.dht11Sensor(DigitalPin.P0, hackbit.DHT11_state.DHT11_temperature_C))
})
