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
        return this
    }

    drinkSake()
    {
        this.health+=10
        return this
    }
}
const AlanNinja = new Ninja("Alan",50,30)
AlanNinja.sayName()
AlanNinja.showStats()
AlanNinja.drinkSake().showStats()