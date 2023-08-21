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
exports.FireStorm = void 0;
var Ability_1 = require("../Ability");
var Helper_1 = require("../../utility/Helper");
var Boost_1 = require("../../boosts/Boost");
var BoostType_1 = require("../../boosts/BoostType");
var FireStorm = /** @class */ (function (_super) {
    __extends(FireStorm, _super);
    function FireStorm() {
        return _super.call(this, "Firestorm", 10) || this;
    }
    FireStorm.prototype.cast = function () {
        if (Helper_1.Helper.calcSuccess(this.chance)) {
            var dmgBoost = new Boost_1.Boost(BoostType_1.BoostType.dmgBoost, 20);
            return dmgBoost;
        }
        else {
            return this.failedCast;
        }
    };
    return FireStorm;
}(Ability_1.Ability));
exports.FireStorm = FireStorm;
