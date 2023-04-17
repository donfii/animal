input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            # # . . .
            . # . . .
            . # # # #
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            # # . . .
            . # . . #
            . # # # #
            . # . # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # # . . .
            . # . . .
            . # # # #
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # # # # .
            # . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            . # . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # # . .
            . # . . .
            # # # . .
            . # . . .
            # . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # # . .
            . # . . .
            # # # . .
            . # . . .
            . # # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # # .
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . # #
            . . . # .
            . . # # #
            . . . # .
            . . . # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . # #
            . . . . #
            . . . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
