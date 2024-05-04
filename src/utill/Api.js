import axios from 'axios';

const BasicUrl = 'https://delivery-web-1.onrender.com/User/login';

export const login = async (username, password) => {
  try {
    const response = await axios.post(BasicUrl, {
      username: username,
      password: password,
    });
    return response.data; // Assuming the response contains data you're interested in
  } catch (error) {
    // Handle error
    console.error('Error:', error.message);
    throw error; // Re-throw the error for the caller to handle
  }
};

// // Example usage:
// const username = 'your_username';
// const password = 'your_password';

// login(username, password)
//     .then(data => {
//         console.log('Login successful. Received data:', data);
//     })
//     .catch(error => {
//         console.error('Login failed:', error);
//     });
