import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Dashboard() {

  const [user, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const id = sessionStorage.getItem("id")
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3500/users/${id}`)
        console.log(result)
        setUsers(result.data);
    }

  return (
    <div className="container">
            <div className="py-5">
              <h1>User Details are:</h1>              
              <h4>Name: {user.fullName}</h4>
              <h4>Email: {user.email}</h4>
              <h4>Contact Number: {user.contact_no}</h4>
              <h4>Address: {user.address}</h4>
              <h4>Date of Birth: {user.dob}</h4>
              <h4>Aadhaar Number: {user.aadhaar}</h4>
              <br></br><br></br>
              <h1>Account Details are:</h1>
              <h4>Account Number: {user.accountNumber}</h4>
              <h4>Account Type:{user.accountType}</h4>
              <h4>Account Balance:{user.balance}</h4>
              <h4>All Transactions:{user.transactions_array}</h4>
            </div>
        </div>

  
  )
}
