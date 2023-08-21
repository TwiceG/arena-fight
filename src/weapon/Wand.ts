import {Weapon} from "./Weapon";
import {CharacterType} from "../heroes/CharacterType";


export class Wand extends Weapon {
    constructor() {
        super("Wand",CharacterType.Mage,[9,15],97);
    }
}