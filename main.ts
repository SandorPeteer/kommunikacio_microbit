radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        ok = 1
    } else {
        ok = 0
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        radio.setGroup(index)
        radio.sendNumber(0)
    }
})
let radio2 = 0
let ok = 0
radio.setGroup(0)
ok = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio2 = 0
        for (let index = 0; index <= 4; index++) {
            radio.setGroup(radio2)
            while (ok == 0) {
                radio.sendNumber(1)
                led.plot(radio2, 0)
                basic.pause(10)
            }
            ok = 0
            radio2 += 1
        }
        basic.clearScreen()
    }
})
