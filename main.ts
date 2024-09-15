function isNearly (reference: number, reading: number, tolerance: number) {
    if (reading >= reference - tolerance && reading <= reference + tolerance) {
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.A, function () {
    basic.pause(notLegos.playFile2("1_1_25_100"))
})
input.onButtonPressed(Button.B, function () {
    basic.pause(notLegos.playFile("2_1_1"))
})
Connected.oledClear()
notLegos.potSet(AnalogPin.P1)
notLegos.mp3setPorts(SerialPin.P16)
basic.showIcon(IconNames.Heart)
