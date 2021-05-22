import RankApi from '../Api/RankApi';
import Utils from '../Utils/Utils';

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadUserAvatar extends cc.Component {

    @property(cc.Sprite)
    avatar: cc.Sprite = null;
    @property(cc.Label)
    weight: cc.Label = null;
    @property(cc.Label)
    rank: cc.Label = null;

    onLoad () {
        // 加载用户头像
        let avatarUrl: string = cc.sys.localStorage.getItem("avatarUrl");
        let uid = cc.sys.localStorage.getItem("uid");
        if (uid == undefined || uid == null || uid == "") uid = 0;
        let that = this;
        cc.loader.load({ url: avatarUrl, type: 'png' }, function(err, img) {
            if(err) return;
            var avatarImg  = new cc.SpriteFrame(img);
            that.avatar.spriteFrame = avatarImg;
        });
        // 加载用户排名及重量
        setTimeout(() => {
            RankApi.GetUserOrder(uid, {
                success: (ranks) => {
                    this.rank.string = ranks[0].seq.toString();
                    this.weight.string = ranks[0].weight.toString();
                },
                fail: (err) => {
                    Utils.ShowError("未能查询到该用户的排名！");
                }
            });
        }, 300);
    }

}
