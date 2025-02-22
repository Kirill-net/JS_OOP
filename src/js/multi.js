import { Character } from './character' 
export class Multi extends Character {
    constructor(name, type) {
    super(name, type);
    if (type === 'Bowman' || type === 'Undead') {
        this.attack = 25;
        this.defence = 25;
        }
    if (type === 'Swordsman'|| type === 'Zombie') {
        this.attack = 40;
        this.defence = 10;
        }
    if (type === 'Magician'|| type === 'Daemon') {
        this.attack = 10;
        this.defence = 40;
        }
    }
};