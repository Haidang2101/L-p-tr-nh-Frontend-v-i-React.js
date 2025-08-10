var Student = /** @class */ (function () {
    function Student(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    Student.prototype.displayInfo = function () {
        console.log("ID: ".concat(this.id, ", Age: ").concat(this.age, ", Email: ").concat(this.email));
    };
    return Student;
}());
var students = [];
students.push(new Student(1, 20, "a@gmail.com"));
students.push(new Student(2, 22, "b@gmail.com"));
students.push(new Student(3, 21, "c@gmail.com"));
students.forEach(function (student) {
    student.displayInfo();
});
