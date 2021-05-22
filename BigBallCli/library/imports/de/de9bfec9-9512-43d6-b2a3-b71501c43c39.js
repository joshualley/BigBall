"use strict";
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