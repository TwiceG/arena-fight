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
exports.Mage = void 0;
var Hero_1 = require("./Hero");
var CharacterType_1 = require("./CharacterType");
var FireStorm_1 = require("../abilities/mage/FireStorm");
var BoostType_1 = require("../boosts/BoostType");
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage(name) {
        return _super.call(this, CharacterType_1.CharacterType.Mage, name, 70, new FireStorm_1.FireStorm(), 1, 5) || this;
    }
    Mage.prototype.useAbility = function () {
        var castedAbility = this.ability.cast();
        this.boost = castedAbility;
        if (this.boost.name != BoostType_1.BoostType.none) {
            return true;
        }
        return false;
    };
    return Mage;
}(Hero_1.Hero));
exports.Mage = Mage;
