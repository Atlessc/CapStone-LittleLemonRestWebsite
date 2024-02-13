import React from 'react';
import '../../styles/pages/HomePage.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero Conatiner">
        <div className='word-area'>
          <h1>Welcome to Little Lemon</h1>
          <h3>Chicago's finest cuisine</h3>
          <p>A taste of Chicago's finest cuisine</p>
          <div></div>
          <div></div>
          <div></div>
          <Link to="/reservations" className='btn'>
            <button>
              Reserve a table
            </button>
          </Link>
        </div>
        <img src="/images/restauranfood.jpg" alt="Chicago-style pizza" className='hero-img' />
      </div>
  );
};

export default Hero;
