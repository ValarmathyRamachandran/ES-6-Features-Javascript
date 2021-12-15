// function add(num1, num2=10) {  //example:1 addition operation
//     return num1+num2;
//    }
//    add (5,2) //returns 7
//    add(3) //returns 13 as num2 has default value = 10

   function getFullName(firstName, lastName, fullName=firstName+' '+lastName){ //example :2 getting Full Name 
    return fullName;
   }
   
   console.log(getFullName('John','Doe')); // returns John Doe
   console.log(getFullName('John', 'Doe', 'John Doe')); // returns John Doe