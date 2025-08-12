class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, id: string, speed: number = 0) {
        this.name = name;
        this.id = id;
        this.speed = speed;
    }

    public slowDown(amount: number): void {
        this.speed = Math.max(0, this.speed - amount); 
    }

    public speedUp(amount: number): void {
        this.speed += amount;
    }

    public showSpeed(): void {
        console.log(`Current speed: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, id: string, gear: number, speed: number = 0) {
        super(name, id, speed);
        this.gear = gear;
    }

    public showInfo(): void {
        console.log(`Bicycle Info:`);
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Speed: ${this.speed} km/h`);
        console.log(`Gear: ${this.gear}`);
    }
}

const myBike = new Bicycle("Mountain Bike", "B123", 18);

myBike.speedUp(15);
myBike.showSpeed(); 

myBike.slowDown(5);
myBike.showSpeed();

myBike.showInfo();
