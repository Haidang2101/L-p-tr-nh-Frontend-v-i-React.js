function removeDuplicateChars(input) {
    var result = "";
    var seen = new Set();
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}
//@ts-ignore
console.log(removeDuplicateChars("banana")); 
//@ts-ignore
console.log(removeDuplicateChars("hello world"));
