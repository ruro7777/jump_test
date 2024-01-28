namespace SpriteKind {
    export const narrator = SpriteKind.create()
}
function ground () {
	
}
let mySprite = sprites.create(assets.image`narrator`, SpriteKind.narrator)
mySprite.setPosition(50, 94)
mySprite.sayText("Hello! I am the creator of this game!", 5000, true)
pause(5000)
mySprite.sayText("You are going to do many interesting adventures!", 5000, true)
pause(5000)
mySprite.sayText("Now, let's start! Good luck!", 5000, true)
pause(5000)
sprites.destroy(mySprite)
game.setDialogCursor(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ...........eeccee...............
    ..........e222222e..............
    .........2c222222c2.............
    ........e2c422222c2e............
    ........f22422222c2f............
    ........f2242222222f............
    ........f2242222222f............
    ........f2c244222c2f............
    ........e2ceccccec2e............
    ........e2ecbbbbce2e............
    ........e2ebbbbbbe2e............
    ........eeeeeeeeeeee............
    ........fedeeeeeedef............
    ........fe2deeeed2ef............
    ........ffeeeeeeeeff............
    .........ff......ff.............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `)
game.splash("Crossy road", "made with MakeCode")
scene.setBackgroundColor(1)
info.setScore(0)
game.showLongText("press button a to jump", DialogLayout.Top)
let mySprite2 = sprites.create(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ...................fffffffffffffffffffffff......................
    ...................f555555555555555555555f......................
    ...................f555555555555555555555f......................
    ...................f555555555555555555555f......................
    ...................f555555555555555555555f......................
    ...................f55fffff555555fffff555f......................
    ...................f55f999f555555f999f555f......................
    ...................f55f999f555555f999f555f......................
    ...................f55f999f555555f999f555f......................
    ...................f55fffff555555fffff555f......................
    ...................f555555555555555555555f......................
    ...................f555555555555555555555f......................
    ...................f555555555555555555555f......................
    ...................f555555555555555555555f......................
    ...................f555555555555555555555f......................
    ...................f55fffffffffffffffff55f......................
    ...................f55f999999999999999f55f......................
    ...................f55f999999999999999f55f......................
    ...................f55fffffffffffffffff55f......................
    ...................f555555555555555555555f......................
    ...................f555555555555555555555f......................
    ...................fffffffffffffffffffffff......................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    `, SpriteKind.Player)
mySprite2.setPosition(26, 95)
mySprite2.startEffect(effects.fountain)
