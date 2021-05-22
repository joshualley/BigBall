
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/RankList/ItemData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51a3fbVSlhGoqnAMM1qa0TH', 'ItemData');
// Script/RankList/ItemData.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemData = /** @class */ (function (_super) {
    __extends(ItemData, _super);
    function ItemData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.seq = 0;
        _this.nickname = '';
        _this.weight = 0;
        return _this;
    }
    __decorate([
        property
    ], ItemData.prototype, "seq", void 0);
    __decorate([
        property
    ], ItemData.prototype, "nickname", void 0);
    __decorate([
        property
    ], ItemData.prototype, "weight", void 0);
    ItemData = __decorate([
        ccclass
    ], ItemData);
    return ItemData;
}(cc.Component));
exports.default = ItemData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSYW5rTGlzdFxcSXRlbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFPQztRQUxHLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFaEIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixZQUFNLEdBQVcsQ0FBQyxDQUFDOztJQUN2QixDQUFDO0lBTEc7UUFEQyxRQUFRO3lDQUNPO0lBRWhCO1FBREMsUUFBUTs4Q0FDYTtJQUV0QjtRQURDLFFBQVE7NENBQ1U7SUFORixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBTzVCO0lBQUQsZUFBQztDQVBELEFBT0MsQ0FQcUMsRUFBRSxDQUFDLFNBQVMsR0FPakQ7a0JBUG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1EYXRhIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2VxOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBuaWNrbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHdlaWdodDogbnVtYmVyID0gMDtcclxufVxyXG5cclxuIl19