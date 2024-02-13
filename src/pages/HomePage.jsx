// HomePage.js
import React from 'react';
import Hero from '../components/home/Hero'; // Component for the hero section
import Specials from '../components/home/Specials'; // Component for the specials section
import About from '../components/home/About'; // Component for the about section
import Testimonials from '../components/home/Testimonals'; // Component for the testimonials section

function HomePage() {
  return (
    <div>
      <Hero />
      <Specials />
      <About />
      <Testimonials />
    </div>
  );
}

export default HomePage;
