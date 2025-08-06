function convertToNumber(value) {
    var num = typeof value === "string" ? parseFloat(value) : value;
    return isNaN(num) ? null : num;
}
function cong(a, b) {
    var numA = convertToNumber(a);
    var numB = convertToNumber(b);
    if (numA === null || numB === null) {
        return "Tham số không hợp lệ";
    }
    return numA + numB;
}
function tru(a, b) {
    var numA = convertToNumber(a);
    var numB = convertToNumber(b);
    if (numA === null || numB === null) {
        return "Tham số không hợp lệ";
    }
    return numA - numB;
}
function nhan(a, b) {
    var numA = convertToNumber(a);
    var numB = convertToNumber(b);
    if (numA === null || numB === null) {
        return "Tham số không hợp lệ";
    }
    return numA * numB;
}
function chia(a, b) {
    var numA = convertToNumber(a);
    var numB = convertToNumber(b);
    if (numA === null || numB === null || numB === 0) {
        return "Tham số không hợp lệ hoặc chia cho 0";
    }
    return numA / numB;
}
console.log(cong("10", "5")); // 15
console.log(tru(20, "4")); // 16
console.log(nhan("3", "abc")); // "Tham số không hợp lệ"
console.log(chia("20", 0)); // "Tham số không hợp lệ hoặc chia cho 0"
