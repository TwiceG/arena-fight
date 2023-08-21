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
exports.Dodge = void 0;
var Ability_1 = require("../Ability");
var Helper_1 = require("../../utility/Helper");
var Boost_1 = require("../../boosts/Boost");
var BoostType_1 = require("../../boosts/BoostType");
var Dodge = /** @class */ (function (_super) {
    __extends(Dodge, _super);
    function Dodge() {
        return _super.call(this, "Dodge", 10) || this;
    }
    Dodge.prototype.cast = function () {
        if (Helper_1.Helper.calcSuccess(this.chance)) {
            var evasionBoost = new Boost_1.Boost(BoostType_1.BoostType.evasionBoost, 100);
            return evasionBoost;
        }
        else {
            return this.failedCast;
        }
    };
    return Dodge;
}(Ability_1.Ability));
exports.Dodge = Dodge;
