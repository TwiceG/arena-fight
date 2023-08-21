import {Weapon} from "./Weapon";
import {CharacterType} from "../heroes/CharacterType";


export class WarHammer extends Weapon {
    constructor() {
        super("War Hammer",CharacterType.Priest,[10,15],93);
    }
}