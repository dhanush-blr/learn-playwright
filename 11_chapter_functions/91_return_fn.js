function getStatus(code) {
    if (code >= 200 && code < 300) {
        return "Success";
    } else if (code >= 400 && code < 500) {
        return "client error";
    } else if (code >= 500) {
        return "server error";
    } else {
        return "unknown";
    }
}

getStatus(200); 
getStatus(404);
getStatus(500); 


console.log(getStatus(200)); // Output: Success
console.log(getStatus(404)); // Output: client error
console.log(getStatus(500)); // Output: server error
console.log(getStatus(100)); // Output: unknown

// Returns nothing → undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}

logTest("Hi this is a a log");


function aaa() {
    return [2, 2, 3, 5, 4];
    /// return {"name : pramod"}; - object
}
console.log(aaa()); // Output: [2, 2, 3, 5, 4]