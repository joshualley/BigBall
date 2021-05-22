const {ccclass, property} = cc._decorator;

@ccclass
export default class Rocker extends cc.Component {

    @property(cc.Node)
    rockerCore: cc.Node = null;

    @property
    maxRaduis: number = 160;

    setRockerPostion(w_pos: cc.Vec2) {
        var pos = this.node.convertToNodeSpaceAR(w_pos);
        var len = pos.len();
        if(len > this.maxRaduis){
            pos.x = this.maxRaduis * pos.x / len;
            pos.y = this.maxRaduis * pos.y / len;
        }
        this.rockerCore.setPosition(pos);
    }

    onLoad() {
        this.rockerCore.on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => {
            let w_pos = e.getLocation();
            this.setRockerPostion(w_pos);
        }, this);

        this.rockerCore.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => {
            let w_pos = e.getLocation();
            this.setRockerPostion(w_pos);
        }, this);

        this.rockerCore.on(cc.Node.EventType.TOUCH_END, (e: cc.Event.EventTouch) => {
            this.rockerCore.setPosition(cc.v2(0, 0));
        }, this);

        this.rockerCore.on(cc.Node.EventType.TOUCH_CANCEL, (e: cc.Event.EventTouch) => {
            this.rockerCore.setPosition(cc.v2(0, 0));
        },this);
    }
}
