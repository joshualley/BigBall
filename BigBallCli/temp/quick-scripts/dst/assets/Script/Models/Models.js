
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Models/Models.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd4e47/gPhL5aKkI3kH3UMM', 'Models');
// Script/Models/Models.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BBRecord = exports.BBRank = exports.BBUser = void 0;
var BBUser = /** @class */ (function () {
    function BBUser(id, name) {
        this.id = id;
        this.name = name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbHNcXE1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUlJLGdCQUFZLEVBQVUsRUFBRSxJQUFZO1FBQ2hDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLHdCQUFNO0FBVW5CO0lBS0ksZ0JBQVksR0FBVyxFQUFFLElBQVksRUFBRSxNQUFjO1FBQ2pELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLHdCQUFNO0FBWW5CO0lBTUksa0JBQVksRUFBVSxFQUFFLEdBQVcsRUFBRSxNQUFjLEVBQUUsT0FBZTtRQUNoRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBCQlVzZXIge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJCUmFuayB7XHJcbiAgICBzZXE6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHdlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlcTogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHdlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXEgPSBzZXE7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLndlaWdodCA9IHdlaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJCUmVjb3JkIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB1aWQ6IG51bWJlcjtcclxuICAgIHdlaWdodDogbnVtYmVyO1xyXG4gICAgbWF4VGltZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHVpZDogbnVtYmVyLCB3ZWlnaHQ6IG51bWJlciwgbWF4VGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudWlkID0gdWlkO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xyXG4gICAgICAgIHRoaXMubWF4VGltZSA9IG1heFRpbWU7XHJcbiAgICB9XHJcbn0iXX0=