//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index, or -1 if not found

let index =results.indexOf("error"); //3
console.log(index);
results.indexOf("skip");  // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail"); // 4

// includes — returns boolean
results.includes("error"); // true