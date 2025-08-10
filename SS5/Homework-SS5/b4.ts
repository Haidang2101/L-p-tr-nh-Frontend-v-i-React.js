class Vehicle {
    public name: string;         
    protected year: number;    
    private company: string;     
    public readonly id: number; 

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    public getCompany(): string {
        return this.company;
    }

    public getYear(): number {
        return this.year;
    }

    public printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }
}

const myVehicle = new Vehicle(1, "Model S", 2022, "Tesla");

myVehicle.printInfo();

console.log("Company:", myVehicle.getCompany());
console.log("Year:", myVehicle.getYear());


