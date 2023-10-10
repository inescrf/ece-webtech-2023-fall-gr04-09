// pages/contacts.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Contacts = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1>Contacts</h1>
      {/* Add your contacts page content here */}
      <Footer />
    </div>
  );
};

export default Contacts;

