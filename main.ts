input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    led.stopAnimation()
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("D D A G F E E E ", 120)
    music.playMelody("G F E D D F E F ", 120)
    music.playMelody("E F D D F E F E ", 120)
    music.playMelody("F D D A G F E E ", 120)
    music.playMelody("E G F E D D D D ", 120)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(randint(0, 10), randint(0, 10))
sprite.turn(Direction.Right, randint(0, 360))
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(1000)
})
