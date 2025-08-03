function checkParity(number) {
    if (!Number.isInteger(number)) {
        return `${number} is not a number`;
    }
    if (number % 2 === 0) {
        return `${number} is even`;
    } else {
        return `${number} is odd`;
    }
}

console.log(checkParity("a"));
console.log(checkParity(10));
console.log(checkParity(7));