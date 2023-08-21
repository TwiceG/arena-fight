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
exports.Priest = void 0;
var Hero_1 = require("./Hero");
var CharacterType_1 = require("./CharacterType");
var Heal_1 = require("../abilities/priest/Heal");
var BoostType_1 = require("../boosts/BoostType");
var Priest = /** @class */ (function (_super) {
    __extends(Priest, _super);
    function Priest(name) {
        var _this = _super.call(this, CharacterType_1.CharacterType.Priest, name, 90, new Heal_1.Heal(), 4, 20) || this;
        _this.heal = 0;
        _this.HP = 90;
        return _this;
    }
    Priest.prototype.useAbility = function () {
        var castedAbility = this.ability.cast();
        this.boost = castedAbility;
        var maxHealth = 90;
        if (castedAbility.name != BoostType_1.BoostType.none) {
            if (this.HP < (maxHealth - castedAbility.value)) {
                this.HP += castedAbility.value;
            }
            else {
                this.HP = maxHealth;
            }
            return true;
        }
        return false;
    };
    return Priest;
}(Hero_1.Hero));
exports.Priest = Priest;
