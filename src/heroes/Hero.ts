import { CharacterType } from "./CharacterType";
import { Weapon } from ".././weapon/Weapon";
import {Ability} from "../abilities/Ability";
import {Sword} from "../weapon/Sword";
import { Boost } from "../boosts/Boost";
import { BoostType } from "../boosts/BoostType";


export abstract class Hero {



    private _type :CharacterType;
    private _name :string;
    private _HP :number;
    private _ability :Ability;
    private _armour :number;
    private _weapon :Weapon;
    private _evasion :number;
    private _boost :Boost;

    constructor(type:CharacterType, name:string, HP:number, ability:Ability, armour:number, evasion:number) {
        this._type = type;
        this._name = name;
        this._HP = HP;
        this._ability = ability;
        this._armour = armour;
        this._evasion = evasion;
        this._weapon = new Sword();
        this._boost = new Boost(BoostType.none, 0);
    }

    public abstract useAbility(): boolean; //TODO make it only protected (just Heal is different)

    public equipWeapon(weapon:Weapon) :void {
        this._weapon = weapon;
    }

    get boost(): Boost {
        return this._boost;
    }
    set boost(boost :Boost) {
        this._boost = boost;
    }
    get evasion(): number {
        return this._evasion;
    }
    get name(): string {
        return this._name;
    }
    get armour(): number {
        return this._armour;
    }
    get HP(): number {
        return this._HP;
    }
    set HP(value: number) {
        this._HP = value;
    }
    get ability(): Ability {
        return this._ability;
    }
    get weapon(): Weapon {
        return this._weapon;
    }
    get type(): CharacterType {
        return this._type;
    }


}