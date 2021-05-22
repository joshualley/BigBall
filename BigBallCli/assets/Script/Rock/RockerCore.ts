import Player from '../Roles/Player';

const {ccclass, property} = cc._decorator;

@ccclass
export default class RockerCore extends cc.Component {

    @property(Player)
    palyer: Player = null;

    // 衰减系数
    decayFactor: number = 0.3;
    
    update (dt) {
        if (this.node.x == 0 && this.node.y == 0) {
            this.palyer.velocity.x *= this.decayFactor;
            this.palyer.velocity.y *= this.decayFactor;
        } else {
            this.palyer.velocity.x = this.node.x * this.palyer.speedLimitFator;
            this.palyer.velocity.y = this.node.y * this.palyer.speedLimitFator;
        }
        
    }

}
