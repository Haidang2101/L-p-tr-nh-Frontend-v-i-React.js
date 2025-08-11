// Interface IAnimal
interface IAnimal {
    name: string;
    age: number;
    category: string;
    sound(): string;
    getDetails(): string;
    move(): string;
    feed(): string;
}

// Abstract class Animal
abstract class Animal implements IAnimal {
    constructor(
        public name: string,
        private _age: number,
        public category: string,
        protected foodType: string
    ) {}

    get age() { return this._age; }
    set age(v: number) { if (v >= 0) this._age = v; }

    getDetails() {
        return `Tên: ${this.name}, Tuổi: ${this._age}, Loại: ${this.category}, Thức ăn: ${this.foodType}`;
    }

    abstract sound(): string;
    abstract move(): string;

    feed() { return `${this.name} đang ăn ${this.foodType}`; }
}

// Lớp con Mammal
class Mammal extends Animal {
    constructor(name: string, age: number, foodType: string, private furColor: string) {
        super(name, age, "Thú có vú", foodType);
    }
    sound() { return `${this.name} kêu gừ gừ`; }
    move() { return `${this.name} chạy bằng bốn chân`; }
}

// Lớp con Bird
class Bird extends Animal {
    constructor(name: string, age: number, foodType: string, private wingSpan: number) {
        super(name, age, "Chim", foodType);
    }
    sound() { return `${this.name} hót líu lo`; }
    move() { return `${this.name} bay với sải cánh ${this.wingSpan}m`; }
}

// Lớp con Reptile
class Reptile extends Animal {
    constructor(name: string, age: number, foodType: string, private venomous: boolean) {
        super(name, age, "Bò sát", foodType);
    }
    sound() { return `${this.name} rít rít`; }
    move() { return `${this.name} bò chậm${this.venomous ? " và có độc" : ""}`; }
}

// Lớp Zookeeper
class Zookeeper {
    careForAnimal(animal: Animal) {
        return `Chăm sóc ${animal.name}: tắm rửa, kiểm tra sức khỏe`;
    }
    report(animal: Animal) {
        return `Báo cáo: ${animal.getDetails()}, Ăn uống: ${animal.feed()}`;
    }
}

// Demo
const zoo: Animal[] = [
    new Mammal("Sư tử", 5, "Ăn thịt", "Vàng"),
    new Bird("Đại bàng", 3, "Ăn thịt", 2.5),
    new Reptile("Rắn hổ mang", 2, "Ăn thịt", true)
];

for (let a of zoo) {
    console.log(a.getDetails());
    console.log(a.sound());
    console.log(a.move());
    console.log(a.feed());
    console.log("---");
}
