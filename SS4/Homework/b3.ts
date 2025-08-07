type Student = {
  name: string;
  age: number;
  email: string;
};

function gioiThieu(sinhVien: Student): void {
  console.log(
    `Tên tôi là ${sinhVien.name}, tôi ${sinhVien.age} tuổi và email của tôi là ${sinhVien.email}.`
  );
}

const sinhVien1: Student = {
  name: "Nguyễn hải Đăng",
  age: 22,
  email: "Haidang@gmail.com"
};

gioiThieu(sinhVien1);
