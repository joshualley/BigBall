const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property(cc.Label)
    currTime: cc.Label = null;
    ballNum: number = 20;
    ballMaxNum: number = 50;
    // prefabs: Array<cc.Prefab>;

    maxSeconds: number = 0;

    genePrefab() {
        let canvas = cc.find("Canvas");
        cc.resources.load("Prefabs/ball", (err, res) => {
            if(err) return;
            if(!(res instanceof cc.Prefab)) return;
            let prefab = cc.instantiate(res);
            canvas.addChild(prefab, 0);
        });
    }

    padLeft(num: number, n: number): string {
        let strNum = num.toString();
        let len = strNum.length;
        while(len < n) {
            strNum = "0" + strNum;
            len++;
        }
        return strNum;
    }

    onLoad() {
        // 先生成一定数量的小球
        for (let i = 0; i < this.ballNum; i++) {
            this.genePrefab();
        }
        // 设置标签
        let seconds = 0;
        let minutes = 0;
        setInterval(() => {
            if (this.currTime == null) return;
            if (seconds == 59) {
                seconds = 0;
                minutes++;
            } else {
                seconds++;
            }
            this.maxSeconds = minutes * 60 + seconds;
            this.currTime.string = this.padLeft(minutes, 2) + ": " + this.padLeft(seconds, 2)
            if(this.ballNum < this.ballMaxNum) {
                this.genePrefab();
                this.ballNum += 1;
            }
        }, 1000);
        
    }
}
