pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
servos.P1.setAngle(20)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        servos.P1.setAngle(160)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        for (let index = 0; index < 2; index++) {
            servos.P1.setAngle(160)
            basic.pause(500)
            servos.P1.setAngle(20)
        }
    }
    while (pins.digitalReadPin(DigitalPin.P0) == 0) {
        servos.P1.setAngle(160)
    }
    servos.P1.setAngle(20)
})
