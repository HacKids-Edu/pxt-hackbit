# HACKBIT
Biblioteca para sensores, atuadores, displays, LEDs e motores utilizados em conjunto com a placa hack:bit
https://www.hackids.com.br

![](icon.png)  

## Exemplos/Samples:

## Servo Motor
```blocks
// Reproduz movimento do Servo Motor quando 
// o botão A ou o botão B é pressionado
input.onButtonPressed(Button.A, function () {
    hackbitmotors.Servo(hackbitmotors.Servos.S1, 180)
})
input.onButtonPressed(Button.B, function () {
    hackbitmotors.Servo(hackbitmotors.Servos.S1, 0)
})
```

## Display LCD
```blocks
HackbitLCD.connectLcd(39)
HackbitLCD.clearLcd1602()
HackbitLCD.setLcdBacklight(LcdBacklight.Off)
basic.forever(function () {
    HackbitLCD.showStringOnLcd1602("Hack:bit", HackbitLCD.position1602(LcdPosition1602.Pos1), 16)
})

```
## Use as Extension

Este repositório pode ser adicionado como uma **extensão** no MakeCode.
* abra [https://makecode.microbit.org/](https://makecode.microbit.org/)
* clique em **Novo Projeto**
* clique em **Avançado** 
* clique em **Extensions** ao final do menu
* procure por **https://github.com/hackids-edu/pxt-hackbit** e importe

This repository can be added as an **extension** in MakeCode.
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/hackids-edu/pxt-hackbit** and import


## Blocks preview

![A rendered view of the blocks](https://github.com/hackids-edu/pxt-hackbit/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

## License

MIT

Copyright (c) 2020, Hackids Editora Educacional Ltda

## Supported targets

* for PXT/microbit

## Path
* https://github.com/hackids-edu/pxt-hackbit
