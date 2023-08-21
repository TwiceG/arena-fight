import { Hero } from './heroes/Hero';
import {BattleAxe} from "./weapon/BattleAxe";
import {Wand} from "./weapon/Wand";
import {Weapon} from "./weapon/Weapon";
import {Dagger} from "./weapon/Dagger";
import {Bow} from "./weapon/Bow";
import {Sword} from "./weapon/Sword";
import {WarHammer} from "./weapon/WarHammer";
import {Helper} from "./utility/Helper";
import { Boost } from './boosts/Boost';
import { BoostType } from './boosts/BoostType';

export class Arena {
    private heroes :Hero[];
    private weapons :Weapon[];

    constructor() {
        this.heroes = [];
        this.weapons = [];
        this.weapons.push(new BattleAxe());
        this.weapons.push(new Bow());
        this.weapons.push(new Dagger());
        this.weapons.push(new Sword());
        this.weapons.push(new Wand());
        this.weapons.push(new WarHammer());
    }

    public addHeroToArena(hero :Hero) :void {
        this.heroes.push(hero);
    }

    public prepareForRandomWeaponFight(hero :Hero) :void {
        this.addHeroToArena(hero);
        const randomWeapon =  Helper.getRandomNumber(1,this.weapons.length)
        hero.equipWeapon(this.weapons[randomWeapon]);

    }

    public prepareForFight(hero :Hero) :void {
        this.addHeroToArena(hero);
        this.weapons.forEach(weapon => {
            for (let i = 0; i < this.weapons.length; i++) {
                if(weapon.usedBy === hero.type) {
                    hero.equipWeapon(weapon);
                    break;
                }
                
            }
        });
    }

    private calcHit(player1:Hero, player2:Hero) :number {
        let p1AttackDmg = 0;
        let p2Armour = player2.armour;
        if (player1.boost.name === BoostType.dmgBoost) {
            p1AttackDmg += player1.weapon.attack() + player1.boost.value;
        }else {
        p1AttackDmg += player1.weapon.attack();
        }
        if(player1.weapon.usedBy === player1.type){
            if(player2.boost.name === BoostType.armourBoost) {
                p2Armour += player2.boost.value;
            }
            const p1Hit = Helper.calcHitDmg(p1AttackDmg, p2Armour)
            return p1Hit;
        }
        return 0;
    }

    private dodgeSuccess(player:Hero): boolean {
        if (player.boost.name === BoostType.evasionBoost) {
            return true;
        }
        return Helper.calcSuccess(player.evasion);

    }

    private usageOfAbility(player: Hero, boostType: BoostType) :string{

        //TODO shorten
        let abilityResult = "";
        switch (boostType) {
            case BoostType.dmgBoost:
                abilityResult += `${player.name} cast ${player.ability.name} \n\n`
                break;
            case BoostType.evasionBoost:
                abilityResult += `${player.name} cast ${player.ability.name} \n\n`
                break;
            case BoostType.armourBoost:
                abilityResult += `${player.name} cast ${player.ability.name} \n\n`
                break;
            case BoostType.none:
                abilityResult += `${player.name} failed to cast ${player.ability.name} \n\n`
        }
        return abilityResult;
    }

    private playerTurn(player1:Hero, player2:Hero):string {
        let turnResult = `${player1.name} HP: ${player1.HP} \n${player2.name} HP: ${player2.HP} \n\n`;
        player1.useAbility();
        player2.useAbility();
        if(player1.boost.name != BoostType.dmgBoost) {
            turnResult += this.usageOfAbility(player1, player1.boost.name);
        }
        turnResult += this.usageOfAbility(player2, player2.boost.name);

        turnResult += `${player2.name} tries to attack \n`
        const p2Hit = this.calcHit(player2,player1);
        if (p2Hit > 0) {
            if(this.dodgeSuccess(player1)){
                turnResult += player1.name + " dodged the attack! \n\n";
            } else {
                turnResult += player2.name + " attacked successfully! \n";
                turnResult += player2.name + ` hit(${p2Hit}) dmg to ` + player1.name + ` (${player1.HP} - ${p2Hit})`  + "\n\n";
                player1.HP -= p2Hit;
            }
        } else {
            turnResult += player2.name + ` missed with ${player2.weapon.name} weapon! \n`
        }
        return turnResult;
    }
    
    public async delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public fight(player1 :Hero, player2 :Hero) :string {
        let roundResult = "";

        const playerTurn = this.playerTurn(player1,player2);

        roundResult += playerTurn;

        return roundResult;
    }
}