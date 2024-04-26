console.log(1 == '1');   // true, devido à coerção de tipo
console.log(1 === '1');  // false, devido à diferença de tipo

console.log(0 == false); // true, devido à coerção de tipo
console.log(0 === false); // false, devido à diferença de tipo

console.log(null == undefined); // true, devido à coerção de tipo
console.log(null === undefined); // false, devido à diferença de tipo