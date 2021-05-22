import Player from "./Player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Ball extends cc.Component {

    @property
    raduis: number = 10;
    @property
    velocity: cc.Vec2 = new cc.Vec2(500, 500);
    mass: number = 0;
    colorType: number;
    
    randomDir(): number {
        return Math.random() > 0.5 ? 1 : -1;
    }

    setSpriteFrame() {
        let sprite = this.node.getComponent(cc.Sprite);
        this.colorType = Math.ceil(Math.random() * 8);
        let fn = 'balls/ball_'+ this.colorType.toString()
        cc.resources.load(fn,  (err, res) => {
            if(err) return;
            if(!(res instanceof cc.Texture2D)) return;
            sprite.spriteFrame = new cc.SpriteFrame(res);
        })
    }

    onLoad () {
        // 设置半径
        let canvas = cc.find("Canvas");
        let maxRaduis = canvas.getChildByName("Player").getComponent(Player).raduis + 5;
        this.raduis = Math.random() * maxRaduis;
        this.raduis = this.raduis < 20 ? 20 : this.raduis;
        this.node.width = this.raduis * 2;
        this.node.height = this.raduis * 2;
        this.mass = this.raduis * this.raduis;
        // 设置碰撞检测器的半径
        let collider = this.node.getComponent(cc.CircleCollider);
        collider.radius = this.raduis;
        // 初始位置、速度、方向
        this.node.x = this.randomDir()*Math.random()*cc.winSize.width/2 + this.raduis;
        this.node.y = this.randomDir()*Math.random()*cc.winSize.height/2 - this.raduis;
        this.setSpriteFrame();
        this.node.opacity = 160;
        this.velocity.x *= Math.random() * this.randomDir();
        this.velocity.y *= Math.random() * this.randomDir();
    }

    update (dt) {
        this.node.x += this.velocity.x * dt;
        this.node.y += this.velocity.y * dt;
    }
}
