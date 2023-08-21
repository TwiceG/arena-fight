import {Weapon} from "./Weapon";
import {CharacterType} from "../heroes/CharacterType";

export class BattleAxe extends Weapon {
    constructor() {
        super("Battle Axe",CharacterType.Warrior,[12,15],92);
    }
}