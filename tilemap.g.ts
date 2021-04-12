// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100009090909090909090909090707070702090101010101010101010101090909090909090109090909090909090909090908010a01010101010101010101010106080101010101010101010101010101060801010101010101010101010101010608010101010f01010101010101010106080101010d100e0101010101010101060801010d1010100e01010101010101060801010b0b0b0b0b01010101010101060801010b0b0b0b0b01010101010101060801010b0b0c0b0b010101010101010608010101010101010101010101010106080101010101010101010101010101060801010101010101010101010101010603040404040404040404040404040405`, img`
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
2 . . . . . . . . . . . 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . 2 2 2 . . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.builtin.forestTiles0,myTiles.tile1,sprites.builtin.brick,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
