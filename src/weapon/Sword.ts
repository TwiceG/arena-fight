import {Weapon} from "./Weapon";
import {CharacterType} from "../heroes/CharacterType";


export class Sword extends Weapon {
    constructor() {
        super("Sword",CharacterType.Rouge & CharacterType.Archer & CharacterType.Mage & CharacterType.Priest & CharacterType.Warrior,[8,12],90);
    }
}