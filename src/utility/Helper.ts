

export class Helper {
    public static calcSuccess(percent:number) :boolean {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        return randomNumber < percent;
    }
    public static calcWeaponDmg(min:number,max:number) :number {
        return  Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static getRandomNumber(min:number,max:number) :number {
        return  Math.floor(Math.random() * (max - min + 1)) + min;
    }
    public static calcHitDmg(dmg:number, armour:number) {
        return Math.floor(dmg - (armour/3));
    }
}