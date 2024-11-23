abstract class Vehicle {
    abstract startEngine(): string;
    move(): string {
        return "Vehicle is moving"
    }
}

class Car extends Vehicle{
    startEngine(): string {
        return "Car engine started"
    }
}

const myCar = new Car();
console.log(myCar.startEngine());
console.log(myCar.move());
