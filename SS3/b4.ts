let strValue: string = "2";   // kiểu string
let numValue: number = 2;     // kiểu number

//@ts-ignore
console.log(strValue == numValue);   // true → vì so sánh lỏng, Ts/Js tự chuyển đổi kiểu
// @ts-ignore
console.log(strValue === numValue);  // false → vì so sánh chặt, khác kiểu nên sai
