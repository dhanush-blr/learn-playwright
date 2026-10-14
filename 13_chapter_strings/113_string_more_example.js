let str="  Hello World   ";
console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world
console.log(str.trim()); // removes whitespace from both ends of a string
console.log(str.trimStart()); // removes whitespace from the start of a string
console.log(str.trimEnd()); // removes whitespace from the end of a string   

//replace() => replaces a specified value with another value in a string
let msg = "Test: FAIL Retry: Fail";
console.log(msg.replace("Fail", "Pass")); // replaces the first occurrence of "Fail" with "Pass"
console.log(msg.replaceAll("Fail", "Pass")); // replaces all occurrences of "Fail" with "Pass"
console.log(msg.replaceAll(/Fail/gi, "Pass")); // replaces all occurrences of "Fail" with "Pass" (case-insensitive)


//concatenate() => joins two or more strings
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // Hello World
console.log(str1 + " " + str2); // Hello World  
console.log(`${str1} ${str2}`); // Hello World (using template literals)