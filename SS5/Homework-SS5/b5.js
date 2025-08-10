var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 10);
console.log("Width: ".concat(rectangle.getWidth(), ", Height: ").concat(rectangle.getHeight()));
console.log("Area: ".concat(rectangle.calculateArea(), ", Perimeter: ").concat(rectangle.calculatePerimeter()));
rectangle.setWidth(7);
rectangle.setHeight(12);
console.log("Updated Width: ".concat(rectangle.getWidth(), ", Updated Height: ").concat(rectangle.getHeight()));
console.log("Updated Area: ".concat(rectangle.calculateArea(), ", Updated Perimeter: ").concat(rectangle.calculatePerimeter()));
