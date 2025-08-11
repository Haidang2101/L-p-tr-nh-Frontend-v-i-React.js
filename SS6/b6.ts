class Student {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}

let allStudents: Student[] = [];

class Classroom {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  showStudents(): void {
    if (this.students.length === 0) {
      console.log("Lớp này chưa có học sinh.");
      return;
    }
    console.log("Danh sách học sinh trong lớp:");
    this.students.forEach((s) => {
      console.log(`ID: ${s.getId()}, Name: ${s.getName()}`);
    });
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addStudentInClass(id: number): void {
    const index = allStudents.findIndex((s) => s.getId() === id);
    if (index !== -1) {
      const student = allStudents[index];
      if (student) {
        this.addStudent(student);
        allStudents.splice(index, 1);
        console.log(`Đã thêm học sinh ${student.getName()} vào lớp.`);
      }
    } else {
      console.log(
        `Không tìm thấy học sinh với ID: ${id} trong danh sách tất cả học sinh.`
      );
    }
  }
}

allStudents.push(new Student(1, "Dũng"));
allStudents.push(new Student(2, "Hà"));
allStudents.push(new Student(3, "Khánh"));
allStudents.push(new Student(4, "Minh"));
allStudents.push(new Student(5, "Lâm"));
allStudents.push(new Student(6, "Thành"));

const classA = new Classroom();
const classB = new Classroom();

classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

console.log("\n--- Lớp A ---");
classA.showStudents();

console.log("\n--- Lớp B ---");
classB.showStudents();