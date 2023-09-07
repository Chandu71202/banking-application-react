import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Banking Application</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="/" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Register">Register</a>
        </li>
        {/* If user is Logged in to show the Dashboard */}
        <li className="nav-item">
          <a className="nav-link active" href="/Dashboard">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Logout">Logout</a>
        </li>
      </ul>
      </div>
    </div>
</nav>
  )
}
