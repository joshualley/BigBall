
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/RankList/ItemList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSYW5rTGlzdFxcSXRlbUxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLCtDQUEwQztBQUMxQywwQ0FBcUM7QUFFL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwQkM7UUF2QkcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7O0lBdUJqQyxDQUFDO0lBckJHLHlCQUFNLEdBQU47UUFBQSxpQkFvQkM7UUFuQkcsVUFBVSxDQUFDO1lBQ1AsaUJBQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUMsS0FBSztvQkFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDbkMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLGtCQUFRLEVBQUUsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDMUIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO3dCQUM3Qix3REFBd0Q7d0JBQ3hELElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDOUM7Z0JBQ0wsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHLElBQU0sQ0FBQzthQUNwQixDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBdEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1M7SUFIWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEI1QjtJQUFELGVBQUM7Q0ExQkQsQUEwQkMsQ0ExQnFDLEVBQUUsQ0FBQyxTQUFTLEdBMEJqRDtrQkExQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbURhdGEgZnJvbSAnLi9JdGVtRGF0YSc7XHJcbmltcG9ydCBJdGVtVGVtcGxhdGUgZnJvbSAnLi9JdGVtVGVtcGxhdGUnO1xyXG5pbXBvcnQgUmFua0FwaSBmcm9tICcuLi9BcGkvUmFua0FwaSc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1MaXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgaXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBSYW5rQXBpLkdldFJhbmtzKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyYW5rcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuayA9IHJhbmtzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBJdGVtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNlcSA9IHJhbmsuc2VxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm5pY2tuYW1lID0gcmFuay5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLndlaWdodCA9IHJhbmsud2VpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnggPSAtIHRoaXMubm9kZS53aWR0aC8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdGVtLnkgPSB0aGlzLm5vZGUuaGVpZ2h0LzIgLSAoaXRlbS5oZWlnaHQgKyAxMCkgKiBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChJdGVtVGVtcGxhdGUpLmluaXQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHt9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==