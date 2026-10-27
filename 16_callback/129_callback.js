function test(any, callmewhenDone) {
  console.log("Test started with argument: " + any);
  callmewhenDone();
}

test("Verify the callback function", function () {
  console.log("Test completed successfully!");
});