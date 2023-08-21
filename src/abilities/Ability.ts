import { Boost } from "../boosts/Boost";
import { BoostType } from "../boosts/BoostType";

export abstract class Ability {
    protected _name: string;
    protected chance: number;
    private _failedCast: Boost;

    constructor(name:string, chance:number) {
        this._name = name;
        this.chance = chance;
        this._failedCast = new Boost(BoostType.none, 0)
    }
    public abstract cast() :Boost;

    get failedCast() : Boost {
        return this._failedCast;
    }
    get name() :string {
        return this._name;
    }
}