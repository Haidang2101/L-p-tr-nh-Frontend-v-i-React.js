abstract class Shape {
    constructor(protected name: string) {}

    getName(): string {
        return this.name; 
    }

    abstract getSize(): string; 
}

class Rectangle extends Shape {
    constructor(name: string, private width: number, private height: number) {
        super(name);
    }

    getSize(): string {
        return `Width: ${this.width}, Height: ${this.height}`; 
    }
}

const rectangle = new Rectangle("Rectangle", 10, 5);
console.log(rectangle.getName());
console.log(rectangle.getSize());
