
const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    @property(cc.Label)
    nameLabel: cc.Label = null;
    @property(cc.Label)
    massLabel: cc.Label = null;
    @property
    raduis: number = 10;
    @property
    velocity: cc.Vec2 = new cc.Vec2(20, 20);
    mass: number;
    colorType: number;
    // 限速因子
    speedLimitFator: number = 2.5;
    // 记录最大重量
    maxMass: number = 0;

    onLoad() {
        let nickName: string = cc.sys.localStorage.getItem("nickName");
        this.nameLabel.string = nickName;
        this.calculateProperty(this.raduis, 1);
        this.velocity = cc.v2((Math.random()-0.5)*20, (Math.random()-0.5)*20);
        // this.node.color = new cc.Color(255*Math.random(), 255*Math.random(), 255*Math.random());
    }

    calculateProperty(raduis: number, colorType: number) {
        this.speedLimitFator = this.speedLimitFator <= 1 ? 1 : this.speedLimitFator - 1 / this.raduis
        this.raduis = raduis;
        this.nameLabel.node.y = raduis + 15;
        this.colorType = colorType;
        this.setSpriteFrame();
        this.mass = raduis * raduis;
        if (this.mass > this.maxMass) this.maxMass = this.mass;
        this.massLabel.string = Math.round(this.mass).toString() + " kg"
        this.node.width = raduis * 2;
        this.node.height = raduis * 2;
        // 设置碰撞检测器的半径
        this.node.getComponent(cc.CircleCollider).radius = raduis;
    }

    setSpriteFrame() {
        let sprite = this.node.getComponent(cc.Sprite);
        let fn = 'players/player'+ this.colorType.toString()
        cc.log(this.colorType);
        cc.resources.load(fn,  (err, res) => {
            if(err) return;
            if(!(res instanceof cc.Texture2D)) return;
            sprite.spriteFrame = new cc.SpriteFrame(res);
        })
    }

    update (dt) {
        this.node.x += this.velocity.x * dt;
        this.node.y += this.velocity.y * dt;
    }
}
