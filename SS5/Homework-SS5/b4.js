var Vehicle = /** @class */ (function () {
    function Vehicle(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    Vehicle.prototype.getCompany = function () {
        return this.company;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.printInfo = function () {
        console.log("ID: ".concat(this.id));
        console.log("Name: ".concat(this.name));
        console.log("Year: ".concat(this.year));
        console.log("Company: ".concat(this.company));
    };
    return Vehicle;
}());
var myVehicle = new Vehicle(1, "Model S", 2022, "Tesla");
myVehicle.printInfo();
console.log("Company:", myVehicle.getCompany());
console.log("Year:", myVehicle.getYear());
