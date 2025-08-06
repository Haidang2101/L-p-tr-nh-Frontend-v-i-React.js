function convertToNumber(value: number | string): number | null {
  const num = typeof value === "string" ? parseFloat(value) : value;
  return isNaN(num) ? null : num;
}

function cong(a: number | string, b: number | string): number | string {
  const numA = convertToNumber(a);
  const numB = convertToNumber(b);

  if (numA === null || numB === null) {
    return "Tham số không hợp lệ";
  }

  return numA + numB;
}

function tru(a: number | string, b: number | string): number | string {
  const numA = convertToNumber(a);
  const numB = convertToNumber(b);

  if (numA === null || numB === null) {
    return "Tham số không hợp lệ";
  }

  return numA - numB;
}

function nhan(a: number | string, b: number | string): number | string {
  const numA = convertToNumber(a);
  const numB = convertToNumber(b);

  if (numA === null || numB === null) {
    return "Tham số không hợp lệ";
  }

  return numA * numB;
}

function chia(a: number | string, b: number | string): number | string {
  const numA = convertToNumber(a);
  const numB = convertToNumber(b);

  if (numA === null || numB === null || numB === 0) {
    return "Tham số không hợp lệ hoặc chia cho 0";
  }

  return numA / numB;
}
console.log(cong("10", "5"));         
console.log(tru(20, "4"));            
console.log(nhan("3", "abc"));        
console.log(chia("20", 0));           
