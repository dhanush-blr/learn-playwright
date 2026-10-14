const user = {
  id: 117,
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Main Street",
    city: "Springfield",
    state: "CA",
    zip: "90001"
  },
  isActive: true,
  roles: ["user", "editor"],
  preferences: {
    newsletter: true,
    notifications: {
      email: true,
      sms: false
    }
  },
  hobbies: ["reading", "gaming", "traveling"]
};

console.log(user.hobbies);