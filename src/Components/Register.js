import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export default function Register() {

  // Function to Generate a RandomAccountNumber
  function generateAccountNumber() {
    return Math.floor(Math.random() * 1000000) + 100000; 
  }

  // user data to get's saved into the users.json 
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    contact_no: '',
    address: '',
    dob: '',
    aadhaar: '',
    accountType: 'savings',
    balance: 0,
    accountNumber: generateAccountNumber(),
    Transactions_array: []
    });
    
  let navigate = useNavigate();

  // Props to check the exisiting email 
  const [emailExists, setEmailExists] = useState(false);

  // To Save the user entered data if there's any register error.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Validates the submit and saves the user's info
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3500/users?email=${user.email}`)
      .then((response) => {
        if (response.data.length > 0) {
          setEmailExists(true);
        } else {
          axios.post('http://localhost:3500/users', user)
            .then((response) => {
              console.log('User registered successfully:', response.data);
              navigate('/Login');
            })
            .catch((error) => {
              console.error('Error registering user:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error checking email existence:', error);
      });
  };

  return (
      <div className="container mt-5">
      <h1 className="mb-4">Registration</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name:</label>
          <input type="text" className="form-control" id="fullName" name="fullName" value={user.fullName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} required />
          {emailExists && <div className="text-danger">Email already exists. Please choose a different email.</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="contact_no" className="form-label">Contact Number:</label>
          <input type="text" className="form-control" id="contact_no" name="contact_no" value={user.contact_no} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input type="text" className="form-control" id="address" name="address" value={user.address} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth:</label>
          <input type="text" className="form-control" id="dob" name="dob" value={user.dob} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="aadhaar" className="form-label">Aadhaar Number:</label>
          <input type="text" className="form-control" id="aadhaar" name="aadhaar" value={user.aadhaar} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="accountType" className="form-label">Account Type:</label>
          <select className="form-select" id="accountType" name="accountType" value={user.accountType} onChange={handleChange}>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Register</button>
        </div>
      </form>
    </div>
  )
}
