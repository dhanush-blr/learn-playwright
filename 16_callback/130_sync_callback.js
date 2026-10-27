let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function (result, index) {
    console.log("Test " + index + " -> " + result);
});

// the callback function is passed as an argument to the forEach method.
