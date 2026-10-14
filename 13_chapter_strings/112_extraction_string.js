let str = "Login_test_pass_001";

//slice(start, end) => returns a new string from start to end (not including end))
console.log(str.slice(0, 5)); // Login(0-4)
//substring(start, end) => returns a new string from start to end (not including end))
console.log(str.slice(11)); // pass_001(11-17)
//substr(start, length) => returns a new string from start to length
console.log(str.slice(-3)); // 001(-3 to end)
console.log(str.substring(6, 10)); //test substring(start, end) => returns a new string from start to end (not including end)

console.log(str.at(0)); // L
console.log(str.at(2)); // n
