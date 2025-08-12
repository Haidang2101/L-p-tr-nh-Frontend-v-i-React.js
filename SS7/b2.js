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
var Vehicle = /** @class */ (function () {
    function Vehicle(name, id, speed) {
        if (speed === void 0) { speed = 0; }
        this.name = name;
        this.id = id;
        this.speed = speed;
    }
    Vehicle.prototype.slowDown = function (amount) {
        this.speed = Math.max(0, this.speed - amount);
    };
    Vehicle.prototype.speedUp = function (amount) {
        this.speed += amount;
    };
    Vehicle.prototype.showSpeed = function () {
        console.log("Current speed: ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(name, id, gear, speed) {
        if (speed === void 0) { speed = 0; }
        var _this = _super.call(this, name, id, speed) || this;
        _this.gear = gear;
        return _this;
    }
    Bicycle.prototype.showInfo = function () {
        console.log("Bicycle Info:");
        console.log("Name: ".concat(this.name));
        console.log("ID: ".concat(this.id));
        console.log("Speed: ".concat(this.speed, " km/h"));
        console.log("Gear: ".concat(this.gear));
    };
    return Bicycle;
}(Vehicle));
var myBike = new Bicycle("Mountain Bike", "B123", 18);
myBike.speedUp(15);
myBike.showSpeed();
myBike.slowDown(5);
myBike.showSpeed();
myBike.showInfo();
