class Fighter {
    constructor(name, health, attackPoint, defensePoint) {
        this.name = name;
        this.health = health;
        this.attackPoint = attackPoint;
        this.defensePoint = defensePoint;


    }

    isAlive() {
        return this.health > 0;
    }
    attack(opponent) {
        console.log(`${this.name} attack ${opponent.name}`)
        let atkValue = Math.random() * this.attackPoint;
        let defValue = Math.random() * opponent.defensePoint;
        if (atkValue > defValue) {
            opponent.takeDamage(Math.round(atkValue - defValue));
            if(opponent.isAlive()){
                console.log("Même pas mal ")
            }else{
                console.log("Dead dédo ")
            }

        } else {
            console.log(this.name + " est un looser");
        }


    }

    takeDamage(amount) {
        this.health -= amount
        return console.log(`${this.name} prend ${amount}, il lui reste ${this.health} `);



    }
}

let fighter1 = new Fighter("Rene", 50, 10, 15);
let fighter2 = new Fighter("Bernard", 50, 14, 12);


while (fighter1.isAlive() && fighter2.isAlive()){
    fighter1.attack(fighter2);
    if(fighter2.isAlive())
    fighter2.attack(fighter1);

}
