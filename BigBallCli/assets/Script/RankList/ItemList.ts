import ItemData from './ItemData';
import ItemTemplate from './ItemTemplate';
import RankApi from '../Api/RankApi';

const {ccclass, property} = cc._decorator;

@ccclass
export default class ItemList extends cc.Component {

    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null;

    onLoad () {
        setTimeout(() => {
            RankApi.GetRanks({
                success: (ranks) => {
                    for (let i = 0; i < ranks.length; i++) {
                        const rank = ranks[i];
                        let data = new ItemData();
                        data.seq = rank.seq;
                        data.nickname = rank.name;
                        data.weight = rank.weight;
                        const item = cc.instantiate(this.itemPrefab);
                        this.node.addChild(item);
                        item.x = - this.node.width/2;
                        // item.y = this.node.height/2 - (item.height + 10) * i;
                        item.getComponent(ItemTemplate).init(data);
                    }
                },
                fail: (err) => {},
            });
        }, 300);
    }
}
