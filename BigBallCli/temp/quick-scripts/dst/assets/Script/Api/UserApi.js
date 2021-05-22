
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Api/UserApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30eb3BKRXlOb6KkiR0zDDGc', 'UserApi');
// Script/Api/UserApi.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var Models_1 = require("../Models/Models");
var UserApi = /** @class */ (function () {
    function UserApi() {
    }
    UserApi.Add = function (nickname, cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "Name": nickname
            },
            success: function (res) {
                res = res["data"];
                console.log(res);
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"]);
                    cb.success(user);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                console.log(err);
                cb.fail(err.errMsg);
            }
        });
    };
    UserApi.Update = function (uid, nickname, cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "ID": uid,
                "Name": nickname
            },
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"]);
                    cb.success(user);
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
    UserApi.Get = function (uid, cb) {
        var url = this.baseUrl + uid.toString();
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"]);
                    cb.success(user);
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
    UserApi.GetByName = function (name, cb) {
        var url = this.baseUrl + "name/" + name;
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                // let res: Object = resp.data.valueOf();
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"]);
                    cb.success(user);
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
    UserApi.Delete = function (uid, cb) {
        var url = this.baseUrl + uid.toString();
        wx.request({
            url: url,
            method: "DELETE",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"]);
                    cb.success(user);
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
    UserApi.baseUrl = Config_1.default.BaseURL + "/api/user/";
    return UserApi;
}());
exports.default = UserApi;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcGlcXFVzZXJBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBK0I7QUFDL0IsMkNBQTBDO0FBTzFDO0lBQUE7SUFxSEEsQ0FBQztJQWxIaUIsV0FBRyxHQUFqQixVQUFrQixRQUFnQixFQUFFLEVBQWdCO1FBQ2hELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkIsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNQLEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUU7Z0JBQ0YsTUFBTSxFQUFFLFFBQVE7YUFDbkI7WUFDRCxPQUFPLEVBQUUsVUFBQyxHQUFXO2dCQUNqQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDbEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2hELEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO1lBQ0wsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNKLENB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QUFNLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5IYyxlQUFPLEdBQVcsZ0JBQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0lBb0huRSxjQUFDO0NBckhELEFBcUhDLElBQUE7a0JBckhvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZyBmcm9tICcuLi9Db25maWcnO1xyXG5pbXBvcnQgeyBCQlVzZXIgfSBmcm9tICcuLi9Nb2RlbHMvTW9kZWxzJztcclxuXHJcbmludGVyZmFjZSBVc2VyQ2FsbEJhY2sge1xyXG4gICAgc3VjY2Vzcyh1c2VyOiBCQlVzZXIpOiB2b2lkO1xyXG4gICAgZmFpbChlcnI6IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJBcGkge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmFzZVVybDogc3RyaW5nID0gQ29uZmlnLkJhc2VVUkwgKyBcIi9hcGkvdXNlci9cIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEFkZChuaWNrbmFtZTogc3RyaW5nLCBjYjogVXNlckNhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBuaWNrbmFtZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcIklzU3VjY2Vzc1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzW1wiRGF0YVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBCQlVzZXIoZGF0YVtcIklEXCJdLCBkYXRhW1wiTmFtZVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2Vzcyh1c2VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IuZmFpbChyZXNbXCJJbmZvXCJdW1wiTWVzc2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUodWlkOiBudW1iZXIsIG5pY2tuYW1lOiBzdHJpbmcsIGNiOiBVc2VyQ2FsbEJhY2spIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgXCJJRFwiOiB1aWQsXHJcbiAgICAgICAgICAgICAgICBcIk5hbWVcIjogbmlja25hbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlczogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSByZXNbXCJkYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcIklzU3VjY2Vzc1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzW1wiRGF0YVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBCQlVzZXIoZGF0YVtcIklEXCJdLCBkYXRhW1wiTmFtZVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2Vzcyh1c2VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IuZmFpbChyZXNbXCJJbmZvXCJdW1wiTWVzc2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNiLmZhaWwoZXJyLmVyck1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldCh1aWQ6IG51bWJlciwgY2I6IFVzZXJDYWxsQmFjaykge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmJhc2VVcmwgKyB1aWQudG9TdHJpbmcoKTtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlczogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSByZXNbXCJkYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcIklzU3VjY2Vzc1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzW1wiRGF0YVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBCQlVzZXIoZGF0YVtcIklEXCJdLCBkYXRhW1wiTmFtZVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2Vzcyh1c2VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IuZmFpbChyZXNbXCJJbmZvXCJdW1wiTWVzc2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNiLmZhaWwoZXJyLmVyck1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJ5TmFtZShuYW1lOiBzdHJpbmcsIGNiOiBVc2VyQ2FsbEJhY2spIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsICsgXCJuYW1lL1wiICsgbmFtZTtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlczogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSByZXNbXCJkYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHJlczogT2JqZWN0ID0gcmVzcC5kYXRhLnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgQkJVc2VyKGRhdGFbXCJJRFwiXSwgZGF0YVtcIk5hbWVcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLnN1Y2Nlc3ModXNlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBEZWxldGUodWlkOiBudW1iZXIsIGNiOiBVc2VyQ2FsbEJhY2spIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsICsgdWlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgQkJVc2VyKGRhdGFbXCJJRFwiXSwgZGF0YVtcIk5hbWVcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLnN1Y2Nlc3ModXNlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==