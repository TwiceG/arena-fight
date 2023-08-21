import { Ability } from "../Ability";
import {Helper} from "../../utility/Helper";
import { Boost } from "../../boosts/Boost";
import { BoostType } from "../../boosts/BoostType";

export class Dodge extends Ability {
    constructor() {
        super("Dodge" , 10);
    }
    public cast() :Boost {
        if (Helper.calcSuccess(this.chance)) {
            const evasionBoost = new Boost(BoostType.evasionBoost, 100);
            return evasionBoost;
        }else {
            return this.failedCast;
        }
    }
}