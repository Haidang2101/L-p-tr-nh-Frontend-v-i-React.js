function flatten(arr) {
    return arr.reduce(function (flat, current) { return flat.concat(current); }, []);
}
console.log(flatten([[1, 2], [3, 4], [5]]));
