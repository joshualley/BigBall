"use strict";
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