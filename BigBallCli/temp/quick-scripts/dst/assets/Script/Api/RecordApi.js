
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Api/RecordApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de9bf7JlRJD1rKjtxUBxDw5', 'RecordApi');
// Script/Api/RecordApi.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var Models_1 = require("../Models/Models");
var RecordApi = /** @class */ (function () {
    function RecordApi() {
    }
    RecordApi.Add = function (uid, weight, maxTime, cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "UID": uid,
                "Weight": weight,
                "MaxTime": maxTime
            },
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var record = new Models_1.BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
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
    RecordApi.Update = function (id, uid, weight, maxTime, cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "ID": id,
                "UID": uid,
                "Weight": Math.round(weight),
                "MaxTime": maxTime
            },
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var record = new Models_1.BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
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
    RecordApi.Get = function (id, cb) {
        var url = this.baseUrl + id.toString();
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var record = new Models_1.BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
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
    RecordApi.GetByUId = function (uid, cb) {
        var url = this.baseUrl + "/uid/" + uid.toString();
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var record = new Models_1.BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
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
    RecordApi.Delete = function (id, cb) {
        var url = this.baseUrl + id.toString();
        wx.request({
            url: url,
            method: "DELETE",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var record = new Models_1.BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
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
    RecordApi.baseUrl = Config_1.default.BaseURL + "/api/record/";
    return RecordApi;
}());
exports.default = RecordApi;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcGlcXFJlY29yZEFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUErQjtBQUMvQiwyQ0FBNEM7QUFPNUM7SUFBQTtJQXNIQSxDQUFDO0lBbkhpQixhQUFHLEdBQWpCLFVBQWtCLEdBQVcsRUFBRSxNQUFjLEVBQUUsT0FBZSxFQUFFLEVBQWtCO1FBQzlFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkIsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNQLEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFNBQVMsRUFBRSxPQUFPO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBVztnQkFDakIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNwRixFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNuQztZQUNMLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUNOLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1B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QUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BGLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO1lBQ0wsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwSGMsaUJBQU8sR0FBVyxnQkFBTSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7SUFxSHJFLGdCQUFDO0NBdEhELEFBc0hDLElBQUE7a0JBdEhvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZyBmcm9tICcuLi9Db25maWcnO1xyXG5pbXBvcnQgeyBCQlJlY29yZCB9IGZyb20gJy4uL01vZGVscy9Nb2RlbHMnO1xyXG5cclxuaW50ZXJmYWNlIFJlY29yZENhbGxCYWNrIHtcclxuICAgIHN1Y2Nlc3MocmVjb3JkOiBCQlJlY29yZCk6IHZvaWQ7XHJcbiAgICBmYWlsKGVycjogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkQXBpIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGJhc2VVcmw6IHN0cmluZyA9IENvbmZpZy5CYXNlVVJMICsgXCIvYXBpL3JlY29yZC9cIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEFkZCh1aWQ6IG51bWJlciwgd2VpZ2h0OiBudW1iZXIsIG1heFRpbWU6IG51bWJlciwgY2I6IFJlY29yZENhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwiVUlEXCI6IHVpZCxcclxuICAgICAgICAgICAgICAgIFwiV2VpZ2h0XCI6IHdlaWdodCxcclxuICAgICAgICAgICAgICAgIFwiTWF4VGltZVwiOiBtYXhUaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IG5ldyBCQlJlY29yZChkYXRhW1wiSURcIl0sIGRhdGFbXCJVSURcIl0sIGRhdGFbXCJXZWlnaHRcIl0sIGRhdGFbXCJNYXhUaW1lXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzKHJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoaWQ6IG51bWJlciwgdWlkOiBudW1iZXIsIHdlaWdodDogbnVtYmVyLCBtYXhUaW1lOiBudW1iZXIsICBjYjogUmVjb3JkQ2FsbEJhY2spIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgXCJJRFwiOiBpZCxcclxuICAgICAgICAgICAgICAgIFwiVUlEXCI6IHVpZCxcclxuICAgICAgICAgICAgICAgIFwiV2VpZ2h0XCI6IE1hdGgucm91bmQod2VpZ2h0KSxcclxuICAgICAgICAgICAgICAgIFwiTWF4VGltZVwiOiBtYXhUaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IG5ldyBCQlJlY29yZChkYXRhW1wiSURcIl0sIGRhdGFbXCJVSURcIl0sIGRhdGFbXCJXZWlnaHRcIl0sIGRhdGFbXCJNYXhUaW1lXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzKHJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXQoaWQ6IG51bWJlciwgY2I6IFJlY29yZENhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IG5ldyBCQlJlY29yZChkYXRhW1wiSURcIl0sIGRhdGFbXCJVSURcIl0sIGRhdGFbXCJXZWlnaHRcIl0sIGRhdGFbXCJNYXhUaW1lXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzKHJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCeVVJZCh1aWQ6IG51bWJlciwgY2I6IFJlY29yZENhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIFwiL3VpZC9cIiArIHVpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wiSXNTdWNjZXNzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNbXCJEYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSBuZXcgQkJSZWNvcmQoZGF0YVtcIklEXCJdLCBkYXRhW1wiVUlEXCJdLCBkYXRhW1wiV2VpZ2h0XCJdLCBkYXRhW1wiTWF4VGltZVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2VzcyhyZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVsZXRlKGlkOiBudW1iZXIsIGNiOiBSZWNvcmRDYWxsQmFjaykge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmJhc2VVcmwgKyBpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wiSXNTdWNjZXNzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNbXCJEYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSBuZXcgQkJSZWNvcmQoZGF0YVtcIklEXCJdLCBkYXRhW1wiVUlEXCJdLCBkYXRhW1wiV2VpZ2h0XCJdLCBkYXRhW1wiTWF4VGltZVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2VzcyhyZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=