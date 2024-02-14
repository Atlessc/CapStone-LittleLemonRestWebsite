import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NavBar.css';

export default function NavBar() {
  return (
      <div className='navbar-container'>
           <Link className="logo-link" to="/">
        <div className='nav-logo'>

          <img src="/public/images/logo.png" style={{
            width: '90px',
            height: '70px'          
          }}/>
          <h2>Little Lemon</h2>
        </div>
          </Link>
        <div className='nav-items'>
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/about">About</Link>
        <Link className="nav-item" to="/menu">Menu</Link>
        <Link className="nav-item" to="/reservations">Reservations</Link>
        <Link className="nav-item" to="/order-online">Order Online</Link>
        <Link className="nav-item" to="/login">Login</Link>
        </div>
      </div>
  )
}