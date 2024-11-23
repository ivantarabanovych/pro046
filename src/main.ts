interface ElectricVehicle{
    chargeBattery(): string;
}

abstract class Vehicle{
    abstract startEngine(): string;
    move():string{
        return "Vehicle is moving";
    }
}

class ElectricCar extends Vehicle implements ElectricVehicle{
    startEngine(): string {
        return "Electric car engine started"
    }

    chargeBattery(): string {
        return "Electric car battery is charging"
    }
}

const myElectricCar = new ElectricCar();

console.log(myElectricCar.startEngine());
console.log(myElectricCar.move());
console.log(myElectricCar.chargeBattery());


