const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

console.log(user.age); // Output: 30    
user.city = "New York"; // Adding a new property to the user object
user.age = 31; // Updating the age property of the user object  
console.log(user); // Output: { name: "John Doe", age: 31, email: "john.doe@example.com", city: "New York" }