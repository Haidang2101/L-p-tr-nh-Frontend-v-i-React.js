import React from "react";

const Calculation: React.FC = () => {
  const a = 10;
  const b = 10;

  const cong = (x: number, y: number): number => x + y;
  const tru = (x: number, y: number): number => x - y;
  const nhan = (x: number, y: number): number => x * y;
  const chia = (x: number, y: number): number => x / y;

  return (
    <div>
      <h2>Danh sách kết quả</h2>
      <ul>
        <li>
          {a} + {b} = {cong(a, b)}
        </li>
        <li>
          {a} - {b} = {tru(a, b)}
        </li>
        <li>
          {a} * {b} = {nhan(a, b)}
        </li>
        <li>
          {a} / {b} = {chia(a, b)}
        </li>
      </ul>
    </div>
  );
};

export default Calculation;
