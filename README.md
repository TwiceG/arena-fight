# Arena fight

## About

This project is a node backend project using typescript and is about a CLI fighting between different heroes and abilities.

## Table of contents

- [Setup](#setup)
- [Character stats](#character-stats)
- [Contact](#contact)

## Prerequisites

Before you begin, ensure you have met the following requirement:

- Node.js v19.8.1(Developed and tested with this version)

## Setup

1. Change folder to src :

- ```
  cd src
  ```

2. Install nodeJs :

- ```
  npm install
  ```

- Now you can setup your heroes to fight : - in index.ts file you can change line 13 and 14 to set player1 and player2
  you can choose Characters between:

  - [Warrior](#warrior)
  - [Mage](#mage)
  - [Rouge](#rouge)
  - [Archer](#archer)
  - [Priest](#priest)

  All characters has its own benefits and abilities.

  - [Character stats](#character-stats)

- so just replace each line with :
- `const player1  = new Archer("Bazsi");`
  replace Archer with your chosen character and in brackets ("CharacterName") is your characters name.

  _On each change of players you need to run step 3. `tsc` then step 4. `node index.js`_

3. Transpile typsescript to javascript :

- ```
  tsc
  ```

4. Change directory and start the fight:

- ```
  cd output
  ```

- ```
  node index.js
  ```

### Character stats

#### Warrior

- HP: 100
- Armor: 5
- Evasion: 20
- Ability: Armour &rarr; gives 10 armor if casted successfully.

_Weapon:_ Battle Axe(12-15) 92% hitchance

#### Mage

- HP: 70
- Armor: 1
- Evasion: 5
- Ability: Firestorm &rarr; gives 10 attack boost if casted successfully.

_Weapon:_ Wand(9-15) 95% hitchance

#### Rouge

- HP: 80
- Armor: 3
- Evasion: 30
- Ability: Dodge &rarr; gives 100% evasion so you dodge the enemy's next attack if it casted succesfully.

_Weapon:_ Dagger(4-5) 98% hitchance

#### Archer

- HP: 80
- Armor: 2
- Evasion: 15
- Ability: Headshot &rarr; gives 15 attack boost if it casted successfully.

_Weapon:_ Bow(7-12) 89% hitchance

#### Priest

- HP: 90
- Armor: 4
- Evasion: 20
- Ability: Heal &rarr; it heals for 10 HP if it casted successfully, you can't overheal.

_Weapon:_ War Hammer(10-15) 93% hitchance

- All abilities has a 10% chance to cast.

## Contact

If you have any questions feel free to get touch with me on: *ggabor.gabor25@gmail.com*
