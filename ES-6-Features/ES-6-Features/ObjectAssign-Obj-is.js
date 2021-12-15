//Object.assign() method can be used to clone an object and also used to merge objects
let person = { height: '176' };
let clonePerson = Object.assign({}, person);
console.log(clonePerson); // {height:'176'}

// -- Example  --
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);//  output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget); //  output: Object { a: 1, b: 4, c: 5 }

//Object.is() determines if the two values are the same.
// -- Example 1 --
let a=10, b=10;
Object.is(a,b); //true
let c=20;
Object.is(a,c);//false

// --Example 2--
Object.is([], []);                // false

// -- Example 3 --
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false
