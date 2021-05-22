import Config from '../Config';
import { BBRank } from '../Models/Models';

interface RecordCallBack {
    success(ranks: BBRank[]): void;
    fail(err: string): void;
}

export default class RankApi {
    private static baseUrl: string = Config.BaseURL + "/api/record/rank/";

    public static GetUserOrder(uid: number, cb: RecordCallBack) {
        let url = this.baseUrl + uid.toString();
        wx.request({
            url: url,
            method: "GET",
            success: (res: Object) => {
                res = res["data"];
                if (res["IsSuccess"]) {
                    let data = res["Data"];
                    let rank = new BBRank(data["Seq"], data["Name"], data["Weight"]);
                    cb.success([rank]);
                } else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: (err) => {
                cb.fail(err.errMsg);
            }
        });
    }

    public static GetRanks(cb: RecordCallBack) {
        let url = this.baseUrl;
        wx.request({
            url: url,
            method: "GET",
            success: (res: Object) => {
                res = res["data"];
                if (res["IsSuccess"]) {
                    let data: Array<Object> = res["Data"];
                    let ranks: Array<BBRank> = [];
                    for (let i = 0; i < data.length; i++) {
                        const item = data[i];
                        let rank = new BBRank(item["Seq"], item["Name"], item["Weight"]);
                        ranks.push(rank);
                    }
                    
                    cb.success(ranks);
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