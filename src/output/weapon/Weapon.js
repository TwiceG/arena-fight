"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
var Helper_1 = require("../utility/Helper");
var Weapon = /** @class */ (function () {
    function Weapon(name, usedBy, damage, hitChance) {
        this._name = name;
        this._usedBy = usedBy;
        this._damage = damage;
        this._hitChance = hitChance;
    }
    Weapon.prototype.attack = function () {
        if (Helper_1.Helper.calcSuccess(this.hitChance)) {
            var weaponDmg = Helper_1.Helper.calcWeaponDmg(this.damage[0], this.damage[1]);
            return weaponDmg;
        }
        return 0;
    };
    Object.defineProperty(Weapon.prototype, "damage", {
        get: function () {
            return this._damage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "usedBy", {
        get: function () {
            return this._usedBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "hitChance", {
        get: function () {
            return this._hitChance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Weapon;
}());
exports.Weapon = Weapon;
