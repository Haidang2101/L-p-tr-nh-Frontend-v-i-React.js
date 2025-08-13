function mregeObjects<T, U>(o1: T, o2: U): T & U{
    
    return {...o1, ...o2};
}
console.log(mregeObjects({name: "Long"}, {age: 20}));