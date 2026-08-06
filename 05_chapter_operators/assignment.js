let a = 100;
console.log(a++ + ++a + a++ + ++a); // 100 + 102 + 102 + 104 = 408
console.log(a); // 104
// Explanation: The expression is evaluated as (100) + (102) + (102) + (104) = 408, and the final value of 'a' is 104.

let a = 37;
console.log(--a + a--); // 36 + 36 = 72
console.log(a); // 35
// Explanation: The expression is evaluated as (36) + (36) = 72, and the final value of 'a' is 35.

let a = 5; 
let b = a-- - --a; // 5 - 3 = 2
console.log(b, a); // 2 3
// Explanation: The expression is evaluated as (5) - (3) = 2, and the final value of 'a' is 3.

let i = 1; 
let r = i++ > 1 ? i++ : ++i; // 1 > 1 ? 2 : 3 = 3
console.log(r, i); // Explanation: The expression is evaluated as (1 > 1) ? (2) : (3) = 3, and the final value of 'i' is 3.