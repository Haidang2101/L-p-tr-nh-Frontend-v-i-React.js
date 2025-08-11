interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        const area = (Math.PI * this.radius * this.radius).toFixed(2);
        return parseFloat(area);
    }

    calculatePerimeter(): number {
        const perimeter = (2 * Math.PI * this.radius).toFixed(2);
        return parseFloat(perimeter);
    }
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const shapes: Geometry[] = [
    new Circle(10),
    new Rectangle(20, 30)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.calculateArea()}`);
    console.log(`Perimeter: ${shape.calculatePerimeter()}`);
});