
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Managers/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'feb5flgG/NG46TxhVldgcNK', 'GameManager');
// Script/Managers/GameManager.ts

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
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currTime = null;
        _this.ballNum = 20;
        _this.ballMaxNum = 50;
        // prefabs: Array<cc.Prefab>;
        _this.maxSeconds = 0;
        return _this;
    }
    GameManager.prototype.genePrefab = function () {
        var canvas = cc.find("Canvas");
        cc.resources.load("Prefabs/ball", function (err, res) {
            if (err)
                return;
            if (!(res instanceof cc.Prefab))
                return;
            var prefab = cc.instantiate(res);
            canvas.addChild(prefab, 0);
        });
    };
    GameManager.prototype.padLeft = function (num, n) {
        var strNum = num.toString();
        var len = strNum.length;
        while (len < n) {
            strNum = "0" + strNum;
            len++;
        }
        return strNum;
    };
    GameManager.prototype.onLoad = function () {
        var _this = this;
        // 先生成一定数量的小球
        for (var i = 0; i < this.ballNum; i++) {
            this.genePrefab();
        }
        // 设置标签
        var seconds = 0;
        var minutes = 0;
        setInterval(function () {
            if (_this.currTime == null)
                return;
            if (seconds == 59) {
                seconds = 0;
                minutes++;
            }
            else {
                seconds++;
            }
            _this.maxSeconds = minutes * 60 + seconds;
            _this.currTime.string = _this.padLeft(minutes, 2) + ": " + _this.padLeft(seconds, 2);
            if (_this.ballNum < _this.ballMaxNum) {
                _this.genePrefab();
                _this.ballNum += 1;
            }
        }, 1000);
    };
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "currTime", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2Vyc1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF1REM7UUFwREcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUMxQixhQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLDZCQUE2QjtRQUU3QixnQkFBVSxHQUFXLENBQUMsQ0FBQzs7SUErQzNCLENBQUM7SUE3Q0csZ0NBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDdkMsSUFBRyxHQUFHO2dCQUFFLE9BQU87WUFDZixJQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFBRSxPQUFPO1lBQ3ZDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEdBQVcsRUFBRSxDQUFTO1FBQzFCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3hCLE9BQU0sR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNYLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLEdBQUcsRUFBRSxDQUFDO1NBQ1Q7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUFBLGlCQXdCQztRQXZCRyxhQUFhO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsT0FBTztRQUNQLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsV0FBVyxDQUFDO1lBQ1IsSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLElBQUk7Z0JBQUUsT0FBTztZQUNsQyxJQUFJLE9BQU8sSUFBSSxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDWixPQUFPLEVBQUUsQ0FBQzthQUNiO2lCQUFNO2dCQUNILE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFDRCxLQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNqRixJQUFHLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDL0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixLQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUNyQjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUViLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDTztJQUhULFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F1RC9CO0lBQUQsa0JBQUM7Q0F2REQsQUF1REMsQ0F2RHdDLEVBQUUsQ0FBQyxTQUFTLEdBdURwRDtrQkF2RG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjdXJyVGltZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgYmFsbE51bTogbnVtYmVyID0gMjA7XHJcbiAgICBiYWxsTWF4TnVtOiBudW1iZXIgPSA1MDtcclxuICAgIC8vIHByZWZhYnM6IEFycmF5PGNjLlByZWZhYj47XHJcblxyXG4gICAgbWF4U2Vjb25kczogbnVtYmVyID0gMDtcclxuXHJcbiAgICBnZW5lUHJlZmFiKCkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwiUHJlZmFicy9iYWxsXCIsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpIHJldHVybjtcclxuICAgICAgICAgICAgaWYoIShyZXMgaW5zdGFuY2VvZiBjYy5QcmVmYWIpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShyZXMpO1xyXG4gICAgICAgICAgICBjYW52YXMuYWRkQ2hpbGQocHJlZmFiLCAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwYWRMZWZ0KG51bTogbnVtYmVyLCBuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBzdHJOdW0gPSBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgbGVuID0gc3RyTnVtLmxlbmd0aDtcclxuICAgICAgICB3aGlsZShsZW4gPCBuKSB7XHJcbiAgICAgICAgICAgIHN0ck51bSA9IFwiMFwiICsgc3RyTnVtO1xyXG4gICAgICAgICAgICBsZW4rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0ck51bTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5YWI55Sf5oiQ5LiA5a6a5pWw6YeP55qE5bCP55CDXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhbGxOdW07IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVQcmVmYWIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6K6+572u5qCH562+XHJcbiAgICAgICAgbGV0IHNlY29uZHMgPSAwO1xyXG4gICAgICAgIGxldCBtaW51dGVzID0gMDtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJUaW1lID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHNlY29uZHMgPT0gNTkpIHtcclxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgbWludXRlcysrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kcysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWF4U2Vjb25kcyA9IG1pbnV0ZXMgKiA2MCArIHNlY29uZHM7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclRpbWUuc3RyaW5nID0gdGhpcy5wYWRMZWZ0KG1pbnV0ZXMsIDIpICsgXCI6IFwiICsgdGhpcy5wYWRMZWZ0KHNlY29uZHMsIDIpXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYmFsbE51bSA8IHRoaXMuYmFsbE1heE51bSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lUHJlZmFiKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbGxOdW0gKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==