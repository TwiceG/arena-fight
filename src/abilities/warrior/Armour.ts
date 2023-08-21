import { Ability } from "../Ability";
import {Helper} from "../../utility/Helper";
import { Boost } from "../../boosts/Boost";
import { BoostType } from "../../boosts/BoostType";

export class Armour extends Ability {
    constructor() {
        super("Armour", 10);
    }
    public cast() :Boost {
        if (Helper.calcSuccess(this.chance)) {
            const armourBoost = new Boost(BoostType.armourBoost, 10);
            return armourBoost;
        } else {
            return this.failedCast;
        }
    }
}