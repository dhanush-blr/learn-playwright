let a = 10;
console.log(++a + a + a++); //33
console.log(a); //12

let i = 1;
let result = i++ + ++i;
console.log(result, i); // 4, 3


let b = 10;
console.log(++b + ++b); //23
console.log(b); //12

let c = 34;
let results = c++;
console.log(results); //34
console.log(c); //35