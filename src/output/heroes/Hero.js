"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var Sword_1 = require("../weapon/Sword");
var Boost_1 = require("../boosts/Boost");
var BoostType_1 = require("../boosts/BoostType");
var Hero = /** @class */ (function () {
    function Hero(type, name, HP, ability, armour, evasion) {
        this._type = type;
        this._name = name;
        this._HP = HP;
        this._ability = ability;
        this._armour = armour;
        this._evasion = evasion;
        this._weapon = new Sword_1.Sword();
        this._boost = new Boost_1.Boost(BoostType_1.BoostType.none, 0);
    }
    Hero.prototype.equipWeapon = function (weapon) {
        this._weapon = weapon;
    };
    Object.defineProperty(Hero.prototype, "boost", {
        get: function () {
            return this._boost;
        },
        set: function (boost) {
            this._boost = boost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "evasion", {
        get: function () {
            return this._evasion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "armour", {
        get: function () {
            return this._armour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "HP", {
        get: function () {
            return this._HP;
        },
        set: function (value) {
            this._HP = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "ability", {
        get: function () {
            return this._ability;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "weapon", {
        get: function () {
            return this._weapon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return Hero;
}());
exports.Hero = Hero;
