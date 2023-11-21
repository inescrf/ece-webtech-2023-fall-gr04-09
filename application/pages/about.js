// pages/about.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import '../styles/globals.css';

const About = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1 className="text-center font-bold text-[#5C785C] text-2xl"> About </h1>
      <br></br>
      <p className="paragraph text-center"> This is a simple website with some big data articles </p>
      <Footer />
    </div>
  );
};

export default About;
