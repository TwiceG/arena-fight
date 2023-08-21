"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armour = void 0;
var Ability_1 = require("../Ability");
var Helper_1 = require("../../utility/Helper");
var Boost_1 = require("../../boosts/Boost");
var BoostType_1 = require("../../boosts/BoostType");
var Armour = /** @class */ (function (_super) {
    __extends(Armour, _super);
    function Armour() {
        return _super.call(this, "Armour", 10) || this;
    }
    Armour.prototype.cast = function () {
        if (Helper_1.Helper.calcSuccess(this.chance)) {
            var armourBoost = new Boost_1.Boost(BoostType_1.BoostType.armourBoost, 10);
            return armourBoost;
        }
        else {
            return this.failedCast;
        }
    };
    return Armour;
}(Ability_1.Ability));
exports.Armour = Armour;
