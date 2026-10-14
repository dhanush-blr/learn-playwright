let arr = [1, 2, 3]; // [1, 2, 3]
console.log(arr); // [1, 2, 3]

// Add to END
arr.push(4); // add 4 at the end
console.log(arr); // [1, 2, 3, 4]

// Remove from END
arr.pop(); // remove last element
console.log(arr); // [1, 2, 3]

arr.push(5, 6); // add 5, 6 at the end
console.log(arr); // [1, 2, 3, 5, 6]

// Add to BEGINNING
arr.unshift(0); // add 0 at the beginning
console.log(arr); // [0, 1, 2, 3, 5, 6]

// Remove from BEGINNING
arr.shift(); // remove 1st element
console.log(arr); // [2, 3, 4, 5, 6]

// Add/Remove from MIDDLE

arr.splice(2, 1); // remove 1 element at index 2
console.log(arr); // [1, 2, 5, 6]

arr.splice(2, 0, 99); // add 99 at index 2  
console.log(arr); // [1, 2, 99, 5, 6]

arr.splice(1, 2, 10, 20); // remove 2 elements at index 1 and add 10, 20
console.log(arr); // [1, 10, 20, 5, 6]