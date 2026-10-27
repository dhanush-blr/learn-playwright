let order = new Promise(function (resolve, reject) {
    let foodready = false;
    if (foodready) {
        resolve("Pizza is delivered!");
    } else {
        reject("Order cancelled");
    }
});

console.log(order);

// ✅ Open the box properly
order
    .then(function (result) {
        console.log("✅", result);
    })
    .catch(function (error) {
        console.log("❌", error);
    });
