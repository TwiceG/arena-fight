import { BoostType } from "./BoostType";


export class Boost {
    private _name :BoostType;
    private _value: number;

    //TODO boost enum!!

    constructor (name :BoostType, value :number) {
        this._name = name;
        this._value = value;
    }

    get name() : BoostType {
        return this._name;
    }
    get value() : number {
        return this._value;
    }
    set value(value: number) {
        this._value = value;
    }
}