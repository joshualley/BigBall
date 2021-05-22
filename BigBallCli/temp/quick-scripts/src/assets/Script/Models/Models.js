"use strict";
cc._RF.push(module, 'fd4e47/gPhL5aKkI3kH3UMM', 'Models');
// Script/Models/Models.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BBRecord = exports.BBRank = exports.BBUser = void 0;
var BBUser = /** @class */ (function () {
    function BBUser(id, name, avatarUrl) {
        this.id = id;
        this.name = name;
        this.avatarUrl = avatarUrl;
    }
    return BBUser;
}());
exports.BBUser = BBUser;
var BBRank = /** @class */ (function () {
    function BBRank(seq, name, weight) {
        this.seq = seq;
        this.name = name;
        this.weight = weight;
    }
    return BBRank;
}());
exports.BBRank = BBRank;
var BBRecord = /** @class */ (function () {
    function BBRecord(id, uid, weight, maxTime) {
        this.id = id;
        this.uid = uid;
        this.weight = weight;
        this.maxTime = maxTime;
    }
    return BBRecord;
}());
exports.BBRecord = BBRecord;

cc._RF.pop();