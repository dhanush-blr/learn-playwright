//replace() => replaces a specified value with another value in a string
let url = "https://www.example.com?app=123&user=456";
console.log(url.replace("https", "http")); // replaces "https" with "http"
console.log(url.replace("www", "blog")); // replaces "www" with "blog"
console.log(url.replace(".com", ".org")); // replaces ".com" with ".org"
console.log(url.replace(/app=\d+/g, "app=789")); // replaces "app=123" with "app=789" using regex
console.log(url.replace(/user=\d+/g, "user=999")); // replaces "user=456" with "user=999" using regex


//split() => splits a string into an array of substrings based on a specified separator and join() => joins an array of strings into a single string with a specified separator
let str = "apple,banana,cherry";
let arr = str.split(","); // splits the string into an array of substrings based on the comma separator
console.log(arr); // ["apple", "banana", "cherry"]

let joinedStr = arr.join(" - "); // joins the array of strings into a single string with " - " as the separator
console.log(joinedStr); // apple - banana - cherry  
console.log("hello".split("")); // ["h", "e", "l", "l", "o"] (splits the string into an array of individual characters)
