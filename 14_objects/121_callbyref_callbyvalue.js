//call by value
let a = 10;
let b = a; // b is now a copy of the value of a
b = 20; // changing the value of b does not affect a
console.log(a); // 10
console.log(b); // 20

//call by reference
let obj1 = { name: "John" };
let obj2 = obj1; // obj2 is now pointing to the same object as obj1
obj2.name = "Doe"; // changing the name property of obj2 also changes it for obj1, since they reference the same object
console.log(obj1.name); // Doe
console.log(obj2.name); // Doe  