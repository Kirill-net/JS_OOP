export class Character {
    health = 100;
    level = 1;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    levelUp() {
        if (this.health >0) {
        this.level +=1
        this.attack = (this.attack + (0.2*this.attack));
        this.defence = (this.defence + (0.2*this.defence));
        this.health = 100;
        }
        else {
            throw new Error("нельзя повысить левел умершего");
            
        }
    };
    damage(points) {
        if (this.health >=0) {
        this.health = this.health - (points * (1 - (this.defence / 100)))
        }
    };
};
