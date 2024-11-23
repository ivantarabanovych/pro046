"use strict";
class Vehicle {
    move() {
        return "Vehicle is moving";
    }
}
class Car extends Vehicle {
    startEngine() {
        return "Car engine started";
    }
    drive() {
        console.log("Car is driving");
    }
}
class Bicycle {
    drive() {
        console.log("Bicycle is being ridden");
    }
}
const myCar = new Car();
const myBicycle = new Bicycle();
myCar.drive();
myBicycle.drive();
