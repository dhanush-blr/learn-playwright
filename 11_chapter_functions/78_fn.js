// Define
function getResult(score){
    return score >= 70 ? "pass" : "fail";
}

// Calling
getResult(85); // Pass
console.log(getResult(85)); // Pass

getResult(45); // Fail
console.log(getResult(45)); // Fail