let People = function(person, age) {
    this.person = person;
    this.age = age;
    this.info = function() {

        // logs People
        document.write(this);

       setTimeout(() => {
        document.write(this.person + " is " + this.age
                                       + " years old");   // arrow function to make lexical "this" binding
       }, 3000);                                            // here this=People."this" has been inherited
    }
}
let person1 = new People('John', 21);

// logs : John is 21 years old after 3 seconds
person1.info();

// -- example 2 -- 
let getName = ((firstName, lastName) => {
let myRole = 'Software Developer';
    return `My name is ${firstName} ${lastName}
    I am a ${myRole}.`;
   });