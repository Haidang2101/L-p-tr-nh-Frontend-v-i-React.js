import React from "react";

const UserInfo: React.FC = () => {
  // Tạo đối tượng user
  const user = {
    hoTen: "Nguyễn Văn A",
    gioiTinh: "Nam",
    ngaySinh: "06/03/2024",
    email: "nva@gmail.com",
    diaChi: "Thanh Xuân, Hà Nội"
  };

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>
          Họ và tên: <b>{user.hoTen}</b>
        </li>
        <li>
          Giới tính: <b>{user.gioiTinh}</b>
        </li>
        <li>
          Ngày sinh: <b>{user.ngaySinh}</b>
        </li>
        <li>
          Email: <b>{user.email}</b>
        </li>
        <li>
          Địa chỉ: <b>{user.diaChi}</b>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
