import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password match any user in the JSON data
    axios.get('http://localhost:3500/users')
      .then((response) => {
        console.log('Users:', response.data.users);
        const users = response.data.users;
        const matchingUser = users.find((user) => user.email === credentials.email && user.password === credentials.password);

        if (matchingUser) {
          // Successful login
          console.log('Login successful:', matchingUser);
          // You can redirect the user or perform other actions here
        } else {
          // Login failed
          setLoginError('Invalid email or password. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error checking login credentials:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        {loginError && <div className="text-danger">{loginError}</div>}
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
}
