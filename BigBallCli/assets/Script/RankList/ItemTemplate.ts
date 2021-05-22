import ItemData from './ItemData';

const {ccclass, property} = cc._decorator;

@ccclass
export default class ItemTemplate extends cc.Component {

    @property(cc.Label)
    seq: cc.Label = null;
    @property(cc.Label)
    nickname: cc.Label = null;
    @property(cc.Label)
    weight: cc.Label = null;

    init(data: ItemData) {
        this.seq.string = data.seq.toString();
        this.nickname.string = data.nickname;
        this.weight.string = data.weight.toString() + "KG";
    }

}
