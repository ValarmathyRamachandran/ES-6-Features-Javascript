//Spread syntax expands an array into separate elements, 
//while a rest syntax condenses array elements into a single element.

// spread operator doing the concat job and also for copying
// -- Example 1 --
let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// -- Example 2 --
let arr = ['a','b'];
let arr2 = [...arr,'c','d'];
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]

// -- Example 3 --
const user1 = {
    name: 'John',
    age: 22
};
  
const clonedUser = { ...user1 };
console.log(clonedUser); // {name: "John", age: 22}

//Rest parameter allows us to handle more number of inputs 
//which is getting passed inside a function in a much effective and easier manner.
// -- Example 1 -- 
function display(first_argument, ...other_arguments) {
    console.log(first_argument);// output 1
    console.log(other_arguments); // [2,3,4,5,6]
}

display(1, 2, 3, 4, 5, 6);  

// -- Example 3 -- 
function sum(...numbers) {
    let sum = 0;
    for (let element of numbers)  {
        sum += element;
    }
    console.log(sum);
}

sum(1, 5, 5, 3, 6); // 20
sum(1, 2, 3, 4); //10
sum(0, 1, 2); //3
                       