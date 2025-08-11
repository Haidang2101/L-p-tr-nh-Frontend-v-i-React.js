var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        var area = (Math.PI * this.radius * this.radius).toFixed(2);
        return parseFloat(area);
    };
    Circle.prototype.calculatePerimeter = function () {
        var perimeter = (2 * Math.PI * this.radius).toFixed(2);
        return parseFloat(perimeter);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var shapes = [
    new Circle(10),
    new Rectangle(20, 30)
];
shapes.forEach(function (shape) {
    console.log("Area: ".concat(shape.calculateArea()));
    console.log("Perimeter: ".concat(shape.calculatePerimeter()));
});
