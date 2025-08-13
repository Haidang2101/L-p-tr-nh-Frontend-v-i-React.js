function findElement<T>(arr: T[], value: T): T | undefined {
    return arr.find(element => element === value);
}
console.log(findElement([1, 2, 3, 4, 5],3));