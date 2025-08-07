function processInput(input) {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            var numberValue = parseInt(input, 10);
            console.log(Math.pow(numberValue, 2));
        }
        else {
            var letterCount = (input.match(/[a-zA-Z]/g) || []).length;
            console.log("".concat(letterCount, " k\u00FD t\u1EF1 ch\u1EEF c\u00E1i"));
        }
    }
    else if (typeof input === "number") {
        if (input < 2) {
            console.log("Không phải số nguyên tố");
            return;
        }
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(input); i++) {
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
        }
        else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}
