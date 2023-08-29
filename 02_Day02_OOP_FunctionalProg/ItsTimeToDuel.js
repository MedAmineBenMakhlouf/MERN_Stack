class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(targetUnit) {
        targetUnit.resilience -= this.power;
    }
}

class Card extends Unit{
    constructor(name, cost, text, stat, magnitude) {
        super((name, cost, power, resilience))
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(targetUnit) {
        if(this.stat=="resilience")
        {}
            targetUnit.resilience += this.magnitude;
            return this
        }

    
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithmCard = new Card("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejectionCard = new Card("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgrammingEffect = new Card("Pair Programming", 3, "increase target's power by 2", "power", 2);


console.log("Before playing card:", redBeltNinja);
console.log("Before playing card:", blackBeltNinja);
hardAlgorithmCard.play(redBeltNinja);
console.log("After playing card:", redBeltNinja);
unhandledPromiseRejectionCard.play(redBeltNinja);
console.log("After playing card:", redBeltNinja);
pairProgrammingEffect.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)
console.log("After playing card:", blackBeltNinja);



