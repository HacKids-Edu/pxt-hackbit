<a href="https://www.hackids.com.br/"><img src="hackids-logo.svg" width="300" alt="Hackids Logo" align="right"></a>
# HACK:BIT block package 
<a href=""><img src="brazil.png" width="50" alt="pinout hack:bit" align="right"></a>
powered by micro:bit | made in Brazil

![](https://img.shields.io/badge/Platform-micro%3Abit-red) 
![](https://img.shields.io/travis/com/HackidsEdu/pxt-hackbit) 
![](https://img.shields.io/github/v/release/HackidsEdu/pxt-hackbit) 
![](https://img.shields.io/github/last-commit/HackidsEdu/pxt-hackbit) 
![](https://img.shields.io/github/languages/top/HackidsEdu/pxt-hackbit) 
![](https://img.shields.io/github/issues/HackidsEdu/pxt-hackbit) 
![](https://img.shields.io/github/license/HackidsEdu/pxt-hackbit)


# Description
Biblioteca para sensores, atuadores, displays, LEDs e motores utilizados em conjunto com a placa hack:bit.
The package adds support hack:bit board.

![](hackbit0.png)  

# Examples
### Motor de Passo
Use este bloco da hack:bit para mover 1 ou 2 motores de passo para frente e para trás. O motor é ajustável entre -360 a 360
```JavaScript
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    for (let index = 0; index < 4; index++) {
        hackbitmotors.StepperDual(360, 360)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    for (let index = 0; index < 4; index++) {
        hackbitmotors.StepperDual(-360, -360)
    }
})
```

## Blocks preview

![A rendered view of the blocks](https://github.com/hackidsedu/pxt-hackbit/raw/master/.github/makecode/blocks.png)

## micro:bit Pin Assignment
<a href="https://hackids.com.br/suporte/boards/hackbit/"><img src="https://hackids.com.br/wp-content/uploads/2020/11/aprenda-PlacaHackbit02.png" width="800" alt="pinout hack:bit"></a>
<a href="https://hackids.com.br/suporte/boards/hackbit/"><img src="https://hackids.com.br/wp-content/uploads/2020/11/aprenda-PlacaHackbit03.png" width="800" alt="pinout hack:bit"></a>














## License

MIT

Copyright (c) 2020, Hackids Editora Educacional Ltda

## Supported targets

* for PXT/microbit

---

Made with &#x2764;&nbsp; by [**Hackids**](https://www.hackids.com.br) - Londrina - Brazil.

```package
hackbit=github:HackidsEdu/pxt-hackbit
```