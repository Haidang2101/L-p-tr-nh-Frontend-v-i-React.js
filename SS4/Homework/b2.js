var diemSinhVien = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
var tongDiem = diemSinhVien.reduce(function (tong, diem) { return tong + diem; }, 0);
var diemTrungBinh = parseFloat((tongDiem / diemSinhVien.length).toFixed(2));
console.log("Điểm trung bình:", diemTrungBinh);
