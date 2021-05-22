"use strict";
cc._RF.push(module, '60b7eRs8qZIe5MGZQ5QvEom', 'ItemTemplate');
// Script/RankList/ItemTemplate.ts

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
var ItemTemplate = /** @class */ (function (_super) {
    __extends(ItemTemplate, _super);
    function ItemTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.seq = null;
        _this.nickname = null;
        _this.weight = null;
        return _this;
    }
    ItemTemplate.prototype.init = function (data) {
        this.seq.string = data.seq.toString();
        this.nickname.string = data.nickname;
        this.weight.string = data.weight.toString() + "KG";
    };
    __decorate([
        property(cc.Label)
    ], ItemTemplate.prototype, "seq", void 0);
    __decorate([
        property(cc.Label)
    ], ItemTemplate.prototype, "nickname", void 0);
    __decorate([
        property(cc.Label)
    ], ItemTemplate.prototype, "weight", void 0);
    ItemTemplate = __decorate([
        ccclass
    ], ItemTemplate);
    return ItemTemplate;
}(cc.Component));
exports.default = ItemTemplate;

cc._RF.pop();