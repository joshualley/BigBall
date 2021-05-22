"use strict";
cc._RF.push(module, '2fbb00t6qNH2qcDgEna2roL', 'Rocker');
// Script/Rock/Rocker.ts

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
var Rocker = /** @class */ (function (_super) {
    __extends(Rocker, _super);
    function Rocker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rockerCore = null;
        _this.maxRaduis = 160;
        return _this;
    }
    Rocker.prototype.setRockerPostion = function (w_pos) {
        var pos = this.node.convertToNodeSpaceAR(w_pos);
        var len = pos.len();
        if (len > this.maxRaduis) {
            pos.x = this.maxRaduis * pos.x / len;
            pos.y = this.maxRaduis * pos.y / len;
        }
        this.rockerCore.setPosition(pos);
    };
    Rocker.prototype.onLoad = function () {
        var _this = this;
        this.rockerCore.on(cc.Node.EventType.TOUCH_START, function (e) {
            var w_pos = e.getLocation();
            _this.setRockerPostion(w_pos);
        }, this);
        this.rockerCore.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            var w_pos = e.getLocation();
            _this.setRockerPostion(w_pos);
        }, this);
        this.rockerCore.on(cc.Node.EventType.TOUCH_END, function (e) {
            _this.rockerCore.setPosition(cc.v2(0, 0));
        }, this);
        this.rockerCore.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
            _this.rockerCore.setPosition(cc.v2(0, 0));
        }, this);
    };
    __decorate([
        property(cc.Node)
    ], Rocker.prototype, "rockerCore", void 0);
    __decorate([
        property
    ], Rocker.prototype, "maxRaduis", void 0);
    Rocker = __decorate([
        ccclass
    ], Rocker);
    return Rocker;
}(cc.Component));
exports.default = Rocker;

cc._RF.pop();