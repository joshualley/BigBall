
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Api/RankApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcGlcXFJhbmtBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBK0I7QUFDL0IsMkNBQTBDO0FBTzFDO0lBQUE7SUFrREEsQ0FBQztJQS9DaUIsb0JBQVksR0FBMUIsVUFBMkIsR0FBVyxFQUFFLEVBQWtCO1FBQ3RELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDUCxHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLFVBQUMsR0FBVztnQkFDakIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDakUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO1lBQ0wsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYSxnQkFBUSxHQUF0QixVQUF1QixFQUFrQjtRQUNyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDUCxHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLFVBQUMsR0FBVztnQkFDakIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksSUFBSSxHQUFrQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLElBQUksS0FBSyxHQUFrQixFQUFFLENBQUM7b0JBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNsQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2pFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3BCO29CQUVELEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO1lBQ0wsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoRGMsZUFBTyxHQUFXLGdCQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDO0lBaUQxRSxjQUFDO0NBbERELEFBa0RDLElBQUE7a0JBbERvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZyBmcm9tICcuLi9Db25maWcnO1xyXG5pbXBvcnQgeyBCQlJhbmsgfSBmcm9tICcuLi9Nb2RlbHMvTW9kZWxzJztcclxuXHJcbmludGVyZmFjZSBSZWNvcmRDYWxsQmFjayB7XHJcbiAgICBzdWNjZXNzKHJhbmtzOiBCQlJhbmtbXSk6IHZvaWQ7XHJcbiAgICBmYWlsKGVycjogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0FwaSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBiYXNlVXJsOiBzdHJpbmcgPSBDb25maWcuQmFzZVVSTCArIFwiL2FwaS9yZWNvcmQvcmFuay9cIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFVzZXJPcmRlcih1aWQ6IG51bWJlciwgY2I6IFJlY29yZENhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIHVpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wiSXNTdWNjZXNzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNbXCJEYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5rID0gbmV3IEJCUmFuayhkYXRhW1wiU2VxXCJdLCBkYXRhW1wiTmFtZVwiXSwgZGF0YVtcIldlaWdodFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2VzcyhbcmFua10pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFua3MoY2I6IFJlY29yZENhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlczogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSByZXNbXCJkYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcIklzU3VjY2Vzc1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhOiBBcnJheTxPYmplY3Q+ID0gcmVzW1wiRGF0YVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFua3M6IEFycmF5PEJCUmFuaz4gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5rID0gbmV3IEJCUmFuayhpdGVtW1wiU2VxXCJdLCBpdGVtW1wiTmFtZVwiXSwgaXRlbVtcIldlaWdodFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtzLnB1c2gocmFuayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNiLnN1Y2Nlc3MocmFua3MpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19