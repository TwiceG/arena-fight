import {Hero} from "./Hero";
import {CharacterType} from "./CharacterType";
import {Dodge} from "../abilities/rouge/Dodge";
import { BoostType } from "../boosts/BoostType";



export class Rouge extends Hero {
    private evasionBoost :number;

    constructor(name: string) {
        super(CharacterType.Rouge,name, 80, new Dodge() , 3,30 );
        this.evasionBoost = 0;

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