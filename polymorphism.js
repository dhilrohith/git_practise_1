class Animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }

    makeSound(){
        console.log(`The ${this.name} ${this.sound}`);
    }
}

class Dog extends Animal{
    constructor(name, sound, food){
        super(name, sound);

        this.food = food;
    }

    eat(){
        console.log(`${this.name} eats ${this.food}`)
    }
}

class Birds extends Dog{
    constructor(name, sound, food){
        super(name, sound, food)
    }
}

const birds = new Birds("Bird", "Chirps", "Chilli");
birds.eat();