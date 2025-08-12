abstract class Animal {
    public name: string; 
    constructor(name: string) {
        this.name = name;
    }

    abstract makeNoise(): void;

    printName(): void {
        console.log(`Tên: ${this.name}`);
    }
}

class Cat extends Animal {
    makeNoise(): void {
        console.log("meo meo");
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log("gâu gâu");
    }
}

const cat: Animal = new Cat("Mèo rừng châu phi");
const dog: Animal = new Dog("Cậu Vàng");

cat.printName(); 
cat.makeNoise();

dog.printName();
dog.makeNoise();
