function findElement(arr, value) {
    return arr.find(function (element) { return element === value; });
}
console.log(findElement([1, 2, 3, 4, 5], 3));
