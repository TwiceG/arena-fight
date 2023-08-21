"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calcSuccess = function (percent) {
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        return randomNumber < percent;
    };
    Helper.calcWeaponDmg = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Helper.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Helper.calcHitDmg = function (dmg, armour) {
        return Math.floor(dmg - (armour / 3));
    };
    return Helper;
}());
exports.Helper = Helper;
