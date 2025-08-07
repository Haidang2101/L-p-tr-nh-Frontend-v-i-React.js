type Score = number | string;

type Subject = {
  subjectName: string;
  score: Score;
};

type Student = {
  name: string;
  age: number;
  subjects: Subject[];
};

let students: Student[] = [];

function isNumericScore(score: Score): score is number {
  return typeof score === 'number';
}

function convertScore(score: Score): number {
  if (isNumericScore(score)) return score;
  switch (score.toUpperCase()) {
    case 'A': return 10;
    case 'B': return 8;
    case 'C': return 6;
    case 'D': return 4;
    default: return 0;
  }
}

function addStudent(student: Student): void {
  students.push(student);
}

function updateStudent(name: string, updatedData: Partial<Student>): void {
  const student = students.find(s => s.name === name);
  if (student) {
    if (updatedData.name !== undefined) student.name = updatedData.name;
    if (updatedData.age !== undefined) student.age = updatedData.age;
    if (updatedData.subjects !== undefined) student.subjects = updatedData.subjects;
  } else {
    console.log("Không tìm thấy sinh viên cần cập nhật.");
  }
}

function deleteStudent(name: string): void {
  students = students.filter(s => s.name !== name);
}

function calculateAverage(student: Student): number {
  const total = student.subjects.reduce((sum, subject) => sum + convertScore(subject.score), 0);
  return student.subjects.length ? total / student.subjects.length : 0;
}

function classifyStudent(student: Student): string {
  const avg = calculateAverage(student);
  if (avg >= 8.5) return 'Giỏi';
  if (avg >= 6.5) return 'Khá';
  if (avg >= 5) return 'Trung bình';
  return 'Yếu';
}

addStudent({
  name: 'Nguyễn Văn A',
  age: 20,
  subjects: [
    { subjectName: 'Toán', score: 9 },
    { subjectName: 'Lý', score: 'B' },
    { subjectName: 'Hóa', score: 'A' },
  ]
});

addStudent({
  name: 'Trần Thị B',
  age: 21,
  subjects: [
    { subjectName: 'Văn', score: 'C' },
    { subjectName: 'Sử', score: 5 },
  ]
});

students.forEach(sv => {
  const avg = calculateAverage(sv).toFixed(2);
  const rank = classifyStudent(sv);
  console.log(`${sv.name} - Tuổi: ${sv.age} - ĐTB: ${avg} - Xếp loại: ${rank}`);
});
