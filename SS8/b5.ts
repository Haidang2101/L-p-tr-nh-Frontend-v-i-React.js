function findFirstEven<T extends number>(arr: T[]): T | undefined {
  return arr.find(num => num % 2 === 0);
}
console.log(findFirstEven([1, 3, 5, 6, 7])); 
console.log(findFirstEven([1, 3, 5]));