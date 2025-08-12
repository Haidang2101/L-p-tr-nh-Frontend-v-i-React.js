abstract class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    abstract displayInfo(): void;
}

class Student extends Person {
    private id: string; 

    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log(`Sinh viên: ${this.name}, Mã SV: ${this.id}`);
    }
}

class Teacher extends Person {
    private subject: string; 

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`Giáo viên: ${this.name}, Môn: ${this.subject}`);
    }
}

const sv: Person = new Student("Nguyễn Hải Đăng", "SV001");
const gv: Person = new Teacher("Trần Quốc Đạt", "Lập trình TypeScript");

sv.displayInfo(); 
gv.displayInfo(); 
