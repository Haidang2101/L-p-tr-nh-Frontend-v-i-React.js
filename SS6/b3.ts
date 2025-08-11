// Abstract class Shape
abstract class Shape {
    constructor(protected name: string) {}

    // Method thông thường: có sẵn code
    getName(): string {
        return this.name;
    }

    // Abstract method: không có code, bắt buộc lớp con phải viết
    abstract getSize(): string;
}

// Rectangle kế thừa Shape
class Rectangle extends Shape {
    constructor(name: string, private width: number, private height: number) {
        super(name);
    }

    // Bắt buộc phải implement getSize()
    getSize(): string {
        return `Width: ${this.width}, Height: ${this.height}`;
    }
}

// Circle kế thừa Shape
class Circle extends Shape {
    constructor(name: string, private radius: number) {
        super(name);
    }

    getSize(): string {
        return `Radius: ${this.radius}, Area: ${(Math.PI * this.radius * this.radius).toFixed(2)}`;
    }
}

// Demo
const shapes: Shape[] = [
    new Rectangle("Rectangle", 10, 5),
    new Circle("Circle", 7)
];

for (const s of shapes) {
    console.log("Tên:", s.getName()); // dùng method thường
    console.log("Kích cỡ:", s.getSize()); // dùng method trừu tượng (được lớp con cài đặt)
}
