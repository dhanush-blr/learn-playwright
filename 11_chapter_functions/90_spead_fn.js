function add(a, b, c) {
  return a + b + c;
}

let num = [1, 2, 3];
console.log(add(...num)); // Spread operator to pass array elements as arguments