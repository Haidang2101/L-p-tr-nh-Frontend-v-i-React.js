function findFirstEven(arr) {
    return arr.find(function (num) { return num % 2 === 0; });
}
console.log(findFirstEven([1, 3, 5, 6, 7]));
console.log(findFirstEven([1, 3, 5]));
