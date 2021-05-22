import Ball from '../Roles/Ball'
import Player from '../Roles/Player'
import GameManager from './GameManager'
import RecordApi from '../Api/RecordApi';
import Utils from '../Utils/Utils';

const {ccclass, property} = cc._decorator;

enum BoxColliderType {
    Ball = 0,
    Player = 1,
    Wall = 2
}

@ccclass
export default class CollisionManager extends cc.Component {

    @property(cc.Node)
    gameManager: cc.Node = null;
    
    onEnable() {
        cc.director.getCollisionManager().enabled = true;
    }

    onDisable() {
        cc.director.getCollisionManager().enabled = false;
    }

    onCollisionEnter(other: cc.BoxCollider, self: cc.BoxCollider) {
        if (self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Ball) {
            let s = self.node.getComponent(Ball);
            let o = other.node.getComponent(Ball);
            s.velocity = cc.v2(o.velocity.y, o.velocity.x)
        } else if(self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Player) {
            
        } else if(self.tag == BoxColliderType.Player && other.tag == BoxColliderType.Ball) {
            
            let s = self.node.getComponent(Player);
            let o = other.node.getComponent(Ball);

            let similar = s.colorType == o.colorType;
            if (!similar && s.mass - o.mass <= 0) {
                // 更新用户的记录
                let uid = cc.sys.localStorage.getItem("uid");
                if (uid == undefined || uid == null || uid == "") uid = 0;
                let maxSeconds = this.gameManager.getComponent(GameManager).maxSeconds;
                RecordApi.GetByUId(uid, {
                    success: (record) => {
                        let w: number = record.weight < s.maxMass ? s.maxMass : record.weight;
                        let t: number = record.maxTime < maxSeconds ? maxSeconds : record.maxTime;
                        RecordApi.Update(record.id, uid, w, t, {
                            success: (record) => {},
                            fail: (err) => {
                                Utils.ShowError("刷新记录失败");
                            }
                        })
                    },
                    fail: (err) => {
                        RecordApi.Add(uid, s.maxMass, maxSeconds, {
                            success: (record) => {},
                            fail: (err) => {
                                Utils.ShowError("保存记录失败");
                            }
                        })
                    }
                })
                cc.director.loadScene("RankSence", null);
                return;
            }
            let newRadius = !similar ? s.raduis - o.raduis : s.raduis + o.raduis;
            // 重新生成半径及颜色
            s.calculateProperty(newRadius, o.colorType);
            // 移除小球
            let canvas = cc.find("Canvas");
            canvas.removeChild(o.node, true);
            this.gameManager.getComponent(GameManager).ballNum--;
        } else if(self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Wall) {
            let s = self.node.getComponent(Ball);
            s.velocity = cc.v2(-s.velocity.x, -s.velocity.y);
        } else if(self.tag == BoxColliderType.Player && other.tag == BoxColliderType.Wall) {
            // let s = self.node.getComponent(Player);
            // let f = s.speedLimitFator;
            // s.speedLimitFator = -2;
            // setTimeout(() => {
            //     s.speedLimitFator = f;
            // }, 1000);
        }
    }
}
