function handleUnionType(input) {
    if (typeof input === "string") {
        console.log("".concat(input.length, " k\u00FD t\u1EF1"));
    }
    else if (typeof input === "number") {
        if (input % 2 === 0) {
            console.log("Đây là số chẵn");
        }
        else {
            console.log("Đây là số lẻ");
        }
    }
    else {
        console.log("Kiểu dữ liệu không hợp lệ");
    }
}
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(7);
