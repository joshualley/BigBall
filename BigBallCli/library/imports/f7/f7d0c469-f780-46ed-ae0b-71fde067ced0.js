"use strict";
cc._RF.push(module, 'f7d0cRp94BG7a4Lcf3gZ87Q', 'RankApi');
// Script/Api/RankApi.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var Models_1 = require("../Models/Models");
var RankApi = /** @class */ (function () {
    function RankApi() {
    }
    RankApi.GetUserOrder = function (uid, cb) {
        var url = this.baseUrl + uid.toString();
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var rank = new Models_1.BBRank(data["Seq"], data["Name"], data["Weight"]);
                    cb.success([rank]);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    RankApi.GetRanks = function (cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var ranks = [];
                    for (var i = 0; i < data.length; i++) {
                        var item = data[i];
                        var rank = new Models_1.BBRank(item["Seq"], item["Name"], item["Weight"]);
                        ranks.push(rank);
                    }
                    cb.success(ranks);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    RankApi.baseUrl = Config_1.default.BaseURL + "/api/record/rank/";
    return RankApi;
}());
exports.default = RankApi;

cc._RF.pop();