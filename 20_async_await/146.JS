// Simulated async function to get an authentication token
function getToken() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('fake-token-123'), 500); // fake delay
  });
}

// Simulated async function to fetch a user using the token
function getUser(token) {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject(new Error('Missing token'));
    } else {
      setTimeout(() => resolve({ id: 1, name: 'Alice', token }), 500);
    }
  });
}

async function run() {
  try {
    const token = await getToken();
    const user = await getUser(token);
    console.log(user);
  } catch (err) {
    console.error('Error:', err);
  }
}

run();
