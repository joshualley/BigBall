const {ccclass, property} = cc._decorator;

@ccclass
export default class ItemData extends cc.Component {
    @property
    seq: number = 0;
    @property
    nickname: string = '';
    @property
    weight: number = 0;
}

