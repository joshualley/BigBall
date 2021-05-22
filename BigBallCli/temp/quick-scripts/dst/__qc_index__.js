
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