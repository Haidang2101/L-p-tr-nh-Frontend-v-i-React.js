function handleUnionType(input: string | number): void {
  if (typeof input === "string") {
    console.log(`${input.length} ký tự`);
  } else if (typeof input === "number") {
    if (input % 2 === 0) {
      console.log("Đây là số chẵn");
    } else {
      console.log("Đây là số lẻ");
    }
  } else {
    console.log("Kiểu dữ liệu không hợp lệ");
  }
}

handleUnionType("demo123");
handleUnionType(10);
handleUnionType(7);
