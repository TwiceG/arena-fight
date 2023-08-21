import {Hero} from "./Hero";
import {CharacterType} from "./CharacterType";
import {FireStorm} from "../abilities/mage/FireStorm";
import { BoostType } from "../boosts/BoostType";



export class Mage extends Hero {
    

    constructor(name: string) {
        super(CharacterType.Mage,name, 70, new FireStorm(), 1, 5 );

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