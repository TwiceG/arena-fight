import { CharacterType } from ".././heroes/CharacterType";
import {Helper} from "../utility/Helper";


export abstract class Weapon {


    private _name :string;
    private _usedBy :CharacterType;
    private _damage :[number,number];
    private _hitChance :number;

    constructor(name:string, usedBy:CharacterType, damage:[min:number,max:number], hitChance:number) {
        this._name = name;
        this._usedBy = usedBy;
        this._damage = damage;
        this._hitChance = hitChance;
    }

    public attack() :number {
        if (Helper.calcSuccess(this.hitChance)) {
            const weaponDmg = Helper.calcWeaponDmg(this.damage[0], this.damage[1])
            return weaponDmg;
        }
        return 0;
    }

    get damage(): [number, number] {
        return this._damage;
    }
    get usedBy(): CharacterType {
        return this._usedBy;
    }
    get hitChance(): number {
        return this._hitChance;
    }
    get name(): string {
        return this._name;
    }

}