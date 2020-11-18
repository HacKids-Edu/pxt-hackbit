hackbitIR.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    serial.writeLine(hackbitIR.irDatagram())
})
hackbitIR.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC)
