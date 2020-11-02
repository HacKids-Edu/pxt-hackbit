HackbitLCD.connectLcd(39)
HackbitLCD.clearLcd1602()
HackbitLCD.setLcdBacklight(LcdBacklight.Off)
basic.forever(function () {
    HackbitLCD.showStringOnLcd1602("Hack:bit", HackbitLCD.position1602(LcdPosition1602.Pos1), 16)
})
