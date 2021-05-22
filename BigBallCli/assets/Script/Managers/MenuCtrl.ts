import UserApi from '../Api/UserApi';
import Utils from '../Utils/Utils';

const {ccclass, property} = cc._decorator;

interface Action {
    Do(): void;
}

@ccclass
export default class MenuCtrl extends cc.Component {

    onLoad() {
        let uid = cc.sys.localStorage.getItem('uid');
        if (uid == undefined || uid == null || uid == "" || uid == 0) {
            this.saveUserInfo();
        } else {
            // Utils.ShowInfo("用户ID:" + uid.toString());
        }
    }

    saveUserInfo(action?: Action) {
        wx.getUserProfile({
            desc: "获取您的昵称及头像",
            success: (res) => {
                UserApi.GetByName(res.userInfo.nickName, {
                    success: (user) => {
                        console.log("success");
                        console.log(user);
                        cc.sys.localStorage.setItem("uid", user.id);
                        cc.sys.localStorage.setItem("nickName", user.name);
                        cc.sys.localStorage.setItem("avatarUrl", res.userInfo.avatarUrl);
                        if (action) action.Do();
                    },
                    fail: (err) => {
                        console.log("error");
                        console.log(err);
                        // 失败时表示未找到用户，此时创建一个新用户
                        UserApi.Add(res.userInfo.nickName, {
                            success: (user) => {
                                console.log(user.id);
                                cc.sys.localStorage.setItem("uid", user.id);
                                cc.sys.localStorage.setItem("nickName", user.name);
                                cc.sys.localStorage.setItem("avatarUrl", res.userInfo.avatarUrl);
                                if (action) action.Do();
                            },
                            fail: (err) => {
                                Utils.ShowError("用户创建失败");
                            }
                        });
                    }
                });
            },
            fail: (e) => {
                Utils.ShowError(e.errMsg);
            }
        });
    }

    startGame() {
        let uid = cc.sys.localStorage.getItem('uid');
        if (uid == undefined || uid == null || uid == "" || uid == 0) {
            this.saveUserInfo({
                Do: () => {
                    cc.director.loadScene("MainSence", null);
                }
            });
        } else {
            cc.director.loadScene("MainSence", null);
        }
    }

    quitGame() {
        cc.director.end();
    }

    shareGame() {
        Utils.ShowInfo("正在努力开发中...");
    }

    menuScene() {
        cc.director.loadScene("MenuSence", null);
    }

    showRank() {
        cc.director.loadScene("RankSence", null);
    }
   
}
