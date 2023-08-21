import {Hero} from "./Hero";
import {CharacterType} from "./CharacterType";
import {Heal} from "../abilities/priest/Heal";
import { BoostType } from "../boosts/BoostType";


export class Priest extends Hero {
    private heal :number;

    constructor(name: string) {
        super(CharacterType.Priest, name, 90, new Heal() , 4,20 );
        this.heal = 0;
        this.HP = 90;

    }


    public useAbility(): boolean {
        const castedAbility = this.ability.cast();
        this.boost = castedAbility;
        const maxHealth = 90;
        if (castedAbility.name != BoostType.none) {
            if (this.HP < (maxHealth - castedAbility.value) ) {
                this.HP += castedAbility.value;
            }else {
                this.HP = maxHealth;
            }
            return true
        }
        return false;

    }

}