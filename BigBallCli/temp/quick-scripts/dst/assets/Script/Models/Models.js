
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbHNcXE1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUtJLGdCQUFZLEVBQVUsRUFBRSxJQUFZLEVBQUUsU0FBaUI7UUFDbkQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsYUFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksd0JBQU07QUFZbkI7SUFLSSxnQkFBWSxHQUFXLEVBQUUsSUFBWSxFQUFFLE1BQWM7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ0wsYUFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksd0JBQU07QUFZbkI7SUFNSSxrQkFBWSxFQUFVLEVBQUUsR0FBVyxFQUFFLE1BQWMsRUFBRSxPQUFlO1FBQ2hFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBQ0wsZUFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIEJCVXNlciB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXZhdGFyVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBhdmF0YXJVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYXZhdGFyVXJsID0gYXZhdGFyVXJsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQkJSYW5rIHtcclxuICAgIHNlcTogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgd2VpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VxOiBudW1iZXIsIG5hbWU6IHN0cmluZywgd2VpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNlcSA9IHNlcTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQkJSZWNvcmQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHVpZDogbnVtYmVyO1xyXG4gICAgd2VpZ2h0OiBudW1iZXI7XHJcbiAgICBtYXhUaW1lOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdWlkOiBudW1iZXIsIHdlaWdodDogbnVtYmVyLCBtYXhUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XHJcbiAgICAgICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5tYXhUaW1lID0gbWF4VGltZTtcclxuICAgIH1cclxufSJdfQ==