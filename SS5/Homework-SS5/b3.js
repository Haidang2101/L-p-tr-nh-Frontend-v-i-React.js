var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    Employee.prototype.printInfo = function () {
        console.log("Name: ".concat(this.name, ", Company: ").concat(this.company, ", Phone: ").concat(this.phone));
    };
    Employee.prototype.getCompany = function () {
        return this.company;
    };
    Employee.prototype.getPhone = function () {
        return this.phone;
    };
    return Employee;
}());
var employee = new Employee("John Doe", "Tech Corp", "123-456-7890");
employee.printInfo();
