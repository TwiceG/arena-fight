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
exports.Dagger = void 0;
var Weapon_1 = require("./Weapon");
var CharacterType_1 = require("../heroes/CharacterType");
var Dagger = /** @class */ (function (_super) {
    __extends(Dagger, _super);
    function Dagger() {
        return _super.call(this, "Dagger", CharacterType_1.CharacterType.Rouge, [4, 5], 98) || this;
    }
    return Dagger;
}(Weapon_1.Weapon));
exports.Dagger = Dagger;
