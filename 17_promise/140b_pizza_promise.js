// 🍕 PROMISE - The Pizza Order Analogy
// ============================================

// ✅ Change this to false to see .catch() in action!
let isPizzaReady = false;

// 🎟️ You place the order → you get a TICKET (the Promise)
let orderPizza = new Promise(function (resolve, reject) {

    if (isPizzaReady) {
        // ✅ Good news! Pizza is here!
        resolve({ status: 200, item: "Pepperoni Pizza", message: "Pizza is delivered!" });
    } else {
        // ❌ Bad news! Something went wrong!
        reject({ status: 500, message: "Order cancelled! Kitchen is closed." });
    }

});

// 🚪 Now open the door and handle what happens
orderPizza
    .then(function (data) {
        // ✅ Runs ONLY when pizza arrives (resolve)
        console.log("🍕 Woohoo!", data.message);
        console.log("📦 You ordered:", data.item);
        console.log("📋 Status code:", data.status);
    })
    .catch(function (error) {
        // ❌ Runs ONLY when order fails (reject)
        console.log("😢 Oh no!", error.message);
        console.log("📋 Error code:", error.status);
    })
    .finally(function () {
        // 🚪 ALWAYS runs — no matter what!
        console.log("💳 Bill paid. Thanks for ordering!");
    });

//Success
// Woohoo! Pizza is delivered!
//📦 You ordered: Pepperoni Pizza
//📋 Status code: 200
// 💳 Bill paid. Thanks for ordering!

// Failure
// 😢 Oh no! Order cancelled! Kitchen is closed.
// 📋 Error code: 500
// 💳 Bill paid. Thanks for orderi  g!