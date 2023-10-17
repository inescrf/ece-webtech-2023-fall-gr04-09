// pages/about.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import '../styles/about.css';

const About = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1 className="title"> About </h1>
      <p className="paragraph"> This is a simple website with some big data articles </p>
      <Footer />
    </div>
  );
};

export default About;
