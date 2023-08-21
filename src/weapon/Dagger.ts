import {Weapon} from "./Weapon";
import {CharacterType} from "../heroes/CharacterType";


export class Dagger extends Weapon {
    constructor() {
        super("Dagger",CharacterType.Rouge,[4,5],98);
    }
}