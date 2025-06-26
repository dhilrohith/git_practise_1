class Animal{
    constructor(name, sound){
        this.name = name
        this.sound=sound;
    }
}

class Dog extends Animal{
    constructor(name, sound){
        super(name, sound)
    }

    makeSound(){
        console.log(`The ${this.name}, ${this.sound}`);
    }
}

class Birds extends Animal{
    constructor(name, sound){
        super(name, sound)
    }

    makeSound(){
        console.log(`The ${this.name}, ${this.sound}`);
    }
}

const bird = new Birds("Birds", "Chirps");
const dog = new Dog("Dog", "Barks");

bird.makeSound();
dog.makeSound();