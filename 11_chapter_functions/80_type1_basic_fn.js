// no return type. No arguments 
function printMessage() {
    console.log("Hello, World!");
}

printMessage(); // Calling the function
printMessage(); // Calling the function again
printMessage(); // Calling the function again

let output = printMessage(); // Calling the function and storing the return value
console.log(output); // This will log 'undefined' since the function does not return anything