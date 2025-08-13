function reverseArray<T>(arr: T[]): T[]{;
    arr=arr.reverse();
    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));