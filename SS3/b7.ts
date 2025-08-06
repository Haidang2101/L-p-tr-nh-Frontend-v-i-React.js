function removeDuplicateChars(input: string): string {
  let result = "";
  let seen = new Set<string>(); 

  for (let char of input) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicateChars("banana"));       
console.log(removeDuplicateChars("hello world"));  
