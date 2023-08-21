import {Hero} from "./Hero";
import {CharacterType} from "./CharacterType";
import {HeadShot} from "../abilities/archer/HeadShot";
import { Ability } from '../abilities/Ability';
import { BoostType } from "../boosts/BoostType";



export class Archer extends Hero {
    private dmgBoost :number;


    constructor(name: string) {
        super(CharacterType.Archer,name, 80, new HeadShot() , 2,15 );
        this.dmgBoost = 0;

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