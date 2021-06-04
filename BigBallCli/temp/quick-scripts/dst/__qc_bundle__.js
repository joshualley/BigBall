
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Api/RankApi');
require('./assets/Script/Api/RecordApi');
require('./assets/Script/Api/UserApi');
require('./assets/Script/Config');
require('./assets/Script/Managers/CollisionManager');
require('./assets/Script/Managers/GameManager');
require('./assets/Script/Managers/MenuCtrl');
require('./assets/Script/Models/Models');
require('./assets/Script/RankList/ItemData');
require('./assets/Script/RankList/ItemList');
require('./assets/Script/RankList/ItemTemplate');
require('./assets/Script/RankList/LoadUserAvatar');
require('./assets/Script/Rock/Rocker');
require('./assets/Script/Rock/RockerCore');
require('./assets/Script/Roles/Ball');
require('./assets/Script/Roles/Player');
require('./assets/Script/Utils/Utils');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cadb7EnoepL9ZgOUo9YpTZx', 'Config');
// Script/Config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.BaseURL = "https://valleys.qicp.vip";
    return Config;
}());
exports.default = Config;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBRUEsQ0FBQztJQURpQixjQUFPLEdBQUcsMEJBQTBCLENBQUM7SUFDdkQsYUFBQztDQUZELEFBRUMsSUFBQTtrQkFGb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEJhc2VVUkwgPSBcImh0dHBzOi8vdmFsbGV5cy5xaWNwLnZpcFwiO1xyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Roles/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fac2eOOpUpNPrPSXItDARoP', 'Player');
// Script/Roles/Player.ts

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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.massLabel = null;
        _this.raduis = 10;
        _this.velocity = new cc.Vec2(20, 20);
        // 限速因子
        _this.speedLimitFator = 2.5;
        // 记录最大重量
        _this.maxMass = 0;
        return _this;
    }
    Player.prototype.onLoad = function () {
        var nickName = cc.sys.localStorage.getItem("nickName");
        this.nameLabel.string = nickName;
        this.calculateProperty(this.raduis, 1);
        this.velocity = cc.v2((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
        // this.node.color = new cc.Color(255*Math.random(), 255*Math.random(), 255*Math.random());
    };
    Player.prototype.calculateProperty = function (raduis, colorType) {
        this.speedLimitFator = this.speedLimitFator <= 1 ? 1 : this.speedLimitFator - 1 / this.raduis;
        this.raduis = raduis;
        this.nameLabel.node.y = raduis + 15;
        this.colorType = colorType;
        this.setSpriteFrame();
        this.mass = raduis * raduis;
        if (this.mass > this.maxMass)
            this.maxMass = this.mass;
        this.massLabel.string = Math.round(this.mass).toString() + " kg";
        this.node.width = raduis * 2;
        this.node.height = raduis * 2;
        // 设置碰撞检测器的半径
        this.node.getComponent(cc.CircleCollider).radius = raduis;
    };
    Player.prototype.setSpriteFrame = function () {
        var sprite = this.node.getComponent(cc.Sprite);
        var fn = 'players/player' + this.colorType.toString();
        cc.log(this.colorType);
        cc.resources.load(fn, function (err, res) {
            if (err)
                return;
            if (!(res instanceof cc.Texture2D))
                return;
            sprite.spriteFrame = new cc.SpriteFrame(res);
        });
    };
    Player.prototype.update = function (dt) {
        this.node.x += this.velocity.x * dt;
        this.node.y += this.velocity.y * dt;
    };
    __decorate([
        property(cc.Label)
    ], Player.prototype, "nameLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "massLabel", void 0);
    __decorate([
        property
    ], Player.prototype, "raduis", void 0);
    __decorate([
        property
    ], Player.prototype, "velocity", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSb2xlc1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBc0RDO1FBcERHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLGNBQVEsR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBR3hDLE9BQU87UUFDUCxxQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUM5QixTQUFTO1FBQ1QsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUF3Q3hCLENBQUM7SUF0Q0csdUJBQU0sR0FBTjtRQUNJLElBQUksUUFBUSxHQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEdBQUcsQ0FBQyxHQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSwyRkFBMkY7SUFDL0YsQ0FBQztJQUVELGtDQUFpQixHQUFqQixVQUFrQixNQUFjLEVBQUUsU0FBaUI7UUFDL0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQzdGLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQTtRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDOUIsYUFBYTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzlELENBQUM7SUFFRCwrQkFBYyxHQUFkO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksRUFBRSxHQUFHLGdCQUFnQixHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFHLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDNUIsSUFBRyxHQUFHO2dCQUFFLE9BQU87WUFDZixJQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFBRSxPQUFPO1lBQzFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDUTtJQUUzQjtRQURDLFFBQVE7MENBQ1c7SUFFcEI7UUFEQyxRQUFROzRDQUMrQjtJQVJ2QixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBc0QxQjtJQUFELGFBQUM7Q0F0REQsQUFzREMsQ0F0RG1DLEVBQUUsQ0FBQyxTQUFTLEdBc0QvQztrQkF0RG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmFtZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtYXNzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcmFkdWlzOiBudW1iZXIgPSAxMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdmVsb2NpdHk6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigyMCwgMjApO1xyXG4gICAgbWFzczogbnVtYmVyO1xyXG4gICAgY29sb3JUeXBlOiBudW1iZXI7XHJcbiAgICAvLyDpmZDpgJ/lm6DlrZBcclxuICAgIHNwZWVkTGltaXRGYXRvcjogbnVtYmVyID0gMi41O1xyXG4gICAgLy8g6K6w5b2V5pyA5aSn6YeN6YePXHJcbiAgICBtYXhNYXNzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgbmlja05hbWU6IHN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5pY2tOYW1lXCIpO1xyXG4gICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IG5pY2tOYW1lO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUHJvcGVydHkodGhpcy5yYWR1aXMsIDEpO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBjYy52MigoTWF0aC5yYW5kb20oKS0wLjUpKjIwLCAoTWF0aC5yYW5kb20oKS0wLjUpKjIwKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1Kk1hdGgucmFuZG9tKCksIDI1NSpNYXRoLnJhbmRvbSgpLCAyNTUqTWF0aC5yYW5kb20oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlUHJvcGVydHkocmFkdWlzOiBudW1iZXIsIGNvbG9yVHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZExpbWl0RmF0b3IgPSB0aGlzLnNwZWVkTGltaXRGYXRvciA8PSAxID8gMSA6IHRoaXMuc3BlZWRMaW1pdEZhdG9yIC0gMSAvIHRoaXMucmFkdWlzXHJcbiAgICAgICAgdGhpcy5yYWR1aXMgPSByYWR1aXM7XHJcbiAgICAgICAgdGhpcy5uYW1lTGFiZWwubm9kZS55ID0gcmFkdWlzICsgMTU7XHJcbiAgICAgICAgdGhpcy5jb2xvclR5cGUgPSBjb2xvclR5cGU7XHJcbiAgICAgICAgdGhpcy5zZXRTcHJpdGVGcmFtZSgpO1xyXG4gICAgICAgIHRoaXMubWFzcyA9IHJhZHVpcyAqIHJhZHVpcztcclxuICAgICAgICBpZiAodGhpcy5tYXNzID4gdGhpcy5tYXhNYXNzKSB0aGlzLm1heE1hc3MgPSB0aGlzLm1hc3M7XHJcbiAgICAgICAgdGhpcy5tYXNzTGFiZWwuc3RyaW5nID0gTWF0aC5yb3VuZCh0aGlzLm1hc3MpLnRvU3RyaW5nKCkgKyBcIiBrZ1wiXHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gcmFkdWlzICogMjtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gcmFkdWlzICogMjtcclxuICAgICAgICAvLyDorr7nva7norDmkp7mo4DmtYvlmajnmoTljYrlvoRcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSByYWR1aXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3ByaXRlRnJhbWUoKSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBsZXQgZm4gPSAncGxheWVycy9wbGF5ZXInKyB0aGlzLmNvbG9yVHlwZS50b1N0cmluZygpXHJcbiAgICAgICAgY2MubG9nKHRoaXMuY29sb3JUeXBlKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChmbiwgIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpIHJldHVybjtcclxuICAgICAgICAgICAgaWYoIShyZXMgaW5zdGFuY2VvZiBjYy5UZXh0dXJlMkQpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMudmVsb2NpdHkueCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMudmVsb2NpdHkueSAqIGR0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Utils/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95135dlSSlN2KKhNjwNiYM+', 'Utils');
// Script/Utils/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.ShowError = function (title) {
        wx.showToast({
            title: title,
            icon: 'error',
            duration: 2000
        });
    };
    Utils.ShowInfo = function (title) {
        wx.showToast({
            title: title,
            icon: 'none',
            duration: 2000
        });
    };
    Utils.ShowSuccess = function (title) {
        wx.showToast({
            title: title,
            icon: 'success',
            duration: 2000
        });
    };
    return Utils;
}());
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVdGlsc1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBd0JBLENBQUM7SUF2QmlCLGVBQVMsR0FBdkIsVUFBd0IsS0FBYTtRQUNqQyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1QsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYSxjQUFRLEdBQXRCLFVBQXVCLEtBQWE7UUFDaEMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNULEtBQUssRUFBRSxLQUFLO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRWEsaUJBQVcsR0FBekIsVUFBMEIsS0FBYTtRQUNuQyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1QsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsU0FBUztZQUNmLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNob3dFcnJvcih0aXRsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd0luZm8odGl0bGU6IHN0cmluZykge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd1N1Y2Nlc3ModGl0bGU6IHN0cmluZykge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Api/RecordApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de9bf7JlRJD1rKjtxUBxDw5', 'RecordApi');
// Script/Api/RecordApi.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var Models_1 = require("../Models/Models");
var RecordApi = /** @class */ (function () {
    function RecordApi() {
    }
    RecordApi.Add = function (uid, weight, maxTime, cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "UID": uid,
                "Weight": weight,
                "MaxTime": maxTime
            },
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var record = new Models_1.BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    RecordApi.Update = function (id, uid, weight, maxTime, cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "ID": id,
                "UID": uid,
                "Weight": Math.round(weight),
                "MaxTime": maxTime
            },
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var record = new Models_1.BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    RecordApi.Get = function (id, cb) {
        var url = this.baseUrl + id.toString();
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var record = new Models_1.BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    RecordApi.GetByUId = function (uid, cb) {
        var url = this.baseUrl + "/uid/" + uid.toString();
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var record = new Models_1.BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    RecordApi.Delete = function (id, cb) {
        var url = this.baseUrl + id.toString();
        wx.request({
            url: url,
            method: "DELETE",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var record = new Models_1.BBRecord(data["ID"], data["UID"], data["Weight"], data["MaxTime"]);
                    cb.success(record);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    RecordApi.baseUrl = Config_1.default.BaseURL + "/api/record/";
    return RecordApi;
}());
exports.default = RecordApi;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcGlcXFJlY29yZEFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUErQjtBQUMvQiwyQ0FBNEM7QUFPNUM7SUFBQTtJQXNIQSxDQUFDO0lBbkhpQixhQUFHLEdBQWpCLFVBQWtCLEdBQVcsRUFBRSxNQUFjLEVBQUUsT0FBZSxFQUFFLEVBQWtCO1FBQzlFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkIsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNQLEdBQUcsRUFBRSxHQUFHO1lBQ1IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFNBQVMsRUFBRSxPQUFPO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBVztnQkFDakIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNwRixFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNuQztZQUNMLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUNOLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1B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QUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BGLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO1lBQ0wsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwSGMsaUJBQU8sR0FBVyxnQkFBTSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7SUFxSHJFLGdCQUFDO0NBdEhELEFBc0hDLElBQUE7a0JBdEhvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZyBmcm9tICcuLi9Db25maWcnO1xyXG5pbXBvcnQgeyBCQlJlY29yZCB9IGZyb20gJy4uL01vZGVscy9Nb2RlbHMnO1xyXG5cclxuaW50ZXJmYWNlIFJlY29yZENhbGxCYWNrIHtcclxuICAgIHN1Y2Nlc3MocmVjb3JkOiBCQlJlY29yZCk6IHZvaWQ7XHJcbiAgICBmYWlsKGVycjogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkQXBpIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGJhc2VVcmw6IHN0cmluZyA9IENvbmZpZy5CYXNlVVJMICsgXCIvYXBpL3JlY29yZC9cIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEFkZCh1aWQ6IG51bWJlciwgd2VpZ2h0OiBudW1iZXIsIG1heFRpbWU6IG51bWJlciwgY2I6IFJlY29yZENhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwiVUlEXCI6IHVpZCxcclxuICAgICAgICAgICAgICAgIFwiV2VpZ2h0XCI6IHdlaWdodCxcclxuICAgICAgICAgICAgICAgIFwiTWF4VGltZVwiOiBtYXhUaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IG5ldyBCQlJlY29yZChkYXRhW1wiSURcIl0sIGRhdGFbXCJVSURcIl0sIGRhdGFbXCJXZWlnaHRcIl0sIGRhdGFbXCJNYXhUaW1lXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzKHJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUoaWQ6IG51bWJlciwgdWlkOiBudW1iZXIsIHdlaWdodDogbnVtYmVyLCBtYXhUaW1lOiBudW1iZXIsICBjYjogUmVjb3JkQ2FsbEJhY2spIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgXCJJRFwiOiBpZCxcclxuICAgICAgICAgICAgICAgIFwiVUlEXCI6IHVpZCxcclxuICAgICAgICAgICAgICAgIFwiV2VpZ2h0XCI6IE1hdGgucm91bmQod2VpZ2h0KSxcclxuICAgICAgICAgICAgICAgIFwiTWF4VGltZVwiOiBtYXhUaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IG5ldyBCQlJlY29yZChkYXRhW1wiSURcIl0sIGRhdGFbXCJVSURcIl0sIGRhdGFbXCJXZWlnaHRcIl0sIGRhdGFbXCJNYXhUaW1lXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzKHJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXQoaWQ6IG51bWJlciwgY2I6IFJlY29yZENhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IG5ldyBCQlJlY29yZChkYXRhW1wiSURcIl0sIGRhdGFbXCJVSURcIl0sIGRhdGFbXCJXZWlnaHRcIl0sIGRhdGFbXCJNYXhUaW1lXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzKHJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCeVVJZCh1aWQ6IG51bWJlciwgY2I6IFJlY29yZENhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIFwiL3VpZC9cIiArIHVpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wiSXNTdWNjZXNzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNbXCJEYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSBuZXcgQkJSZWNvcmQoZGF0YVtcIklEXCJdLCBkYXRhW1wiVUlEXCJdLCBkYXRhW1wiV2VpZ2h0XCJdLCBkYXRhW1wiTWF4VGltZVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2VzcyhyZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVsZXRlKGlkOiBudW1iZXIsIGNiOiBSZWNvcmRDYWxsQmFjaykge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmJhc2VVcmwgKyBpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wiSXNTdWNjZXNzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNbXCJEYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSBuZXcgQkJSZWNvcmQoZGF0YVtcIklEXCJdLCBkYXRhW1wiVUlEXCJdLCBkYXRhW1wiV2VpZ2h0XCJdLCBkYXRhW1wiTWF4VGltZVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2VzcyhyZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Rock/RockerCore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f800d+V67pMnanWbaU43ojd', 'RockerCore');
// Script/Rock/RockerCore.ts

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
var Player_1 = require("../Roles/Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RockerCore = /** @class */ (function (_super) {
    __extends(RockerCore, _super);
    function RockerCore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        // 衰减系数
        _this.decayFactor = 0.3;
        _this.maxHeight = 1600;
        _this.maxWidth = 2880;
        _this.step = 2;
        return _this;
    }
    RockerCore.prototype.update = function (dt) {
        if (this.node.x == 0 && this.node.y == 0) {
            this.player.velocity.x *= this.decayFactor;
            this.player.velocity.y *= this.decayFactor;
        }
        else {
            // left side
            if (this.player.node.x - this.player.raduis <= -this.maxWidth) {
                this.player.velocity.x = 0;
                this.player.node.x += this.step;
            }
            // right side
            else if (this.player.node.x + this.player.raduis >= this.maxWidth) {
                this.player.velocity.x = 0;
                this.player.node.x -= this.step;
            }
            else {
                this.player.velocity.x = this.node.x * this.player.speedLimitFator;
            }
            // top side
            if (this.player.node.y + this.player.raduis >= this.maxHeight) {
                this.player.velocity.y = 0;
                this.player.node.y -= this.step;
            }
            // bottom side
            else if (this.player.node.y - this.player.raduis <= -this.maxHeight) {
                this.player.velocity.y = 0;
                this.player.node.y += this.step;
            }
            else {
                this.player.velocity.y = this.node.y * this.player.speedLimitFator;
            }
        }
    };
    __decorate([
        property(Player_1.default)
    ], RockerCore.prototype, "player", void 0);
    RockerCore = __decorate([
        ccclass
    ], RockerCore);
    return RockerCore;
}(cc.Component));
exports.default = RockerCore;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSb2NrXFxSb2NrZXJDb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUUvQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTRDQztRQXpDRyxZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLE9BQU87UUFDUCxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsVUFBSSxHQUFXLENBQUMsQ0FBQzs7SUFtQ3JCLENBQUM7SUFqQ0csMkJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDOUM7YUFBTTtZQUNILFlBQVk7WUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25DO1lBQ0QsYUFBYTtpQkFDUixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7YUFDdEU7WUFFRCxXQUFXO1lBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkM7WUFDRCxjQUFjO2lCQUNULElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO2FBQ3RFO1NBQ0o7SUFDTCxDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7OENBQ0s7SUFITCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNEM5QjtJQUFELGlCQUFDO0NBNUNELEFBNENDLENBNUN1QyxFQUFFLENBQUMsU0FBUyxHQTRDbkQ7a0JBNUNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuLi9Sb2xlcy9QbGF5ZXInO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2NrZXJDb3JlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyOiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIOihsOWHj+ezu+aVsFxyXG4gICAgZGVjYXlGYWN0b3I6IG51bWJlciA9IDAuMztcclxuICAgIG1heEhlaWdodDogbnVtYmVyID0gMTYwMDtcclxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAyODgwO1xyXG4gICAgc3RlcDogbnVtYmVyID0gMjtcclxuICAgIFxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA9PSAwICYmIHRoaXMubm9kZS55ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudmVsb2NpdHkueCAqPSB0aGlzLmRlY2F5RmFjdG9yO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci52ZWxvY2l0eS55ICo9IHRoaXMuZGVjYXlGYWN0b3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbGVmdCBzaWRlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5ub2RlLnggLSB0aGlzLnBsYXllci5yYWR1aXMgPD0gLXRoaXMubWF4V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS54ICs9IHRoaXMuc3RlcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyByaWdodCBzaWRlXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyLm5vZGUueCArIHRoaXMucGxheWVyLnJhZHVpcyA+PSB0aGlzLm1heFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUueCAtPSB0aGlzLnN0ZXA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci52ZWxvY2l0eS54ID0gdGhpcy5ub2RlLnggKiB0aGlzLnBsYXllci5zcGVlZExpbWl0RmF0b3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHRvcCBzaWRlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5ub2RlLnkgKyB0aGlzLnBsYXllci5yYWR1aXMgPj0gdGhpcy5tYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS55IC09IHRoaXMuc3RlcDtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgLy8gYm90dG9tIHNpZGVcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXIubm9kZS55IC0gdGhpcy5wbGF5ZXIucmFkdWlzIDw9IC10aGlzLm1heEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLnkgKz0gdGhpcy5zdGVwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudmVsb2NpdHkueSA9IHRoaXMubm9kZS55ICogdGhpcy5wbGF5ZXIuc3BlZWRMaW1pdEZhdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/RankList/ItemTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSYW5rTGlzdFxcSXRlbVRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBZUM7UUFaRyxTQUFHLEdBQWEsSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFhLElBQUksQ0FBQzs7SUFRNUIsQ0FBQztJQU5HLDJCQUFJLEdBQUosVUFBSyxJQUFjO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ3ZELENBQUM7SUFWRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNFO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDSztJQVBQLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FlaEM7SUFBRCxtQkFBQztDQWZELEFBZUMsQ0FmeUMsRUFBRSxDQUFDLFNBQVMsR0FlckQ7a0JBZm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbURhdGEgZnJvbSAnLi9JdGVtRGF0YSc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1UZW1wbGF0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2VxOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBuaWNrbmFtZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgd2VpZ2h0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgaW5pdChkYXRhOiBJdGVtRGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2VxLnN0cmluZyA9IGRhdGEuc2VxLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZS5zdHJpbmcgPSBkYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0LnN0cmluZyA9IGRhdGEud2VpZ2h0LnRvU3RyaW5nKCkgKyBcIktHXCI7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/RankList/LoadUserAvatar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac4b9YuUxJF058ARpjtx+LI', 'LoadUserAvatar');
// Script/RankList/LoadUserAvatar.ts

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
var RankApi_1 = require("../Api/RankApi");
var Utils_1 = require("../Utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadUserAvatar = /** @class */ (function (_super) {
    __extends(LoadUserAvatar, _super);
    function LoadUserAvatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatar = null;
        _this.weight = null;
        _this.rank = null;
        return _this;
    }
    LoadUserAvatar.prototype.onLoad = function () {
        var _this = this;
        // 加载用户头像
        var avatarUrl = cc.sys.localStorage.getItem("avatarUrl");
        var uid = cc.sys.localStorage.getItem("uid");
        if (uid == undefined || uid == null || uid == "")
            uid = 0;
        var that = this;
        cc.loader.load({ url: avatarUrl, type: 'png' }, function (err, img) {
            if (err)
                return;
            var avatarImg = new cc.SpriteFrame(img);
            that.avatar.spriteFrame = avatarImg;
        });
        // 加载用户排名及重量
        setTimeout(function () {
            RankApi_1.default.GetUserOrder(uid, {
                success: function (ranks) {
                    _this.rank.string = ranks[0].seq.toString();
                    _this.weight.string = ranks[0].weight.toString();
                },
                fail: function (err) {
                    Utils_1.default.ShowError("未能查询到该用户的排名！");
                }
            });
        }, 300);
    };
    __decorate([
        property(cc.Sprite)
    ], LoadUserAvatar.prototype, "avatar", void 0);
    __decorate([
        property(cc.Label)
    ], LoadUserAvatar.prototype, "weight", void 0);
    __decorate([
        property(cc.Label)
    ], LoadUserAvatar.prototype, "rank", void 0);
    LoadUserAvatar = __decorate([
        ccclass
    ], LoadUserAvatar);
    return LoadUserAvatar;
}(cc.Component));
exports.default = LoadUserAvatar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSYW5rTGlzdFxcTG9hZFVzZXJBdmF0YXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBQ3JDLHdDQUFtQztBQUU3QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWtDQztRQS9CRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsVUFBSSxHQUFhLElBQUksQ0FBQzs7SUEyQjFCLENBQUM7SUF6QkcsK0JBQU0sR0FBTjtRQUFBLGlCQXVCQztRQXRCRyxTQUFTO1FBQ1QsSUFBSSxTQUFTLEdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLEdBQUcsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsVUFBUyxHQUFHLEVBQUUsR0FBRztZQUM3RCxJQUFHLEdBQUc7Z0JBQUUsT0FBTztZQUNmLElBQUksU0FBUyxHQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxZQUFZO1FBQ1osVUFBVSxDQUFDO1lBQ1AsaUJBQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUN0QixPQUFPLEVBQUUsVUFBQyxLQUFLO29CQUNYLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztvQkFDTixlQUFLLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDRztJQVBMLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FrQ2xDO0lBQUQscUJBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQzJDLEVBQUUsQ0FBQyxTQUFTLEdBa0N2RDtrQkFsQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmFua0FwaSBmcm9tICcuLi9BcGkvUmFua0FwaSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi9VdGlscy9VdGlscyc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRVc2VyQXZhdGFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgYXZhdGFyOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgd2VpZ2h0OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByYW5rOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyDliqDovb3nlKjmiLflpLTlg49cclxuICAgICAgICBsZXQgYXZhdGFyVXJsOiBzdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdmF0YXJVcmxcIik7XHJcbiAgICAgICAgbGV0IHVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVpZFwiKTtcclxuICAgICAgICBpZiAodWlkID09IHVuZGVmaW5lZCB8fCB1aWQgPT0gbnVsbCB8fCB1aWQgPT0gXCJcIikgdWlkID0gMDtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IGF2YXRhclVybCwgdHlwZTogJ3BuZycgfSwgZnVuY3Rpb24oZXJyLCBpbWcpIHtcclxuICAgICAgICAgICAgaWYoZXJyKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBhdmF0YXJJbWcgID0gbmV3IGNjLlNwcml0ZUZyYW1lKGltZyk7XHJcbiAgICAgICAgICAgIHRoYXQuYXZhdGFyLnNwcml0ZUZyYW1lID0gYXZhdGFySW1nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOWKoOi9veeUqOaIt+aOkuWQjeWPiumHjemHj1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBSYW5rQXBpLkdldFVzZXJPcmRlcih1aWQsIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyYW5rcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFuay5zdHJpbmcgPSByYW5rc1swXS5zZXEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlaWdodC5zdHJpbmcgPSByYW5rc1swXS53ZWlnaHQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuU2hvd0Vycm9yKFwi5pyq6IO95p+l6K+i5Yiw6K+l55So5oi355qE5o6S5ZCN77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Roles/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a0e9aA3zdE0K7JjvPxpOdM', 'Ball');
// Script/Roles/Ball.ts

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
var Player_1 = require("./Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.raduis = 10;
        _this.velocity = new cc.Vec2(1000, 1000);
        _this.mass = 0;
        _this.maxHeight = 1600;
        _this.maxWidth = 2880;
        return _this;
    }
    Ball.prototype.randomDir = function () {
        return Math.random() > 0.5 ? 1 : -1;
    };
    Ball.prototype.setSpriteFrame = function () {
        var sprite = this.node.getComponent(cc.Sprite);
        this.colorType = Math.ceil(Math.random() * 8);
        var fn = 'balls/ball_' + this.colorType.toString();
        cc.resources.load(fn, function (err, res) {
            if (err)
                return;
            if (!(res instanceof cc.Texture2D))
                return;
            sprite.spriteFrame = new cc.SpriteFrame(res);
        });
    };
    Ball.prototype.onLoad = function () {
        // 设置半径
        var canvas = cc.find("Canvas");
        var player = canvas.getChildByName("Player").getComponent(Player_1.default);
        var maxRaduis = player.raduis + 5;
        this.raduis = Math.random() * maxRaduis;
        this.raduis = this.raduis < 20 ? 20 : this.raduis;
        this.node.width = this.raduis * 2;
        this.node.height = this.raduis * 2;
        this.mass = this.raduis * this.raduis;
        // 设置碰撞检测器的半径
        var collider = this.node.getComponent(cc.CircleCollider);
        collider.radius = this.raduis;
        // 初始位置、速度、方向
        var x;
        var y;
        do {
            x = this.randomDir() * Math.random() * this.maxWidth + this.raduis - 200;
            y = this.randomDir() * Math.random() * this.maxHeight - this.raduis + 200;
        } while (Math.abs(player.node.x - x) < player.raduis + this.raduis + 200 &&
            Math.abs(player.node.y - y) < player.raduis + this.raduis + 200);
        this.node.x = x;
        this.node.y = y;
        this.setSpriteFrame();
        this.node.opacity = 160;
        this.velocity.x *= Math.random() * this.randomDir();
        this.velocity.y *= Math.random() * this.randomDir();
    };
    Ball.prototype.update = function (dt) {
        this.node.x += this.velocity.x * dt;
        this.node.y += this.velocity.y * dt;
    };
    __decorate([
        property
    ], Ball.prototype, "raduis", void 0);
    __decorate([
        property
    ], Ball.prototype, "velocity", void 0);
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSb2xlc1xcQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFeEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE4REM7UUEzREcsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixjQUFRLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFDekIsY0FBUSxHQUFXLElBQUksQ0FBQzs7SUFvRDVCLENBQUM7SUFsREcsd0JBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksRUFBRSxHQUFHLGFBQWEsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRyxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQzVCLElBQUcsR0FBRztnQkFBRSxPQUFPO1lBQ2YsSUFBRyxDQUFDLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQUUsT0FBTztZQUMxQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQkFBTSxHQUFOO1FBQ0ksT0FBTztRQUNQLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsYUFBYTtRQUNiLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RCxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsYUFBYTtRQUNiLElBQUksQ0FBUyxDQUFBO1FBQ2IsSUFBSSxDQUFTLENBQUM7UUFDZCxHQUFHO1lBQ0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNyRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ3pFLFFBQ0csSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRztZQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQ2pFO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUExREQ7UUFEQyxRQUFRO3dDQUNXO0lBRXBCO1FBREMsUUFBUTswQ0FDbUM7SUFMM0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQThEeEI7SUFBRCxXQUFDO0NBOURELEFBOERDLENBOURpQyxFQUFFLENBQUMsU0FBUyxHQThEN0M7a0JBOURvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByYWR1aXM6IG51bWJlciA9IDEwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICB2ZWxvY2l0eTogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDEwMDAsIDEwMDApO1xyXG4gICAgbWFzczogbnVtYmVyID0gMDtcclxuICAgIGNvbG9yVHlwZTogbnVtYmVyO1xyXG5cclxuICAgIG1heEhlaWdodDogbnVtYmVyID0gMTYwMDtcclxuICAgIG1heFdpZHRoOiBudW1iZXIgPSAyODgwO1xyXG4gICAgXHJcbiAgICByYW5kb21EaXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcHJpdGVGcmFtZSgpIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuY29sb3JUeXBlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA4KTtcclxuICAgICAgICBsZXQgZm4gPSAnYmFsbHMvYmFsbF8nKyB0aGlzLmNvbG9yVHlwZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGZuLCAgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycikgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZighKHJlcyBpbnN0YW5jZW9mIGNjLlRleHR1cmUyRCkpIHJldHVybjtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyDorr7nva7ljYrlvoRcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICBsZXQgcGxheWVyID0gY2FudmFzLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENvbXBvbmVudChQbGF5ZXIpO1xyXG4gICAgICAgIGxldCBtYXhSYWR1aXMgPSBwbGF5ZXIucmFkdWlzICsgNTtcclxuICAgICAgICB0aGlzLnJhZHVpcyA9IE1hdGgucmFuZG9tKCkgKiBtYXhSYWR1aXM7XHJcbiAgICAgICAgdGhpcy5yYWR1aXMgPSB0aGlzLnJhZHVpcyA8IDIwID8gMjAgOiB0aGlzLnJhZHVpcztcclxuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSB0aGlzLnJhZHVpcyAqIDI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMucmFkdWlzICogMjtcclxuICAgICAgICB0aGlzLm1hc3MgPSB0aGlzLnJhZHVpcyAqIHRoaXMucmFkdWlzO1xyXG4gICAgICAgIC8vIOiuvue9rueisOaSnuajgOa1i+WZqOeahOWNiuW+hFxyXG4gICAgICAgIGxldCBjb2xsaWRlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIGNvbGxpZGVyLnJhZGl1cyA9IHRoaXMucmFkdWlzO1xyXG4gICAgICAgIC8vIOWIneWni+S9jee9ruOAgemAn+W6puOAgeaWueWQkVxyXG4gICAgICAgIGxldCB4OiBudW1iZXJcclxuICAgICAgICBsZXQgeTogbnVtYmVyO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCA9IHRoaXMucmFuZG9tRGlyKCkqTWF0aC5yYW5kb20oKSp0aGlzLm1heFdpZHRoICsgdGhpcy5yYWR1aXMgLSAyMDA7XHJcbiAgICAgICAgICAgIHkgPSB0aGlzLnJhbmRvbURpcigpKk1hdGgucmFuZG9tKCkqdGhpcy5tYXhIZWlnaHQgLSB0aGlzLnJhZHVpcyArIDIwMDtcclxuICAgICAgICB9d2hpbGUoXHJcbiAgICAgICAgICAgIE1hdGguYWJzKHBsYXllci5ub2RlLnggLSB4KSA8IHBsYXllci5yYWR1aXMgKyB0aGlzLnJhZHVpcyArIDIwMCAmJiBcclxuICAgICAgICAgICAgTWF0aC5hYnMocGxheWVyLm5vZGUueSAtIHkpIDwgcGxheWVyLnJhZHVpcyArIHRoaXMucmFkdWlzICsgMjAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IHg7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuc2V0U3ByaXRlRnJhbWUoKTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDE2MDtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKj0gTWF0aC5yYW5kb20oKSAqIHRoaXMucmFuZG9tRGlyKCk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhbmRvbURpcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnZlbG9jaXR5LnggKiBkdDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnZlbG9jaXR5LnkgKiBkdDtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Rock/Rocker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSb2NrXFxSb2NrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFxQ0M7UUFsQ0csZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFXLEdBQUcsQ0FBQzs7SUErQjVCLENBQUM7SUE3QkcsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQWM7UUFDM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNwQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDckMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFBQSxpQkFrQkM7UUFqQkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBc0I7WUFDckUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFzQjtZQUNwRSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLENBQXNCO1lBQ25FLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBc0I7WUFDdEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDWixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1M7SUFHM0I7UUFEQyxRQUFROzZDQUNlO0lBTlAsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXFDMUI7SUFBRCxhQUFDO0NBckNELEFBcUNDLENBckNtQyxFQUFFLENBQUMsU0FBUyxHQXFDL0M7a0JBckNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2NrZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcm9ja2VyQ29yZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhSYWR1aXM6IG51bWJlciA9IDE2MDtcclxuXHJcbiAgICBzZXRSb2NrZXJQb3N0aW9uKHdfcG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3X3Bvcyk7XHJcbiAgICAgICAgdmFyIGxlbiA9IHBvcy5sZW4oKTtcclxuICAgICAgICBpZihsZW4gPiB0aGlzLm1heFJhZHVpcyl7XHJcbiAgICAgICAgICAgIHBvcy54ID0gdGhpcy5tYXhSYWR1aXMgKiBwb3MueCAvIGxlbjtcclxuICAgICAgICAgICAgcG9zLnkgPSB0aGlzLm1heFJhZHVpcyAqIHBvcy55IC8gbGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvY2tlckNvcmUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yb2NrZXJDb3JlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgd19wb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Um9ja2VyUG9zdGlvbih3X3Bvcyk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucm9ja2VyQ29yZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgd19wb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Um9ja2VyUG9zdGlvbih3X3Bvcyk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucm9ja2VyQ29yZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9ja2VyQ29yZS5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucm9ja2VyQ29yZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9ja2VyQ29yZS5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Api/UserApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30eb3BKRXlOb6KkiR0zDDGc', 'UserApi');
// Script/Api/UserApi.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var Models_1 = require("../Models/Models");
var UserApi = /** @class */ (function () {
    function UserApi() {
    }
    UserApi.Add = function (nickname, avatarUrl, cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "Name": nickname,
                "AvatarUrl": avatarUrl
            },
            success: function (res) {
                res = res["data"];
                console.log(res);
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"], data["AvatarUrl"]);
                    cb.success(user);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                console.log(err);
                cb.fail(err.errMsg);
            }
        });
    };
    UserApi.Update = function (uid, nickname, avatarUrl, cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "POST",
            data: {
                "ID": uid,
                "Name": nickname,
                "AvatarUrl": avatarUrl
            },
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"], data["AvatarUrl"]);
                    cb.success(user);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    UserApi.Get = function (uid, cb) {
        var url = this.baseUrl + uid.toString();
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"], data["AvatarUrl"]);
                    cb.success(user);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    UserApi.GetByName = function (name, cb) {
        var url = this.baseUrl + "name/" + name;
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                // let res: Object = resp.data.valueOf();
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"], data["AvatarUrl"]);
                    cb.success(user);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    UserApi.Delete = function (uid, cb) {
        var url = this.baseUrl + uid.toString();
        wx.request({
            url: url,
            method: "DELETE",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var user = new Models_1.BBUser(data["ID"], data["Name"], data["AvatarUrl"]);
                    cb.success(user);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    UserApi.baseUrl = Config_1.default.BaseURL + "/api/user/";
    return UserApi;
}());
exports.default = UserApi;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcGlcXFVzZXJBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBK0I7QUFDL0IsMkNBQTBDO0FBTzFDO0lBQUE7SUF1SEEsQ0FBQztJQXBIaUIsV0FBRyxHQUFqQixVQUFrQixRQUFnQixFQUFFLFNBQWlCLEVBQUUsRUFBZ0I7UUFDbkUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN2QixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1AsR0FBRyxFQUFFLEdBQUc7WUFDUixNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRTtnQkFDRixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsV0FBVyxFQUFFLFNBQVM7YUFDekI7WUFDRCxPQUFPLEVBQUUsVUFBQyxHQUFXO2dCQUNqQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDbEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNuRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNuQztZQUNMLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEVBQUUs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QUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNuQztZQUNMLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUNOLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBckhjLGVBQU8sR0FBVyxnQkFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFzSG5FLGNBQUM7Q0F2SEQsQUF1SEMsSUFBQTtrQkF2SG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlnIGZyb20gJy4uL0NvbmZpZyc7XHJcbmltcG9ydCB7IEJCVXNlciB9IGZyb20gJy4uL01vZGVscy9Nb2RlbHMnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJDYWxsQmFjayB7XHJcbiAgICBzdWNjZXNzKHVzZXI6IEJCVXNlcik6IHZvaWQ7XHJcbiAgICBmYWlsKGVycjogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckFwaSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBiYXNlVXJsOiBzdHJpbmcgPSBDb25maWcuQmFzZVVSTCArIFwiL2FwaS91c2VyL1wiO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQWRkKG5pY2tuYW1lOiBzdHJpbmcsIGF2YXRhclVybDogc3RyaW5nLCBjYjogVXNlckNhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgIFwiQXZhdGFyVXJsXCI6IGF2YXRhclVybFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcIklzU3VjY2Vzc1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzW1wiRGF0YVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBCQlVzZXIoZGF0YVtcIklEXCJdLCBkYXRhW1wiTmFtZVwiXSwgZGF0YVtcIkF2YXRhclVybFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2Vzcyh1c2VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IuZmFpbChyZXNbXCJJbmZvXCJdW1wiTWVzc2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGRhdGUodWlkOiBudW1iZXIsIG5pY2tuYW1lOiBzdHJpbmcsIGF2YXRhclVybDogc3RyaW5nLCBjYjogVXNlckNhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwiSURcIjogdWlkLFxyXG4gICAgICAgICAgICAgICAgXCJOYW1lXCI6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJBdmF0YXJVcmxcIjogYXZhdGFyVXJsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgQkJVc2VyKGRhdGFbXCJJRFwiXSwgZGF0YVtcIk5hbWVcIl0sIGRhdGFbXCJBdmF0YXJVcmxcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLnN1Y2Nlc3ModXNlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXQodWlkOiBudW1iZXIsIGNiOiBVc2VyQ2FsbEJhY2spIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5iYXNlVXJsICsgdWlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJJc1N1Y2Nlc3NcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc1tcIkRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgQkJVc2VyKGRhdGFbXCJJRFwiXSwgZGF0YVtcIk5hbWVcIl0sIGRhdGFbXCJBdmF0YXJVcmxcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLnN1Y2Nlc3ModXNlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmZhaWwocmVzW1wiSW5mb1wiXVtcIk1lc3NhZ2VcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYi5mYWlsKGVyci5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCeU5hbWUobmFtZTogc3RyaW5nLCBjYjogVXNlckNhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIFwibmFtZS9cIiArIG5hbWU7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzW1wiZGF0YVwiXTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCByZXM6IE9iamVjdCA9IHJlc3AuZGF0YS52YWx1ZU9mKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wiSXNTdWNjZXNzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNbXCJEYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IEJCVXNlcihkYXRhW1wiSURcIl0sIGRhdGFbXCJOYW1lXCJdLCBkYXRhW1wiQXZhdGFyVXJsXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRGVsZXRlKHVpZDogbnVtYmVyLCBjYjogVXNlckNhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIHVpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wiSXNTdWNjZXNzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNbXCJEYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IEJCVXNlcihkYXRhW1wiSURcIl0sIGRhdGFbXCJOYW1lXCJdLCBkYXRhW1wiQXZhdGFyVXJsXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYi5zdWNjZXNzKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Api/RankApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7d0cRp94BG7a4Lcf3gZ87Q', 'RankApi');
// Script/Api/RankApi.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var Models_1 = require("../Models/Models");
var RankApi = /** @class */ (function () {
    function RankApi() {
    }
    RankApi.GetUserOrder = function (uid, cb) {
        var url = this.baseUrl + uid.toString();
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var rank = new Models_1.BBRank(data["Seq"], data["Name"], data["Weight"]);
                    cb.success([rank]);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    RankApi.GetRanks = function (cb) {
        var url = this.baseUrl;
        wx.request({
            url: url,
            method: "GET",
            success: function (res) {
                res = res["data"];
                if (res["IsSuccess"]) {
                    var data = res["Data"];
                    var ranks = [];
                    for (var i = 0; i < data.length; i++) {
                        var item = data[i];
                        var rank = new Models_1.BBRank(item["Seq"], item["Name"], item["Weight"]);
                        ranks.push(rank);
                    }
                    cb.success(ranks);
                }
                else {
                    cb.fail(res["Info"]["Message"]);
                }
            },
            fail: function (err) {
                cb.fail(err.errMsg);
            }
        });
    };
    RankApi.baseUrl = Config_1.default.BaseURL + "/api/record/rank/";
    return RankApi;
}());
exports.default = RankApi;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcGlcXFJhbmtBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBK0I7QUFDL0IsMkNBQTBDO0FBTzFDO0lBQUE7SUFrREEsQ0FBQztJQS9DaUIsb0JBQVksR0FBMUIsVUFBMkIsR0FBVyxFQUFFLEVBQWtCO1FBQ3RELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDUCxHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLFVBQUMsR0FBVztnQkFDakIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDakUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO1lBQ0wsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYSxnQkFBUSxHQUF0QixVQUF1QixFQUFrQjtRQUNyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDUCxHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLFVBQUMsR0FBVztnQkFDakIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksSUFBSSxHQUFrQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLElBQUksS0FBSyxHQUFrQixFQUFFLENBQUM7b0JBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNsQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2pFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3BCO29CQUVELEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO1lBQ0wsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoRGMsZUFBTyxHQUFXLGdCQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDO0lBaUQxRSxjQUFDO0NBbERELEFBa0RDLElBQUE7a0JBbERvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZyBmcm9tICcuLi9Db25maWcnO1xyXG5pbXBvcnQgeyBCQlJhbmsgfSBmcm9tICcuLi9Nb2RlbHMvTW9kZWxzJztcclxuXHJcbmludGVyZmFjZSBSZWNvcmRDYWxsQmFjayB7XHJcbiAgICBzdWNjZXNzKHJhbmtzOiBCQlJhbmtbXSk6IHZvaWQ7XHJcbiAgICBmYWlsKGVycjogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0FwaSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBiYXNlVXJsOiBzdHJpbmcgPSBDb25maWcuQmFzZVVSTCArIFwiL2FwaS9yZWNvcmQvcmFuay9cIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFVzZXJPcmRlcih1aWQ6IG51bWJlciwgY2I6IFJlY29yZENhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybCArIHVpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHJlc1tcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wiSXNTdWNjZXNzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNbXCJEYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5rID0gbmV3IEJCUmFuayhkYXRhW1wiU2VxXCJdLCBkYXRhW1wiTmFtZVwiXSwgZGF0YVtcIldlaWdodFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3VjY2VzcyhbcmFua10pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFua3MoY2I6IFJlY29yZENhbGxCYWNrKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuYmFzZVVybDtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlczogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSByZXNbXCJkYXRhXCJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcIklzU3VjY2Vzc1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhOiBBcnJheTxPYmplY3Q+ID0gcmVzW1wiRGF0YVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFua3M6IEFycmF5PEJCUmFuaz4gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5rID0gbmV3IEJCUmFuayhpdGVtW1wiU2VxXCJdLCBpdGVtW1wiTmFtZVwiXSwgaXRlbVtcIldlaWdodFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtzLnB1c2gocmFuayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNiLnN1Y2Nlc3MocmFua3MpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYi5mYWlsKHJlc1tcIkluZm9cIl1bXCJNZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IuZmFpbChlcnIuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Managers/CollisionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ccab0D0MZAopkyuTEvCESE', 'CollisionManager');
// Script/Managers/CollisionManager.ts

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
var Ball_1 = require("../Roles/Ball");
var Player_1 = require("../Roles/Player");
var GameManager_1 = require("./GameManager");
var RecordApi_1 = require("../Api/RecordApi");
var Utils_1 = require("../Utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxColliderType;
(function (BoxColliderType) {
    BoxColliderType[BoxColliderType["Ball"] = 0] = "Ball";
    BoxColliderType[BoxColliderType["Player"] = 1] = "Player";
    BoxColliderType[BoxColliderType["Wall"] = 2] = "Wall";
})(BoxColliderType || (BoxColliderType = {}));
var CollisionManager = /** @class */ (function (_super) {
    __extends(CollisionManager, _super);
    function CollisionManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameManager = null;
        return _this;
    }
    CollisionManager.prototype.onEnable = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    CollisionManager.prototype.onDisable = function () {
        cc.director.getCollisionManager().enabled = false;
    };
    CollisionManager.prototype.gameOver = function (s) {
        // 更新用户的记录
        var uid = cc.sys.localStorage.getItem("uid");
        if (uid == undefined || uid == null || uid == "")
            uid = 0;
        var maxSeconds = this.gameManager.getComponent(GameManager_1.default).maxSeconds;
        RecordApi_1.default.GetByUId(uid, {
            success: function (record) {
                var w = record.weight < s.maxMass ? s.maxMass : record.weight;
                var t = record.maxTime < maxSeconds ? maxSeconds : record.maxTime;
                RecordApi_1.default.Update(record.id, uid, w, t, {
                    success: function (record) { },
                    fail: function (err) {
                        Utils_1.default.ShowError("刷新记录失败");
                    }
                });
            },
            fail: function (err) {
                RecordApi_1.default.Add(uid, s.maxMass, maxSeconds, {
                    success: function (record) { },
                    fail: function (err) {
                        Utils_1.default.ShowError("保存记录失败");
                    }
                });
            }
        });
        cc.director.loadScene("RankSence", null);
    };
    CollisionManager.prototype.onCollisionEnter = function (other, self) {
        // if (self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Ball) {
        //     let s = self.node.getComponent(Ball);
        //     let o = other.node.getComponent(Ball);
        //     s.velocity = cc.v2(o.velocity.y, o.velocity.x)
        // } else if(self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Player) {
        // } else 
        if (self.tag == BoxColliderType.Player && other.tag == BoxColliderType.Ball) {
            var s = self.node.getComponent(Player_1.default);
            var o = other.node.getComponent(Ball_1.default);
            var similar = s.colorType == o.colorType;
            if (!similar && s.raduis - o.raduis <= 3) {
                this.gameOver(s);
                return;
            }
            var newRadius = !similar ? s.raduis - o.raduis : s.raduis + o.raduis;
            // 重新生成半径及颜色
            s.calculateProperty(newRadius, o.colorType);
            // 移除小球
            var canvas = cc.find("Canvas");
            canvas.removeChild(o.node, true);
            this.gameManager.getComponent(GameManager_1.default).ballNum--;
        }
        else if (self.tag == BoxColliderType.Ball && other.tag == BoxColliderType.Wall) {
            var s = self.node.getComponent(Ball_1.default);
            s.velocity = cc.v2(-s.velocity.x, -s.velocity.y);
        }
        // else if(self.tag == BoxColliderType.Player && other.tag == BoxColliderType.Wall) {
        // let s = self.node.getComponent(Player);
        // let f = s.speedLimitFator;
        // s.speedLimitFator = -2;
        // setTimeout(() => {
        //     s.speedLimitFator = f;
        // }, 1000);
        // }
    };
    __decorate([
        property(cc.Node)
    ], CollisionManager.prototype, "gameManager", void 0);
    CollisionManager = __decorate([
        ccclass
    ], CollisionManager);
    return CollisionManager;
}(cc.Component));
exports.default = CollisionManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2Vyc1xcQ29sbGlzaW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0M7QUFDaEMsMENBQW9DO0FBQ3BDLDZDQUF1QztBQUN2Qyw4Q0FBeUM7QUFDekMsd0NBQW1DO0FBRTdCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssZUFJSjtBQUpELFdBQUssZUFBZTtJQUNoQixxREFBUSxDQUFBO0lBQ1IseURBQVUsQ0FBQTtJQUNWLHFEQUFRLENBQUE7QUFDWixDQUFDLEVBSkksZUFBZSxLQUFmLGVBQWUsUUFJbkI7QUFHRDtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQThFQztRQTNFRyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUEyRWhDLENBQUM7SUF6RUcsbUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxDQUFTO1FBQ2QsVUFBVTtRQUNWLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLEdBQUcsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxD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LENBQUMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFO1lBQzdFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELHFGQUFxRjtRQUNqRiwwQ0FBMEM7UUFDMUMsNkJBQTZCO1FBQzdCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLFlBQVk7UUFDaEIsSUFBSTtJQUNSLENBQUM7SUExRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDVTtJQUhYLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBOEVwQztJQUFELHVCQUFDO0NBOUVELEFBOEVDLENBOUU2QyxFQUFFLENBQUMsU0FBUyxHQThFekQ7a0JBOUVvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbCBmcm9tICcuLi9Sb2xlcy9CYWxsJ1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL1JvbGVzL1BsYXllcidcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4vR2FtZU1hbmFnZXInXHJcbmltcG9ydCBSZWNvcmRBcGkgZnJvbSAnLi4vQXBpL1JlY29yZEFwaSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi9VdGlscy9VdGlscyc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gQm94Q29sbGlkZXJUeXBlIHtcclxuICAgIEJhbGwgPSAwLFxyXG4gICAgUGxheWVyID0gMSxcclxuICAgIFdhbGwgPSAyXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZU1hbmFnZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoczogUGxheWVyKSB7XHJcbiAgICAgICAgLy8g5pu05paw55So5oi355qE6K6w5b2VXHJcbiAgICAgICAgbGV0IHVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVpZFwiKTtcclxuICAgICAgICBpZiAodWlkID09IHVuZGVmaW5lZCB8fCB1aWQgPT0gbnVsbCB8fCB1aWQgPT0gXCJcIikgdWlkID0gMDtcclxuICAgICAgICBsZXQgbWF4U2Vjb25kcyA9IHRoaXMuZ2FtZU1hbmFnZXIuZ2V0Q29tcG9uZW50KEdhbWVNYW5hZ2VyKS5tYXhTZWNvbmRzO1xyXG4gICAgICAgIFJlY29yZEFwaS5HZXRCeVVJZCh1aWQsIHtcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHc6IG51bWJlciA9IHJlY29yZC53ZWlnaHQgPCBzLm1heE1hc3MgPyBzLm1heE1hc3MgOiByZWNvcmQud2VpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbGV0IHQ6IG51bWJlciA9IHJlY29yZC5tYXhUaW1lIDwgbWF4U2Vjb25kcyA/IG1heFNlY29uZHMgOiByZWNvcmQubWF4VGltZTtcclxuICAgICAgICAgICAgICAgIFJlY29yZEFwaS5VcGRhdGUocmVjb3JkLmlkLCB1aWQsIHcsIHQsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVjb3JkKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLlNob3dFcnJvcihcIuWIt+aWsOiusOW9leWksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBSZWNvcmRBcGkuQWRkKHVpZCwgcy5tYXhNYXNzLCBtYXhTZWNvbmRzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlY29yZCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5TaG93RXJyb3IoXCLkv53lrZjorrDlvZXlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiUmFua1NlbmNlXCIsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkJveENvbGxpZGVyLCBzZWxmOiBjYy5Cb3hDb2xsaWRlcikge1xyXG4gICAgICAgIC8vIGlmIChzZWxmLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuQmFsbCAmJiBvdGhlci50YWcgPT0gQm94Q29sbGlkZXJUeXBlLkJhbGwpIHtcclxuICAgICAgICAvLyAgICAgbGV0IHMgPSBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KEJhbGwpO1xyXG4gICAgICAgIC8vICAgICBsZXQgbyA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KEJhbGwpO1xyXG4gICAgICAgIC8vICAgICBzLnZlbG9jaXR5ID0gY2MudjIoby52ZWxvY2l0eS55LCBvLnZlbG9jaXR5LngpXHJcbiAgICAgICAgLy8gfSBlbHNlIGlmKHNlbGYudGFnID09IEJveENvbGxpZGVyVHlwZS5CYWxsICYmIG90aGVyLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuUGxheWVyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIH0gZWxzZSBcclxuICAgICAgICBpZihzZWxmLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuUGxheWVyICYmIG90aGVyLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuQmFsbCkge1xyXG4gICAgICAgICAgICBsZXQgcyA9IHNlbGYubm9kZS5nZXRDb21wb25lbnQoUGxheWVyKTtcclxuICAgICAgICAgICAgbGV0IG8gPSBvdGhlci5ub2RlLmdldENvbXBvbmVudChCYWxsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzaW1pbGFyID0gcy5jb2xvclR5cGUgPT0gby5jb2xvclR5cGU7XHJcbiAgICAgICAgICAgIGlmICghc2ltaWxhciAmJiBzLnJhZHVpcyAtIG8ucmFkdWlzIDw9IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIocyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5ld1JhZGl1cyA9ICFzaW1pbGFyID8gcy5yYWR1aXMgLSBvLnJhZHVpcyA6IHMucmFkdWlzICsgby5yYWR1aXM7XHJcbiAgICAgICAgICAgIC8vIOmHjeaWsOeUn+aIkOWNiuW+hOWPiuminOiJslxyXG4gICAgICAgICAgICBzLmNhbGN1bGF0ZVByb3BlcnR5KG5ld1JhZGl1cywgby5jb2xvclR5cGUpO1xyXG4gICAgICAgICAgICAvLyDnp7vpmaTlsI/nkINcclxuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVDaGlsZChvLm5vZGUsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmdldENvbXBvbmVudChHYW1lTWFuYWdlcikuYmFsbE51bS0tO1xyXG4gICAgICAgIH0gZWxzZSBpZihzZWxmLnRhZyA9PSBCb3hDb2xsaWRlclR5cGUuQmFsbCAmJiBvdGhlci50YWcgPT0gQm94Q29sbGlkZXJUeXBlLldhbGwpIHtcclxuICAgICAgICAgICAgbGV0IHMgPSBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KEJhbGwpO1xyXG4gICAgICAgICAgICBzLnZlbG9jaXR5ID0gY2MudjIoLXMudmVsb2NpdHkueCwgLXMudmVsb2NpdHkueSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLyBlbHNlIGlmKHNlbGYudGFnID09IEJveENvbGxpZGVyVHlwZS5QbGF5ZXIgJiYgb3RoZXIudGFnID09IEJveENvbGxpZGVyVHlwZS5XYWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBzID0gc2VsZi5ub2RlLmdldENvbXBvbmVudChQbGF5ZXIpO1xyXG4gICAgICAgICAgICAvLyBsZXQgZiA9IHMuc3BlZWRMaW1pdEZhdG9yO1xyXG4gICAgICAgICAgICAvLyBzLnNwZWVkTGltaXRGYXRvciA9IC0yO1xyXG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHMuc3BlZWRMaW1pdEZhdG9yID0gZjtcclxuICAgICAgICAgICAgLy8gfSwgMTAwMCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Managers/MenuCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec832ErHy5MaJYUO+d69Kru', 'MenuCtrl');
// Script/Managers/MenuCtrl.ts

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
var UserApi_1 = require("../Api/UserApi");
var Utils_1 = require("../Utils/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuCtrl = /** @class */ (function (_super) {
    __extends(MenuCtrl, _super);
    function MenuCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuCtrl.prototype.saveUserInfo = function (username, avatarUrl, action) {
        UserApi_1.default.GetByName(username, {
            success: function (user) {
                // console.log("success");
                // console.log(user);
                cc.sys.localStorage.setItem("uid", user.id);
                cc.sys.localStorage.setItem("nickName", user.name);
                cc.sys.localStorage.setItem("avatarUrl", user.avatarUrl);
                if (action)
                    action.Do();
            },
            fail: function (err) {
                // console.log("error");
                // console.log(err);
                // 失败时表示未找到用户，此时创建一个新用户
                UserApi_1.default.Add(username, avatarUrl, {
                    success: function (user) {
                        // console.log(user.id);
                        cc.sys.localStorage.setItem("uid", user.id);
                        cc.sys.localStorage.setItem("nickName", user.name);
                        cc.sys.localStorage.setItem("avatarUrl", user.avatarUrl);
                        if (action)
                            action.Do();
                    },
                    fail: function (err) {
                        Utils_1.default.ShowError("用户创建失败");
                    }
                });
            }
        });
    };
    MenuCtrl.prototype.startGame = function () {
        var _this = this;
        var nickName = cc.sys.localStorage.getItem('nickName');
        if (nickName == undefined || nickName == null || nickName == "") {
            wx.getUserProfile({
                desc: "获取您的昵称及头像",
                success: function (res) {
                    _this.saveUserInfo(res.userInfo.nickName, res.userInfo.avatarUrl, {
                        Do: function () {
                            cc.director.loadScene("MainSence", null);
                        }
                    });
                },
                fail: function (e) {
                    Utils_1.default.ShowError(e.errMsg);
                }
            });
        }
        else {
            var avatarUrl = cc.sys.localStorage.getItem('avatarUrl');
            this.saveUserInfo(nickName, avatarUrl, {
                Do: function () {
                    cc.director.loadScene("MainSence", null);
                }
            });
        }
    };
    MenuCtrl.prototype.quitGame = function () {
        cc.director.end();
    };
    MenuCtrl.prototype.shareGame = function () {
        Utils_1.default.ShowInfo("正在努力开发中...");
    };
    MenuCtrl.prototype.menuScene = function () {
        cc.director.loadScene("MenuSence", null);
    };
    MenuCtrl.prototype.showRank = function () {
        cc.director.loadScene("RankSence", null);
    };
    MenuCtrl = __decorate([
        ccclass
    ], MenuCtrl);
    return MenuCtrl;
}(cc.Component));
exports.default = MenuCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2Vyc1xcTWVudUN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBQ3JDLHdDQUFtQztBQUU3QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQU8xQztJQUFzQyw0QkFBWTtJQUFsRDs7SUEwRUEsQ0FBQztJQXhFRywrQkFBWSxHQUFaLFVBQWEsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLE1BQWU7UUFDN0QsaUJBQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3hCLE9BQU8sRUFBRSxVQUFDLElBQUk7Z0JBQ1YsMEJBQTBCO2dCQUMxQixxQkFBcUI7Z0JBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pELElBQUksTUFBTTtvQkFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUIsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sd0JBQXdCO2dCQUN4QixvQkFBb0I7Z0JBQ3BCLHVCQUF1QjtnQkFDdkIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRTtvQkFDN0IsT0FBTyxFQUFFLFVBQUMsSUFBSTt3QkFDVix3QkFBd0I7d0JBQ3hCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3pELElBQUksTUFBTTs0QkFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQzVCLENBQUM7b0JBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRzt3QkFDTixlQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5QixDQUFDO2lCQUNKLENBQUMsQ0FBQztZQUNQLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLFFBQVEsR0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0QsSUFBSSxRQUFRLElBQUksU0FBUyxJQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLEVBQUUsRUFBRTtZQUM3RCxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUNkLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsVUFBQyxHQUFHO29CQUNULEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7d0JBQzdELEVBQUUsRUFBRTs0QkFDQSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzdDLENBQUM7cUJBQ0osQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQUMsQ0FBQztvQkFDSixlQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLFNBQVMsR0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFO2dCQUNuQyxFQUFFLEVBQUU7b0JBQ0EsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxlQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUF4RWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRTVCO0lBQUQsZUFBQztDQTFFRCxBQTBFQyxDQTFFcUMsRUFBRSxDQUFDLFNBQVMsR0EwRWpEO2tCQTFFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyQXBpIGZyb20gJy4uL0FwaS9Vc2VyQXBpJztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4uL1V0aWxzL1V0aWxzJztcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW50ZXJmYWNlIEFjdGlvbiB7XHJcbiAgICBEbygpOiB2b2lkO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc2F2ZVVzZXJJbmZvKHVzZXJuYW1lOiBzdHJpbmcsIGF2YXRhclVybDogc3RyaW5nLCBhY3Rpb24/OiBBY3Rpb24pIHtcclxuICAgICAgICBVc2VyQXBpLkdldEJ5TmFtZSh1c2VybmFtZSwge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiAodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1aWRcIiwgdXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuaWNrTmFtZVwiLCB1c2VyLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXZhdGFyVXJsXCIsIHVzZXIuYXZhdGFyVXJsKTtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24pIGFjdGlvbi5EbygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIC8vIOWksei0peaXtuihqOekuuacquaJvuWIsOeUqOaIt++8jOatpOaXtuWIm+W7uuS4gOS4quaWsOeUqOaIt1xyXG4gICAgICAgICAgICAgICAgVXNlckFwaS5BZGQodXNlcm5hbWUsIGF2YXRhclVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1aWRcIiwgdXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5pY2tOYW1lXCIsIHVzZXIubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF2YXRhclVybFwiLCB1c2VyLmF2YXRhclVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24pIGFjdGlvbi5EbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5TaG93RXJyb3IoXCLnlKjmiLfliJvlu7rlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgbGV0IG5pY2tOYW1lOiBzdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25pY2tOYW1lJyk7XHJcbiAgICAgICAgaWYgKG5pY2tOYW1lID09IHVuZGVmaW5lZCB8fCBuaWNrTmFtZSA9PSBudWxsIHx8IG5pY2tOYW1lID09IFwiXCIpIHtcclxuICAgICAgICAgICAgd3guZ2V0VXNlclByb2ZpbGUoe1xyXG4gICAgICAgICAgICAgICAgZGVzYzogXCLojrflj5bmgqjnmoTmmLXnp7Dlj4rlpLTlg49cIixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVVc2VySW5mbyhyZXMudXNlckluZm8ubmlja05hbWUsIHJlcy51c2VySW5mby5hdmF0YXJVcmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRG86ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TZW5jZVwiLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuU2hvd0Vycm9yKGUuZXJyTXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGF2YXRhclVybDogc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJVcmwnKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlVXNlckluZm8obmlja05hbWUsIGF2YXRhclVybCwge1xyXG4gICAgICAgICAgICAgICAgRG86ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2VuY2VcIiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBxdWl0R2FtZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaGFyZUdhbWUoKSB7XHJcbiAgICAgICAgVXRpbHMuU2hvd0luZm8oXCLmraPlnKjliqrlipvlvIDlj5HkuK0uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudVNjZW5lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1lbnVTZW5jZVwiLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UmFuaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJSYW5rU2VuY2VcIiwgbnVsbCk7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
