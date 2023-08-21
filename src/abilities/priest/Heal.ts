import { Ability } from "../Ability";
import {Helper} from "../../utility/Helper";
import { Boost } from "../../boosts/Boost";
import { BoostType } from "../../boosts/BoostType";

export class Heal extends Ability {
    constructor() {
        super("Heal", 10);
    }
    public cast() :Boost {
        if (Helper.calcSuccess(this.chance)) {
            const healthBoost = new Boost(BoostType.healBoost, 10)
            return healthBoost;
        }else {
            return this.failedCast;
        }
    }
}