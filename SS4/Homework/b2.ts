const diemSinhVien: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];

const tongDiem: number = diemSinhVien.reduce((tong, diem) => tong + diem, 0);

const diemTrungBinh: number = parseFloat((tongDiem / diemSinhVien.length).toFixed(2));

console.log("Điểm trung bình:", diemTrungBinh);
