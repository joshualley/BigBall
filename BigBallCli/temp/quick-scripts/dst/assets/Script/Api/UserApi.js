
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
    UserApi.Add = function (nickname, avatarUrl, cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "Name": nickname,
                "AvatarUrl": avatarUrl
            },
            success: function (res) {
                res = res["data"];
                console.log(res);
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"], data["AvatarUrl"]);
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
    UserApi.Update = function (uid, nickname, avatarUrl, cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "ID": uid,
                "Name": nickname,
                "AvatarUrl": avatarUrl
            },
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"], data["AvatarUrl"]);
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
                    var user = new Models_1.BBUser(data["ID"], data["Name"], data["AvatarUrl"]);
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
                    var user = new Models_1.BBUser(data["ID"], data["Name"], data["AvatarUrl"]);
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
                    var user = new Models_1.BBUser(data["ID"], data["Name"], data["AvatarUrl"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcGlcXFVzZXJBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBK0I7QUFDL0IsMkNBQTBDO0FBTzFDO0lBQUE7SUF1SEEsQ0FBQztJQXBIaUIsV0FBRyxHQUFqQixVQUFrQixRQUFnQixFQUFFLFNBQWlCLEVBQUUsRUFBZ0I7UUFDbkUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN2QixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1AsR0FBRyxFQUFFLEdBQUc7WUFDUixNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRTtnQkFDRixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsV0FBVyxFQUFFLFNBQVM7YUFDekI7WUFDRCxPQUFPLEVBQUUsVUFBQyxHQUFXO2dCQUNqQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDbEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNuRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNuQztZQUNMLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEVBQUUs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QUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNuQztZQUNMLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUNOLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBckhjLGVBQU8sR0FBVyxnQkFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFzSG5FLGNBQUM7Q0F2SEQsQUF1SEMsSUFBQTtrQkF2SG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlnIGZyb20gJy4uL0NvbmZpZyc7XHJcbmltcG9ydCB7IEJCVXNlciB9IGZyb20gJy4uL01vZGVscy9Nb2RlbHMnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJDYWxsQmFjayB7XHJcbiAgICBzdWNjZXNzKHVzZXI6IEJCVXNlcik6IHZvaWQ7XHJcbiAgICBmYWlsKGVycjogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckFwaSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBiYXNlVXJsOiBzdHJpbmcgPSBDb25maWcuQmFzZVVSTCArIFwiL2FwaS91c2VyL1wiO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQWRkKG5pY2tuYW1lOiBzdHJpbmcsIGF2YXRhclVybDogc3RyaW5nLCBjYjogVXNlckNhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgIFwiQXZhdGFyVXJsXCI6IGF2YXRhclVybFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcIklzU3VjY2Vzc1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzW1wiRGF0YVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBCQlVzZXIoZGF0YVtcIklEXCJdLCBkYXRhW1wiTmFtZVwiXSwgZGF0YVtcIkF2YXRhclVybFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2Vzcyh1c2VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IuZmFpbChyZXNbXCJJbmZvXCJdW1wiTWVzc2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUodWlkOiBudW1iZXIsIG5pY2tuYW1lOiBzdHJpbmcsIGF2YXRhclVybDogc3RyaW5nLCBjYjogVXNlckNhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwiSURcIjogdWlkLFxyXG4gICAgICAgICAgICAgICAgXCJOYW1lXCI6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJBdmF0YXJVcmxcIjogYXZhdGFyVXJsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgQkJVc2VyKGRhdGFbXCJJRFwiXSwgZGF0YVtcIk5hbWVcIl0sIGRhdGFbXCJBdmF0YXJVcmxcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLnN1Y2Nlc3ModXNlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXQodWlkOiBudW1iZXIsIGNiOiBVc2VyQ2FsbEJhY2spIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsICsgdWlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgQkJVc2VyKGRhdGFbXCJJRFwiXSwgZGF0YVtcIk5hbWVcIl0sIGRhdGFbXCJBdmF0YXJVcmxcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLnN1Y2Nlc3ModXNlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCeU5hbWUobmFtZTogc3RyaW5nLCBjYjogVXNlckNhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIFwibmFtZS9cIiArIG5hbWU7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCByZXM6IE9iamVjdCA9IHJlc3AuZGF0YS52YWx1ZU9mKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wiSXNTdWNjZXNzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNbXCJEYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IEJCVXNlcihkYXRhW1wiSURcIl0sIGRhdGFbXCJOYW1lXCJdLCBkYXRhW1wiQXZhdGFyVXJsXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVsZXRlKHVpZDogbnVtYmVyLCBjYjogVXNlckNhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIHVpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wiSXNTdWNjZXNzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNbXCJEYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IEJCVXNlcihkYXRhW1wiSURcIl0sIGRhdGFbXCJOYW1lXCJdLCBkYXRhW1wiQXZhdGFyVXJsXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=