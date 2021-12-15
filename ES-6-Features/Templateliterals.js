//Template literals are the string literals enclosed by the backtick ``
// and can contain placeholders indicated by dollar sign curly braces. ${}
//With template literals, embedding expressions becomes more readable, 
//thus eases writing complicated code with numerous substitutions

// --Example 1---
let myName = 'John';
let myRole = 'Software Developer';
console.log(`My name is ${myName} and I am a ${myRole}.`); 
// My name is John and I am a Software Developer

// ---Example 2----
let myName = 'John';
let myRole = 'Software Developer';
function myTag(array, name, role){
 let str0 = array[0]; // My name is
 let str1 = array[1]; // and I am
 
 // we can further manipulate str0, str1, name and role here
 return `${str0}${name}${str1}${role}`;
}
console.log(myTag`My name is ${myName} and I am ${myRole}`); // My name is John and I am Software Developer