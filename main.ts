function tilemap2 () {
    tiles.setTilemap(tilemap`level1`)
}
function sprite () {
    thePlayer = sprites.create(img`
        9 9 9 9 f f f f f f f 9 9 9 9 9 
        9 9 f f 9 9 9 9 9 9 9 f f 9 9 9 
        9 f 9 9 9 9 9 9 9 9 9 9 9 f 9 9 
        9 f 9 9 f f f f f f f 9 9 f 9 9 
        f 9 9 f 9 9 9 9 9 9 9 f 9 9 f 9 
        f 9 9 f 9 f f f f f 9 f 9 9 f 9 
        f 9 9 f 9 f 9 9 9 f 9 f 9 9 f 9 
        f 9 9 f 9 f 9 f 9 f 9 f 9 9 f 9 
        f 9 9 f 9 f 9 9 9 f 9 f 9 9 f 9 
        f 9 9 f 9 f f f f f 9 f 9 9 f 9 
        f 9 9 f 9 9 9 9 9 9 9 f 9 9 f 9 
        9 f 9 9 f f f f f f f 9 9 f 9 9 
        9 f 9 9 9 9 9 9 9 9 9 9 9 f 9 9 
        9 9 f f 9 9 9 9 9 9 9 f f 9 9 9 
        9 9 9 9 f f f f f f f 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Player)
    controller.moveSprite(thePlayer)
    scene.cameraFollowSprite(thePlayer)
    tilemap2()
    animation.runImageAnimation(
    thePlayer,
    [img`
        9 9 9 9 f f f f f f f 9 9 9 9 9 
        9 9 f f 9 9 9 9 9 9 9 f f 9 9 9 
        9 f 9 9 9 9 9 9 9 9 9 9 9 f 9 9 
        9 f 9 9 f f f f f f f 9 9 f 9 9 
        f 9 9 f 9 9 9 9 9 9 9 f 9 9 f 9 
        f 9 9 f 9 f f f f f 9 f 9 9 f 9 
        f 9 9 f 9 f 9 9 9 f 9 f 9 9 f 9 
        f 9 9 f 9 f 9 f 9 f 9 f 9 9 f 9 
        f 9 9 f 9 f 9 9 9 f 9 f 9 9 f 9 
        f 9 9 f 9 f f f f f 9 f 9 9 f 9 
        f 9 9 f 9 9 9 9 9 9 9 f 9 9 f 9 
        9 f 9 9 f f f f f f f 9 9 f 9 9 
        9 f 9 9 9 9 9 9 9 9 9 9 9 f 9 9 
        9 9 f f 9 9 9 9 9 9 9 f f 9 9 9 
        9 9 9 9 f f f f f f f 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 f f f f f f f 9 9 9 9 
        9 9 9 f f 9 9 9 9 9 9 9 f f 9 9 
        9 9 f 9 9 9 9 9 9 9 9 9 9 9 f 9 
        9 9 f 9 9 f f f f f f f 9 9 f 9 
        9 f 9 9 f 9 9 9 9 9 9 9 f 9 9 f 
        9 f 9 9 f 9 f f f f f 9 f 9 9 f 
        9 f 9 9 f 9 f 9 9 9 f 9 f 9 9 f 
        9 f 9 9 f 9 f 9 f 9 f 9 f 9 9 f 
        9 f 9 9 f 9 f 9 9 9 f 9 f 9 9 f 
        9 f 9 9 f 9 f f f f f 9 f 9 9 f 
        9 f 9 9 f 9 9 9 9 9 9 9 f 9 9 f 
        9 9 f 9 9 f f f f f f f 9 9 f 9 
        9 9 f 9 9 9 9 9 9 9 9 9 9 9 f 9 
        9 9 9 f f 9 9 9 9 9 9 9 f f 9 9 
        9 9 9 9 9 f f f f f f f 9 9 9 9 
        `],
    500,
    true
    )
}
function overlap () {
	
}
let thePlayer: Sprite = null
sprite()
