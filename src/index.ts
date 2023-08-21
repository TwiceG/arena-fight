import { Arena } from "./Arena.js";
import { Warrior } from "./heroes/Warrior.js";
import { Mage } from "./heroes/Mage.js";
import { Hero } from "./heroes/Hero.js";
import { Rouge } from "./heroes/Rouge.js";
import { Archer } from "./heroes/Archer.js";
import { Priest } from "./heroes/Priest.js";



const readline = require("readline");

function promptUser(question: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise<string>(resolve => {  
        rl.question(question, (answer: string) => { 
            rl.close();
            resolve(answer);
        });
    });
}

async function playGame(arena: Arena, player1: Hero, player2: Hero) {
    arena.prepareForFight(player1);
    console.log(player1.name + " equipped " + player1.weapon.name + " weapon. \n" );
    arena.prepareForFight(player2);
    console.log(player2.name + " equipped " + player2.weapon.name + " weapon. \n" );

    console.log("Starting the game...");

    while (player1.HP > 0 && player2.HP > 0) {
        console.log("New round starting... \n\n");

        const player1Turn = arena.fight(player1, player2);
        console.log(player1Turn);

        await promptUser("Press Enter to continue...\n");

        const player2Turn = arena.fight(player2, player1);
        console.log(player2Turn);

        await promptUser("Press Enter to continue...\n");
    }

    const winner = Math.max(player1.HP, player2.HP);
    return player1.HP === winner ? `The winner is ${player1.name}` : `The winner is ${player2.name}`;
}

async function main() {
    const arena = new Arena();
    const player1 = new Priest("Misa");
    const player2 = new Warrior("TwiceG");

    const result = await playGame(arena, player1, player2);
    console.log(result);
}

// Call the main function using an immediately invoked async function
(async () => {
    await main();
})();
