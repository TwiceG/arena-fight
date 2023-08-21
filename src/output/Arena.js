"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arena = void 0;
var BattleAxe_1 = require("./weapon/BattleAxe");
var Wand_1 = require("./weapon/Wand");
var Dagger_1 = require("./weapon/Dagger");
var Bow_1 = require("./weapon/Bow");
var WarHammer_1 = require("./weapon/WarHammer");
var Helper_1 = require("./utility/Helper");
var BoostType_1 = require("./boosts/BoostType");
var Arena = /** @class */ (function () {
    function Arena() {
        this.heroes = [];
        this.weapons = [];
        this.weapons.push(new BattleAxe_1.BattleAxe());
        this.weapons.push(new Bow_1.Bow());
        this.weapons.push(new Dagger_1.Dagger());
        this.weapons.push(new Wand_1.Wand());
        this.weapons.push(new WarHammer_1.WarHammer());
    }
    Arena.prototype.addHeroToArena = function (hero) {
        this.heroes.push(hero);
    };
    Arena.prototype.prepareForRandomWeaponFight = function (hero) {
        this.addHeroToArena(hero);
        var randomWeapon = Helper_1.Helper.getRandomNumber(1, this.weapons.length);
        hero.equipWeapon(this.weapons[randomWeapon]);
    };
    Arena.prototype.prepareForFight = function (hero) {
        var _this = this;
        this.addHeroToArena(hero);
        this.weapons.forEach(function (weapon) {
            for (var i = 0; i < _this.weapons.length; i++) {
                if (weapon.usedBy === hero.type) {
                    hero.equipWeapon(weapon);
                    break;
                }
            }
        });
    };
    Arena.prototype.calcHit = function (player1, player2) {
        var p1AttackDmg = 0;
        var p2Armour = player2.armour;
        if (player1.boost.name === BoostType_1.BoostType.dmgBoost) {
            p1AttackDmg += player1.weapon.attack() + player1.boost.value;
        }
        else {
            p1AttackDmg += player1.weapon.attack();
        }
        if (player1.weapon.usedBy === player1.type) {
            if (player2.boost.name === BoostType_1.BoostType.armourBoost) {
                p2Armour += player2.boost.value;
            }
            var p1Hit = Helper_1.Helper.calcHitDmg(p1AttackDmg, p2Armour);
            return p1Hit;
        }
        return 0;
    };
    Arena.prototype.dodgeSuccess = function (player) {
        if (player.boost.name === BoostType_1.BoostType.evasionBoost) {
            return true;
        }
        return Helper_1.Helper.calcSuccess(player.evasion);
    };
    Arena.prototype.usageOfAbility = function (player, boostType) {
        //TODO shorten
        var abilityResult = "";
        switch (boostType) {
            case BoostType_1.BoostType.dmgBoost:
                abilityResult += "".concat(player.name, " cast ").concat(player.ability.name, " \n\n");
                break;
            case BoostType_1.BoostType.healBoost:
                abilityResult += "".concat(player.name, " cast ").concat(player.ability.name, " \n\n");
                break;
            case BoostType_1.BoostType.evasionBoost:
                abilityResult += "".concat(player.name, " cast ").concat(player.ability.name, " \n\n");
                break;
            case BoostType_1.BoostType.armourBoost:
                abilityResult += "".concat(player.name, " cast ").concat(player.ability.name, " \n\n");
                break;
            case BoostType_1.BoostType.none:
                abilityResult += "".concat(player.name, " failed to cast ").concat(player.ability.name, " \n\n");
        }
        return abilityResult;
    };
    Arena.prototype.playerTurn = function (player1, player2) {
        var turnResult = "".concat(player1.name, " HP: ").concat(player1.HP, " \n").concat(player2.name, " HP: ").concat(player2.HP, " \n\n");
        player1.useAbility();
        player2.useAbility();
        if (player1.boost.name != BoostType_1.BoostType.dmgBoost) {
            turnResult += this.usageOfAbility(player1, player1.boost.name);
        }
        turnResult += this.usageOfAbility(player2, player2.boost.name);
        turnResult += "".concat(player2.name, " tries to attack \n");
        var p2Hit = this.calcHit(player2, player1);
        if (p2Hit > 0) {
            if (this.dodgeSuccess(player1)) {
                turnResult += player1.name + " dodged the attack! \n\n";
            }
            else {
                turnResult += player2.name + " attacked successfully! \n";
                turnResult += player2.name + " hit(".concat(p2Hit, ") dmg to ") + player1.name + " (".concat(player1.HP, " - ").concat(p2Hit, ")") + "\n\n";
                player1.HP -= p2Hit;
            }
        }
        else {
            turnResult += player2.name + " missed with ".concat(player2.weapon.name, " weapon! \n");
        }
        return turnResult;
    };
    Arena.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    };
    Arena.prototype.fight = function (player1, player2) {
        var roundResult = "";
        var playerTurn = this.playerTurn(player1, player2);
        roundResult += playerTurn;
        return roundResult;
    };
    return Arena;
}());
exports.Arena = Arena;
