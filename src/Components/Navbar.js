import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  // Logout Function
  function Logout() {
    sessionStorage.clear();
    navigate("/Login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Banking Application</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {/* Checks if the User is Logged In or not By Checking the Session Storage
          If the User is Logged In then it will show the Dashboard and Logout
          Else it will show the Login Page and Register Page */}
            {sessionStorage.getItem("id") ? (
              <><li className="nav-item">
                <a className="nav-link active" href="/Dashboard">Dashboard</a>
              </li><li className="nav-item">
                  <button className="nav-link active" onClick={Logout}>Logout</button>
                </li></>
            ) : (
              <><li className="nav-item">
                <a className="nav-link active" href="/Login">Login</a>
              </li><li className="nav-item">
                  <a className="nav-link active" href="/Register">Register</a>
                </li></>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
