interface Drivable {
    drive(): void;
}

abstract class Vehicle {
    abstract startEngine(): string
    
    move(): string{
        return "Vehicle is moving"
    }
}

class Car extends Vehicle implements Drivable{
    startEngine(): string {
        return "Car engine started"
    }

    drive(): void {
        console.log("Car is driving");
    }
}

class Bicycle implements Drivable{
    drive(): void {
        console.log("Bicycle is being ridden");
    }
}

const myCar = new Car();
const myBicycle = new Bicycle();

myCar.drive();
myBicycle.drive();
