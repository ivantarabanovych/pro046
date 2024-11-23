"use strict";
class Vehicle {
    move() {
        return "Vehicle is moving";
    }
}
class ElectricCar extends Vehicle {
    startEngine() {
        return "Electric car engine started";
    }
    chargeBattery() {
        return "Electric car battery is charging";
    }
}
const myElectricCar = new ElectricCar();
console.log(myElectricCar.startEngine());
console.log(myElectricCar.move());
console.log(myElectricCar.chargeBattery());
