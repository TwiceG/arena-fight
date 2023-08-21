import {Hero} from "./Hero";
import {CharacterType} from "./CharacterType";
import {Armour} from "../abilities/warrior/Armour";
import { BoostType } from "../boosts/BoostType";



export class Warrior extends Hero {
    private armourBoost :number;

    constructor(name: string) {
        super(CharacterType.Warrior,name, 100, new Armour() , 5, 20 );
        this.armourBoost = 0;

    }


    public useAbility(): boolean {
        const castedAbility = this.ability.cast();
        this.boost = castedAbility;
        if (this.boost.name != BoostType.none){
            return true;
        } 
        return false
    }

}