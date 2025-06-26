class Vechicle{
    #name;

    constructor(name, maxSpeed){
        this.#name = name,
        this.maxSpeed = maxSpeed
    }

    startEngine(fuelType){
        console.log(`${this.#name} starts with ${fuelType}`)
    }

    getName(){
        return this.#name;
    }
}

class Car extends Vechicle{
    constructor(name, maxSpeed, fuelType){
        super(name, maxSpeed);
        this.fuelType = fuelType
    }

    startEngine(){
        console.log(`${this.getName()} starts with ${this.fuelType} and max speed ${this.maxSpeed}`)
    }
}

class Bus extends Vechicle{
    constructor(name, maxSpeed, passengerCount){
        super(name, maxSpeed);

        this.passengerCount = passengerCount;
    }

    startEngine(){
        console.log(`${this.getName()} engine started, can carry ${this.passengerCount} passengers`)
    }
}

class Truck extends Vechicle{
    constructor(name, maxSpeed, maxLoad){
        super(name, maxSpeed);

        this.maxLoad = maxLoad;
    }

    #logStart(){
        console.log(`${this.getName()} started, max load: ${this.maxLoad}Kg`);
    }

    startEngine(){
        this.#logStart();
    }

}

const car = new Car("Car", 160, "Petrol");
 car.startEngine();

 const bus = new Bus("Bus", 180, 60);
bus.startEngine();

const truck = new Truck("Truck", 220, 1000);
truck.startEngine();