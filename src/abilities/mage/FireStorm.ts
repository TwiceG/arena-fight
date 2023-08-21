import { Ability } from "../Ability";
import {Helper} from "../../utility/Helper";
import { Boost } from "../../boosts/Boost";
import { BoostType } from "../../boosts/BoostType";

export class FireStorm extends Ability {
    constructor() {
        super("Firestorm",10);
    }
    public cast() :Boost {
        if (Helper.calcSuccess(this.chance)) {
            const dmgBoost = new Boost(BoostType.dmgBoost,20);
            return dmgBoost;
        }else {
            return this.failedCast;
        }
    }
}