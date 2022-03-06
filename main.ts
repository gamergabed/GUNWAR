namespace SpriteKind {
    export const Icon = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Weppon_Useing = Weppons_Invintory[(Weppon_Useing + 1) % Weppons_Invintory.length]
    WepponSprite.setImage(Weppons_Images[Weppon_Useing])
})
function setupWeppons () {
    Weppons = [
    "Fist",
    "Pistol",
    "MiniGrnadeLancher",
    "Boomrang",
    "PlasmaCannon",
    "SuperO-MegabigCunkybigboyCannonGunSam"
    ]
    Weppons_Ids = [
    0,
    1,
    3,
    2,
    4,
    9999
    ]
    Weppons_Images = [
    assets.image`Fist`,
    assets.image`Pistol`,
    assets.image`Pistol`,
    assets.image`Pistol`,
    assets.image`Pistol`,
    assets.image`SamsHumanPistol SuperOmegaBigChunkyBigBoyCannonGunSam`
    ]
    Weppons_Invintory = [0]
}
function tofpx (n: number) {
    return (n * fpx_scale) | 0
}
let Weppons_Ids: number[] = []
let Weppons: string[] = []
let Weppons_Images: Image[] = []
let Weppons_Invintory: number[] = []
let Weppon_Useing = 0
let WepponSprite: Sprite = null
game.splash("GunWar", "The Battle for Earth")
let Button = 0
let CrossHeir = sprites.create(assets.image`CrossHeir`, SpriteKind.Icon)
CrossHeir.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
WepponSprite = sprites.create(assets.image`Fist`, SpriteKind.Icon)
WepponSprite.setPosition(131, 94)
scene.setBackgroundImage(assets.image`Area2`)
let map = assets.image`MainMap2`
game.splash("Level 1", "The Garden")
let textures = [
img`
    eeddeeeeeeeeeeeeeeddeeeeeeeeeeee
    eeddeeee44eeeeeeeeddeeee4eeeeeee
    4eddeeeeee444eeeeeddeeee444eeeee
    e4ddeeeeeeee44eeeeddeeeeeee44eee
    eeddeeeeeeeeee4eeeddeeeeeeee44ee
    eeddeeeeeeeeeeeeeeddeeeeeeeeeeee
    dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddd
    eeeeeeeeeeddeeeeeeeeeeeeeeddeeee
    eeeeeeeeeeddeeee444eeeeeeedde44e
    e444eeeeeeddeeeeeee444eeeeddee44
    eeee444eeeddeeeeeeeee44eeeddeee4
    eeeeeeeeeeddeeeeeeeeee4eeeddeeee
    eeeeeeeeeeddeeeeeeeeeeeeeeddeeee
    dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddd
    eeddeeeeeeeeeeeeeeddeeeeeeeeeeee
    4edde44444eeeeeeeeddeee4eeeeeeee
    44ddeeeeee444eeeeeddeeee44eeeeee
    e4ddeeeeeeeee4eeeeddeeeeee44eeee
    e4ddeeeeeeeeeeeeeeddeeeeeee44eee
    eeddeeeeeeeeeeeeeeddeeeeeeeeeeee
    dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddd
    eee44eeeeeddeeeeeeeeeeeeeeddeeee
    eeee444eeeddeeeeeeeeeeeeeeddeeee
    eeeeeee44eddeeeee4444eeeeedde4ee
    eeeeeeee4eddeeeeeeee44eeeeddee4e
    eeeeeeeeeeddeeeeeeeee4eeeeddee4e
    eeeeeeeeeeddeeeeeeeeeeeeeeddeeee
    dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddd
    `,
null,
img`
    77777777777777777777777777777777
    77777777777777777777777777777777
    74227777777777777777777777777777
    72227777777777777777777777777777
    72247777777777777777555555555555
    77777777777777775555777777777777
    77777755555577777777777777777777
    77775577777777777777777777777777
    77757777777777777777777777777777
    77777777777777777775555777742277
    77742277777777777557777777722277
    77722277777777555777777777722477
    77722477777755777777777777777777
    77777777775577777777777777777777
    77777777757777777777777777777777
    77777777577777777777777555577777
    77777775777774227777755777777777
    77777775777772227777577777777777
    77777757777772247755777777777777
    77777777777777777577777777777777
    77777777742277777577777777777777
    77577777722277775577777777777777
    77577777722477777777777777777777
    77757777777777777777777777555555
    77775577777777777777775555777777
    77777755577777777777777777777777
    77777777755777777777777777777777
    77777777777777777777777777777777
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bccccccccccccccccccccccccccccccb
    bccccccccccccccccccccccccccccccb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `,
null,
img`
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    222222222eeeeeeeeeeeee2222222222
    222222222e11111e11111e2222222222
    222222222e11111e11111e2222222222
    222222222e11111e11111e2222222222
    222222222e11111e11111e2222222222
    222222222e11111e11111e2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222e11111e11111e2222222222
    222222222e11111e11111e2222222222
    222222222e11111e11111e2222222222
    222222222e11111e11111e2222222222
    222222222e11111e11111e2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeefffe2222222222
    222222222eeeeeeeeefffe2222222222
    222222222eeeeeeeeefffe2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeeeeee2222222222
    222222222eeeeeeeeeeeee2222222222
    `,
img`
    88888888888888888888888888888888
    8eeeeeeeeeeeeeeeeeeeeeeeeeeeeee8
    8e66666666666666e6666666666666e8
    8e66966666666666e6696666666666e8
    8e69666666666666e6966666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666696e6666666666696e8
    8e66666666666966e6666666666966e8
    8e66666666666666e6666666666666e8
    8eeeeeeeeeeeeeeeeeeeeeeeeeeeeee8
    8e66666666666666e6666666666666e8
    8e66966666666666e6696666666666e8
    8e69666666666666e6966666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666666e6666666666666e8
    8e66666666666696e6666666666696e8
    8e66666666666966e6666666666966e8
    8e66666666666666e6666666666666e8
    8eeeeeeeeeeeeeeeeeeeeeeeeeeeeee8
    88888888888888888888888888888888
    `,
img`
    22222222222222222222222222222222
    2eeeeeeeeeeeeeeeeeeeeeeeeeeeeee2
    2e66666666666666e6666666666666e2
    2e66966666666666e6696666666666e2
    2e69666666666666e6966666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666696e6666666666696e2
    2e66666666666966e6666666666966e2
    2e66666666666666e6666666666666e2
    2eeeeeeeeeeeeeeeeeeeeeeeeeeeeee2
    2e66666666666666e6666666666666e2
    2e66966666666666e6696666666666e2
    2e69666666666666e6966666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666666e6666666666666e2
    2e66666666666696e6666666666696e2
    2e66666666666966e6666666666966e2
    2e66666666666666e6666666666666e2
    2eeeeeeeeeeeeeeeeeeeeeeeeeeeeee2
    22222222222222222222222222222222
    `,
img`
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    88888888888888888888888888888888
    888888888eeeeeeeeeeeee8888888888
    888888888e11111e11111e8888888888
    888888888e11111e11111e8888888888
    888888888e11111e11111e8888888888
    888888888e11111e11111e8888888888
    888888888e11111e11111e8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888e11111e11111e8888888888
    888888888e11111e11111e8888888888
    888888888e11111e11111e8888888888
    888888888e11111e11111e8888888888
    888888888e11111e11111e8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeefffe8888888888
    888888888eeeeeeeeefffe8888888888
    888888888eeeeeeeeefffe8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeeeeee8888888888
    888888888eeeeeeeeeeeee8888888888
    `,
img`
    77777777777777777777777777777777
    77775557777777777777777777777777
    77555777777777777777777777777777
    75577777777777777777777777777777
    77777777777777775555557777775555
    77777777777555557777777777557777
    77777777777777777777777755777777
    77777777777755577777777777777777
    77777777555577777777777777777755
    77775555777777777777777777777557
    77557777777777777777777777555777
    77777777777777777777777777777777
    cccccccccccccccccccccccccccccccc
    cbbbcbbcbbcbbcbbbbcbbcbbcbbcbbbc
    cccccccccccccccccccccccccccccccc
    cbbcbbcbbcbbbbcbbcbbbbcbbcbbcbbc
    cccccccccccccccccccccccccccccccc
    cbbbcbbcbbcbbcbbbbcbbcbbcbbcbbbc
    cccccccccccccccccccccccccccccccc
    cbbcbbcbbcbbbbcbbcbbbbcbbcbbcbbc
    cccccccccccccccccccccccccccccccc
    cbbbcbbcbbcbbcbbbbcbbcbbcbbcbbbc
    cccccccccccccccccccccccccccccccc
    cbbcbbcbbcbbbbcbbcbbbbcbbcbbcbbc
    cccccccccccccccccccccccccccccccc
    cbbbcbbcbbcbbcbbbbcbbcbbcbbcbbbc
    cccccccccccccccccccccccccccccccc
    cbbcbbcbbcbbbbcbbcbbbbcbbcbbcbbc
    cccccccccccccccccccccccccccccccc
    cbbbcbbcbbcbbcbbbbcbbcbbcbbcbbbc
    cccccccccccccccccccccccccccccccc
    cbbcbbcbbcbbbbcbbcbbbbcbbcbbcbbc
    `,
null,
null,
img`
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    `,
img`
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    `,
null,
img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `,
null
]
game.stats = true
let t0 = textures[0]
for (let i = 0; i <= textures.length - 1; i++) {
    if (textures[i]) {
        t0 = textures[i]
    } else {
        textures[i] = t0
    }
}
let fpx = 10
let fpx_scale = 1024
let fov = 0.66
setupWeppons()
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    5 5 5 4 4 4 . d . d . d . . . 
    . 5 5 4 4 d d d d d d d d . . 
    . d 5 4 1 1 1 1 1 1 1 1 d d . 
    . . d 1 1 1 1 1 1 1 1 1 d . . 
    . d d 1 1 1 1 1 1 1 1 1 d d . 
    . . d 1 1 1 1 1 1 1 1 1 d . . 
    . d d 1 1 1 1 1 1 1 1 1 d d . 
    . . d 1 1 1 1 1 1 1 1 1 d . . 
    . d d 1 1 1 1 1 1 1 1 1 d d . 
    . . d 1 1 1 1 1 1 1 1 1 d . . 
    . d d 1 1 1 1 1 1 1 1 1 d d . 
    . . d d d d d d d d d d d . . 
    . . . d . d . d . d . d . . . 
    . . . . . . . . . . . . . . . 
    `)
