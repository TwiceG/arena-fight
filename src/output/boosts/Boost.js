"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boost = void 0;
var Boost = /** @class */ (function () {
    //TODO boost enum!!
    function Boost(name, value) {
        this._name = name;
        this._value = value;
    }
    Object.defineProperty(Boost.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Boost.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    return Boost;
}());
exports.Boost = Boost;
