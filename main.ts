let _1100 = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(_1100)
    _1100 += 1
})
input.onButtonPressed(Button.AB, function () {
    _1100 = 0
    basic.showNumber(_1100)
})
input.onButtonPressed(Button.B, function () {
    _1100 += -1
    basic.showNumber(_1100)
})
