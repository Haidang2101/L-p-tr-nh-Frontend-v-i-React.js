function processInput(input: string | number | boolean): void {
  if (typeof input === "string") {
    if (/^\d+$/.test(input)) {
      const numberValue = parseInt(input, 10);
      console.log(numberValue ** 2); 
    } else {
      const letterCount = (input.match(/[a-zA-Z]/g) || []).length;
      console.log(`${letterCount} ký tự chữ cái`);
    }
  }

  else if (typeof input === "number") {
    if (input < 2) {
      console.log("Không phải số nguyên tố");
      return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
      if (input % i === 0) {
        isPrime = false;
        break;
      }
    }

    console.log(isPrime ? "Là số nguyên tố" : "Không phải số nguyên tố");
  }

  else if (typeof input === "boolean") {
    if (input) {
      console.log("Giá trị là true - tiến hành xử lý");
    } else {
      console.log("Giá trị là false - dừng xử lý");
    }
  }
}
