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
}
const myCar = new Car();
console.log(myCar.startEngine());
console.log(myCar.move());
