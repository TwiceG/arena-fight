"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoostType = void 0;
var BoostType;
(function (BoostType) {
    BoostType[BoostType["dmgBoost"] = 0] = "dmgBoost";
    BoostType[BoostType["evasionBoost"] = 1] = "evasionBoost";
    BoostType[BoostType["armourBoost"] = 2] = "armourBoost";
    BoostType[BoostType["healBoost"] = 3] = "healBoost";
    BoostType[BoostType["none"] = 4] = "none";
})(BoostType || (exports.BoostType = BoostType = {}));
