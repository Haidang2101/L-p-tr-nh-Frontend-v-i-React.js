var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.speed = 0;
    }
    Vehicle.prototype.speedUp = function (amount) {
        if (amount > 0) {
            this.speed += amount;
            console.log("T\u0103ng t\u1ED1c th\u00EAm ".concat(amount, " km/h. T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i: ").concat(this.speed, " km/h"));
        }
    };
    Vehicle.prototype.slowDown = function (amount) {
        if (amount > 0) {
            this.speed -= amount;
            if (this.speed < 0)
                this.speed = 0;
            console.log("Gi\u1EA3m t\u1ED1c ".concat(amount, " km/h. T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i: ").concat(this.speed, " km/h"));
        }
    };
    Vehicle.prototype.stop = function () {
        this.speed = 0;
        console.log("D\u1EEBng ph\u01B0\u01A1ng ti\u1EC7n. T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i: ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
// 
var myCar = new Vehicle();
myCar.speedUp(50);
myCar.slowDown(20);
myCar.stop();
