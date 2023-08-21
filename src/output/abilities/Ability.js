"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ability = void 0;
var Boost_1 = require("../boosts/Boost");
var BoostType_1 = require("../boosts/BoostType");
var Ability = /** @class */ (function () {
    function Ability(name, chance) {
        this._name = name;
        this.chance = chance;
        this._failedCast = new Boost_1.Boost(BoostType_1.BoostType.none, 0);
    }
    Object.defineProperty(Ability.prototype, "failedCast", {
        get: function () {
            return this._failedCast;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ability.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Ability;
}());
exports.Ability = Ability;
