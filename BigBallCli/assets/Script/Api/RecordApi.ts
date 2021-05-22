import Config from '../Config';
import { BBRecord } from '../Models/Models';

interface RecordCallBack {
    success(record: BBRecord): void;
    fail(err: string): void;
}

export default class RecordApi {
    private static baseUrl: string = Config.BaseURL + "/api/record/";

    public static Add(uid: number, weight: number, maxTime: number, cb: RecordCallBack) {
        let url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "UID": uid,
                "Weight": weight,
                "MaxTime": maxTime
            },
            success: (res: Object) => {
                res = res["data"];
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let record = new BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
                } else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: (err) => {
                cb.fail(err.errMsg);
            }
        });
    }

    public static Update(id: number, uid: number, weight: number, maxTime: number,  cb: RecordCallBack) {
        let url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "ID": id,
                "UID": uid,
                "Weight": Math.round(weight),
                "MaxTime": maxTime
            },
            success: (res: Object) => {
                res = res["data"];
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let record = new BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
                } else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: (err) => {
                cb.fail(err.errMsg);
            }
        });
    }

    public static Get(id: number, cb: RecordCallBack) {
        let url = this.baseUrl + id.toString();
        wx.request({
            url: url,
            method: "GET",
            success: (res: Object) => {
                res = res["data"];
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let record = new BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
                } else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: (err) => {
                cb.fail(err.errMsg);
            }
        });
    }

    public static GetByUId(uid: number, cb: RecordCallBack) {
        let url = this.baseUrl + "/uid/" + uid.toString();
        wx.request({
            url: url,
            method: "GET",
            success: (res: Object) => {
                res = res["data"];
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let record = new BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
                } else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: (err) => {
                cb.fail(err.errMsg);
            }
        });
    }

    public static Delete(id: number, cb: RecordCallBack) {
        let url = this.baseUrl + id.toString();
        wx.request({
            url: url,
            method: "DELETE",
            success: (res: Object) => {
                res = res["data"];
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let record = new BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
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