game.showLongText("     How to Play: Use D-pad/L-Stick to Move and Turn, B to Switch Weapons and A to use them! Press the Menu button to Pause!", DialogLayout.Center)
class State {
    x: number
    y: number
    map: Image
    dirX: number
    dirY: number
    planeX: number
    planeY: number
    angle: number

    constructor() {
        this.angle = 0
        this.x = tofpx(18)
        this.y = tofpx(7)

        this.setVectors()
        this.map = map.clone()
    }

    private setVectors() {
        const sin = Math.sin(this.angle)
        const cos = Math.cos(this.angle)
        this.dirX = tofpx(cos)
        this.dirY = tofpx(sin)
        this.planeX = tofpx(sin * fov)
        this.planeY = tofpx(cos * -fov)
    }

    private canGo(x: number, y: number) {
        return this.map.getPixel(x >> fpx, y >> fpx) == 0
    }

    updateControls() {
        const dx = controller.dx(2)
        if (dx) {
            this.angle -= dx
            this.setVectors()
        }
        const dy = controller.dy(5)
        if (dy) {
            const nx = this.x - Math.round(this.dirX * dy)
            const ny = this.y - Math.round(this.dirY * dy)
            if (!this.canGo(nx, ny) && this.canGo(this.x, this.y)) {
                if (this.canGo(this.x, ny))
                    this.y = ny
                else if (this.canGo(nx, this.y))
                    this.x = nx
            } else {
                this.x = nx
                this.y = ny
            }
        }
        //if (dx || dy)
        //    console.log(`${this.x},${this.y},${this.angle}`)
    }

