//callback 

function placeOrder(item, callback) {
  console.log("Order placed: " + item);
  callback();
}

placeOrder("Burger", function () {
  console.log("Order is ready! Pick it up.");
});