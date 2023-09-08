import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();

  // to get the user credentials
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  // to display the error message if there's any
  const [loginError, setLoginError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('http://localhost:3500/users')
      .then((response) => {
        const users = response.data;
        // checking if the user is present in the database
        const matchingUser = users.find((user) => user.email === credentials.email && user.password === credentials.password);

        if (matchingUser) {
          console.log('Login successful:', matchingUser);
          // saving the user id in the session storage
          sessionStorage.setItem("id", matchingUser.id);
          navigate('/Dashboard');
        } else {
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
      <form>
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
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
        </div>
      </form>
    </div>
  );
}
