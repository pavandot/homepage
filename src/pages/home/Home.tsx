import React from 'react';

// Components
import Navbar from 'components/navbar/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
const Home = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
    </section>
  );
};

export default Home;
