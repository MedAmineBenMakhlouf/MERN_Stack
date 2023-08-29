class Ninja
{
    constructor(name,health,speed=3,strength=3)
    {
        this.name =name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    
    sayName()
    {
        console.log(`Ninja name is ${this.name}`)
        return this
    }
    showStats()
    {
        console.log(`Ninja name is ${this.name}\nhis strength equal to ${this.strength}\nhis speed is ${this.speed}\nand his health equal to ${this.health}`)
        // console.log(this)
        return this
    }

    drinkSake()
    {
        this.health+=10
        return this
    }
}
const AlanNinja = new Ninja("Alan",50)
// AlanNinja.sayName()
// AlanNinja.showStats()
// AlanNinja.drinkSake().showStats()

class Sensei extends Ninja
{
    constructor(name,health=200,speed=10,strength=10,wisdom=10)
    {
        super(name,health,speed,strength)
        this.wisdom = wisdom
    }
    speakWisdom()
    {
        this.drinkSake()
        return this
    }
}



// example output
const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
superSensei.speakWisdom();
// console.log(health);
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
