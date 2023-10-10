// pages/about.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1>À propos</h1>
      {/* Add your about page content here */}
      <Footer />
    </div>
  );
};

export default About;

