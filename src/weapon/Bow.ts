import {Weapon} from "./Weapon";
import {CharacterType} from "../heroes/CharacterType";


export class Bow extends Weapon {
    constructor() {
        super("Bow",CharacterType.Archer,[7,12],89);
    }
}