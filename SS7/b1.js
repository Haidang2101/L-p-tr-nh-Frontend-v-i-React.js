var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    Employee.prototype.printInfo = function () {
        console.log("Name: ".concat(this.name));
        console.log("Company: ".concat(this.company));
        console.log("Phone: ".concat(this.phone));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, company, phone, teamSize) {
        var _this = _super.call(this, name, company, phone) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        console.log("Team Size: ".concat(this.teamSize));
    };
    return Manager;
}(Employee));
var emp = new Employee("Nguyễn Văn Nghĩa", "VinFast Corp", "0123456789");
emp.printInfo();
console.log("----");
var mgr = new Manager("Trần Thị Khánh Huyền", "Vinamilk Corp", "0987654321", 10);
mgr.printInfo();
