import Player from '../Roles/Player';

const {ccclass, property} = cc._decorator;

@ccclass
export default class RockerCore extends cc.Component {

    @property(Player)
    player: Player = null;

    // 衰减系数
    decayFactor: number = 0.3;
    maxHeight: number = 1600;
    maxWidth: number = 2880;
    step: number = 2;
    
    update (dt) {
        if (this.node.x == 0 && this.node.y == 0) {
            this.player.velocity.x *= this.decayFactor;
            this.player.velocity.y *= this.decayFactor;
        } else {
            // left side
            if (this.player.node.x - this.player.raduis <= -this.maxWidth) {
                this.player.velocity.x = 0;
                this.player.node.x += this.step;
            }
            // right side
            else if (this.player.node.x + this.player.raduis >= this.maxWidth) {
                this.player.velocity.x = 0;
                this.player.node.x -= this.step;
            } else {
                this.player.velocity.x = this.node.x * this.player.speedLimitFator;
            }

            // top side
            if (this.player.node.y + this.player.raduis >= this.maxHeight) {
                this.player.velocity.y = 0;
                this.player.node.y -= this.step;
            } 
            // bottom side
            else if (this.player.node.y - this.player.raduis <= -this.maxHeight) {
                this.player.velocity.y = 0;
                this.player.node.y += this.step;
            } else {
                this.player.velocity.y = this.node.y * this.player.speedLimitFator;
            }
        }
    }

}
