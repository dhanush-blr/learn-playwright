//with return type No arguments.
function getMessage(name) {
    console.log("Hi", name);
}

getMessage("Dhanush"); // Calling the function
getMessage("Rakesh"); // Calling the function again

let message = getMessage("John"); // Calling the function and storing the return value
console.log(message); // This will log 'undefined' since the function does not return anything