var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}());
var allStudents = [];
var Classroom = /** @class */ (function () {
    function Classroom() {
        this.students = [];
    }
    Classroom.prototype.showStudents = function () {
        if (this.students.length === 0) {
            console.log("Lớp này chưa có học sinh.");
            return;
        }
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(function (s) {
            console.log("ID: ".concat(s.getId(), ", Name: ").concat(s.getName()));
        });
    };
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.addStudentInClass = function (id) {
        var index = allStudents.findIndex(function (s) { return s.getId() === id; });
        if (index !== -1) {
            var student = allStudents[index];
            if (student) {
                this.addStudent(student);
                allStudents.splice(index, 1);
                console.log("\u0110\u00E3 th\u00EAm h\u1ECDc sinh ".concat(student.getName(), " v\u00E0o l\u1EDBp."));
            }
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y h\u1ECDc sinh v\u1EDBi ID: ".concat(id, " trong danh s\u00E1ch t\u1EA5t c\u1EA3 h\u1ECDc sinh."));
        }
    };
    return Classroom;
}());
allStudents.push(new Student(1, "Dũng"));
allStudents.push(new Student(2, "Hà"));
allStudents.push(new Student(3, "Khánh"));
allStudents.push(new Student(4, "Minh"));
allStudents.push(new Student(5, "Lâm"));
allStudents.push(new Student(6, "Thành"));
var classA = new Classroom();
var classB = new Classroom();
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
