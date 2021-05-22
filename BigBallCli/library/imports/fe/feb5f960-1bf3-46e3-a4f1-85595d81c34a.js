"use strict";
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