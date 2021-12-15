// The destructuring assignment allows reading values from an array or properties from an object,
// into distinct variables.
// --Example 1--

var o = {p: 42, q: 50};
var {p, q} = o;

console.log(p); // 42
console.log(q); // 50

//--Example 2--
var names = ["Anu", "Brindha", "Guna", "Divya"];
  
var [firstName, secondName] = names;
console.log(firstName);//"Anu"
console.log(secondName);//"Brindha

// --Example 3 --
var names = ["Anu", "Brindha", "Guna", "Divya"];
  
var [firstName, ,thirdName] = names; //array elements can be skipped as well using a comma separator.
console.log(firstName);//"Anu"
console.log(thirdName);//"Guna 

//-- Example 4 --
var x, y;
[x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20