// let start = { status: "Pass"};
// console.log(start.status); // Pass
// console.log(start["status"]); // Pass

let a = { status: "Pass" };
let b = a; // b is now pointing to the same object as a
b.status = "Fail"; // changing the status property of b also changes it for a, since they reference the same object
console.log(a.status); // Fail
console.log(b.status); // Fail  

let c = { status: "Pass" };
let d = { status: "Pass" }; // d is a separate object from c
console.log(c === d); // false since c and d are different objects in memory,

const t_js = {
    name: "dhanush",
    age: 25
}
console.log(t_js);