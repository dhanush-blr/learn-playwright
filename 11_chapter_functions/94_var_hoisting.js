console.log(greeting); 
var greeting = "Hello var!";
console.log(greeting); 

// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"