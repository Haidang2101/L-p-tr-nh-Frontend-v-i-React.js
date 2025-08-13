function flatten<T>(arr: T[][]): T[]{
    return arr.reduce((flat, current) => flat.concat(current), []);
}
console.log(flatten([[1, 2], [3, 4], [5]])); 