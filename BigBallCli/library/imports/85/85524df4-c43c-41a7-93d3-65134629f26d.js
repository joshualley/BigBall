"use strict";
cc._RF.push(module, '8552430xDxBp5PTZRNGKfJt', 'ItemList');
// Script/RankList/ItemList.ts

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
var ItemData_1 = require("./ItemData");
var ItemTemplate_1 = require("./ItemTemplate");
var RankApi_1 = require("../Api/RankApi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemList = /** @class */ (function (_super) {
    __extends(ItemList, _super);
    function ItemList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        return _this;
    }
    ItemList.prototype.onLoad = function () {
        var _this = this;
        setTimeout(function () {
            RankApi_1.default.GetRanks({
                success: function (ranks) {
                    for (var i = 0; i < ranks.length; i++) {
                        var rank = ranks[i];
                        var data = new ItemData_1.default();
                        data.seq = rank.seq;
                        data.nickname = rank.name;
                        data.weight = rank.weight;
                        var item = cc.instantiate(_this.itemPrefab);
                        _this.node.addChild(item);
                        item.x = -_this.node.width / 2;
                        // item.y = this.node.height/2 - (item.height + 10) * i;
                        item.getComponent(ItemTemplate_1.default).init(data);
                    }
                },
                fail: function (err) { },
            });
        }, 300);
    };
    __decorate([
        property(cc.Prefab)
    ], ItemList.prototype, "itemPrefab", void 0);
    ItemList = __decorate([
        ccclass
    ], ItemList);
    return ItemList;
}(cc.Component));
exports.default = ItemList;

cc._RF.pop();