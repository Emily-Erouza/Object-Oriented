class Vehicle {
    constructor(manufacturer, model, wheelCount, engineSize, fuelTankSize) {
        this.wheelCount = wheelCount;
        this.engineSize = engineSize;
        this.manufacturer = manufacturer;
        this.model = model;
        this.fuelTankSize = fuelTankSize;
        this.fuelAmount = 0;
    }

    fillTank() {
        this.fuelAmount = this.fuelTankSize;
    }

    drive() {
        if (this.fuelAmount > 0) {
            this.fuelAmount--;
            console.log(this.getManufacturerAndModel() + ": Vroom vroom");
        } else {
            console.log(this.manufacturerAndModel + ": Can't move! No fuel!!");
        }
    }

    getManufacturerAndModel() {
        return `${this.manufacturer} ${this.model}`;
    }

    get manufacturerAndModel() {
        return `${this.manufacturer} ${this.model}`;
    }
}

// DRY - Don't Repeat Yourself

class Car extends Vehicle {
    constructor(manufacturer, model, engineSize, fuelTankSize) {
        super(manufacturer, model, 4, engineSize, fuelTankSize);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, model, engineSize, fuelTankSize) {
        super(manufacturer, model, 2, engineSize, fuelTankSize);
    }
}

let toyotaHilux = new Car('Toyota', 'Hilux', 2.4, 40);
toyotaHilux.fillTank();
toyotaHilux.drive();

let kawasakiKLR = new Motorcycle('Kawasaki', 'KLR', 650, 20);
kawasakiKLR.drive();
