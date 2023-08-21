import { Ability } from "../Ability";
import {Helper} from "../../utility/Helper";
import { Boost } from "../../boosts/Boost";
import { BoostType } from "../../boosts/BoostType";

export class HeadShot extends Ability {
    constructor() {
        super("Headshot", 10);
    }
    public cast() :Boost {
        if (Helper.calcSuccess(this.chance)) {
            const dmgBoost = new Boost(BoostType.dmgBoost, 15);
            return dmgBoost;
        }else {
            return this.failedCast;
        }
    }
}