hackbit.selectTempType(hackbit.tempType.celsius)
basic.forever(function () {
    hackbit.queryData(
    hackbit.DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
})