    trace() {
        // based on https://lodev.org/cgtutor/raycasting.html
        const w = screen.width
        const h = screen.height
        const one = 1 << fpx
        const one2 = 1 << (fpx + fpx)
        for (let x = 0; x < w; x++) {
            const cameraX: number = Math.idiv((x << fpx) << 1, w) - one
            let rayDirX = this.dirX + (this.planeX * cameraX >> fpx)
            let rayDirY = this.dirY + (this.planeY * cameraX >> fpx)

            let mapX = this.x >> fpx
            let mapY = this.y >> fpx

            // length of ray from current position to next x or y-side
            let sideDistX = 0, sideDistY = 0

            // avoid division by zero
            if (rayDirX == 0) rayDirX = 1
            if (rayDirY == 0) rayDirY = 1

            // length of ray from one x or y-side to next x or y-side
            const deltaDistX = Math.abs(Math.idiv(one2, rayDirX));
            const deltaDistY = Math.abs(Math.idiv(one2, rayDirY));

            let mapStepX = 0, mapStepY = 0

            let sideWallHit = false;

            //calculate step and initial sideDist
            if (rayDirX < 0) {
                mapStepX = -1;
                sideDistX = ((this.x - (mapX << fpx)) * deltaDistX) >> fpx;
            } else {
                mapStepX = 1;
                sideDistX = (((mapX << fpx) + one - this.x) * deltaDistX) >> fpx;
            }
            if (rayDirY < 0) {
                mapStepY = -1;
                sideDistY = ((this.y - (mapY << fpx)) * deltaDistY) >> fpx;
            } else {
                mapStepY = 1;
                sideDistY = (((mapY << fpx) + one - this.y) * deltaDistY) >> fpx;
            }

            let color = 0

            while (true) {
                //jump to next map square, OR in x-direction, OR in y-direction
                if (sideDistX < sideDistY) {
                    sideDistX += deltaDistX;
                    mapX += mapStepX;
                    sideWallHit = false;
                } else {
                    sideDistY += deltaDistY;
                    mapY += mapStepY;
                    sideWallHit = true;
                }

                color = this.map.getPixel(mapX, mapY)
                if (color)
                    break; // hit!
            }

            let perpWallDist = 0
            let wallX = 0
            if (!sideWallHit) {
                perpWallDist = Math.idiv(((mapX << fpx) - this.x + (1 - mapStepX << fpx - 1)) << fpx, rayDirX)
                wallX = this.y + (perpWallDist * rayDirY >> fpx);
            } else {
                perpWallDist = Math.idiv(((mapY << fpx) - this.y + (1 - mapStepY << fpx - 1)) << fpx, rayDirY)
                wallX = this.x + (perpWallDist * rayDirX >> fpx);
            }
            wallX &= (1 << fpx) - 1

            color = (color - 1) * 2
            if (sideWallHit) color++

            const tex = textures[color]
            if (!tex)
                continue

            // textures look much better when lineHeight is odd
            let lineHeight = Math.idiv(h << fpx, perpWallDist) | 1;
            let drawStart = (-lineHeight + h) >> 1;

            let texX = (wallX * tex.width) >> fpx;
            if ((!sideWallHit && rayDirX > 0) || (sideWallHit && rayDirY < 0))
                texX = tex.width - texX - 1;

            screen.blitRow(x, drawStart, tex, texX, lineHeight)
            /*
                        const texStepY = Math.idiv(tex.height << fpx, lineHeight)
                        let texY = 0
                        let i = 0
                        if (drawStart < 0) {
                            i = -drawStart
                            texY = i * texStepY
                            lineHeight += drawStart + 1
                        }
                        for (; i < lineHeight; ++i) {
                            screen.setPixel(x, drawStart + i, tex.getPixel(texX, texY >> fpx))
                            texY += texStepY
                        }
                        */

        }
    }
}
const st = new State()
game.onPaint(function () {
    st.trace()
})
game.onUpdate(function () {
    if (controller.A.isPressed() && Weppon_Useing == 9999) {
        CrossHeir.setImage(assets.image`Omega_Beam`)
        CrossHeir.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
        music.pewPew.play()
    } else {
        CrossHeir.setImage(assets.image`CrossHeir`)
        CrossHeir.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
    }
})
game.onUpdate(function () {
    st.updateControls()
})
forever(function () {
    for (let index = 0; index < 3; index++) {
        music.playMelody("E - E - E G D - ", 150)
        music.playMelody("D - D - D A E D ", 150)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("E F E D E G D E ", 153)
        music.playMelody("D C D E D A - C5 ", 153)
    }
    music.playMelody("C5 B B A A G G F ", 160)
    music.playMelody("F E E D D C C - ", 160)
})
forever(function () {
    if (controller.A.isPressed()) {
        Button = 1
    } else if (controller.up.isPressed() && Button == 1) {
        Button = 2
    } else if (controller.B.isPressed() && Button == 2) {
        Button = 3
    } else if (controller.down.isPressed() && Button == 3) {
        Weppons_Invintory.unshift(9999)
        Weppon_Useing = 9999
        WepponSprite.setImage(assets.image`SamsHumanPistol SuperOmegaBigChunkyBigBoyCannonGunSam`)
    } else if (false) {
        Button = 0
    }
})
