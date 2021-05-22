import UserApi from '../Api/UserApi';
import Utils from '../Utils/Utils';

const {ccclass, property} = cc._decorator;

interface Action {
    Do(): void;
}

@ccclass
export default class MenuCtrl extends cc.Component {

    saveUserInfo(username: string, avatarUrl: string, action?: Action) {
        UserApi.GetByName(username, {
            success: (user) => {
                // console.log("success");
                // console.log(user);
                cc.sys.localStorage.setItem("uid", user.id);
                cc.sys.localStorage.setItem("nickName", user.name);
                cc.sys.localStorage.setItem("avatarUrl", user.avatarUrl);
                if (action) action.Do();
            },
            fail: (err) => {
                // console.log("error");
                // console.log(err);
                // 失败时表示未找到用户，此时创建一个新用户
                UserApi.Add(username, avatarUrl, {
                    success: (user) => {
                        // console.log(user.id);
                        cc.sys.localStorage.setItem("uid", user.id);
                        cc.sys.localStorage.setItem("nickName", user.name);
                        cc.sys.localStorage.setItem("avatarUrl", user.avatarUrl);
                        if (action) action.Do();
                    },
                    fail: (err) => {
                        Utils.ShowError("用户创建失败");
                    }
                });
            }
        });
    }

    startGame() {
        let nickName: string = cc.sys.localStorage.getItem('nickName');
        if (nickName == undefined || nickName == null || nickName == "") {
            wx.getUserProfile({
                desc: "获取您的昵称及头像",
                success: (res) => {
                    this.saveUserInfo(res.userInfo.nickName, res.userInfo.avatarUrl, {
                        Do: () => {
                            cc.director.loadScene("MainSence", null);
                        }
                    });
                },
                fail: (e) => {
                    Utils.ShowError(e.errMsg);
                }
            });
        } else {
            let avatarUrl: string = cc.sys.localStorage.getItem('avatarUrl');
            this.saveUserInfo(nickName, avatarUrl, {
                Do: () => {
                    cc.director.loadScene("MainSence", null);
                }
            });
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
