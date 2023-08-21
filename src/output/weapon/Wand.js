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
exports.Wand = void 0;
var Weapon_1 = require("./Weapon");
var CharacterType_1 = require("../heroes/CharacterType");
var Wand = /** @class */ (function (_super) {
    __extends(Wand, _super);
    function Wand() {
        return _super.call(this, "Wand", CharacterType_1.CharacterType.Mage, [9, 15], 97) || this;
    }
    return Wand;
}(Weapon_1.Weapon));
exports.Wand = Wand;
