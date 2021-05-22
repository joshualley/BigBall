import Config from '../Config';
import { BBUser } from '../Models/Models';

interface UserCallBack {
    success(user: BBUser): void;
    fail(err: string): void;
}

export default class UserApi {
    private static baseUrl: string = Config.BaseURL + "/api/user/";

    public static Add(nickname: string, cb: UserCallBack) {
        let url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "Name": nickname
            },
            success: (res: Object) => {
                res = res["data"];
                console.log(res);
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let user = new BBUser(data["ID"], data["Name"]);
                    cb.success(user);
                } else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: (err) => {
                console.log(err);
                cb.fail(err.errMsg);
            }
        });
    }

    public static Update(uid: number, nickname: string, cb: UserCallBack) {
        let url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "ID": uid,
                "Name": nickname
            },
            success: (res: Object) => {
                res = res["data"];
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let user = new BBUser(data["ID"], data["Name"]);
                    cb.success(user);
                } else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: (err) => {
                cb.fail(err.errMsg);
            }
        });
    }

    public static Get(uid: number, cb: UserCallBack) {
        let url = this.baseUrl + uid.toString();
        wx.request({
            url: url,
            method: "GET",
            success: (res: Object) => {
                res = res["data"];
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let user = new BBUser(data["ID"], data["Name"]);
                    cb.success(user);
                } else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: (err) => {
                cb.fail(err.errMsg);
            }
        });
    }

    public static GetByName(name: string, cb: UserCallBack) {
        let url = this.baseUrl + "name/" + name;
        wx.request({
            url: url,
            method: "GET",
            success: (res: Object) => {
                res = res["data"];
                // let res: Object = resp.data.valueOf();
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let user = new BBUser(data["ID"], data["Name"]);
                    cb.success(user);
                } else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: (err) => {
                cb.fail(err.errMsg);
            }
        });
    }

    public static Delete(uid: number, cb: UserCallBack) {
        let url = this.baseUrl + uid.toString();
        wx.request({
            url: url,
            method: "DELETE",
            success: (res: Object) => {
                res = res["data"];
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let user = new BBUser(data["ID"], data["Name"]);
                    cb.success(user);
                } else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: (err) => {
                cb.fail(err.errMsg);
            }
        });
    }
}

