// pages/contacts.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import '../styles/globals.css';

const Contacts = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1 className="text-center font-bold text-[#5C785C] text-2xl"> Contacts </h1>
      <br></br>
      <p className="text-center"> DALMASSO Hugo : hugo.dalmasso@edu.ece.fr </p>
      <p className="text-center">  GOULAMHOUSSEN Ines : ines.goulamhoussen@edu.ece.fr </p>
      <p className="text-center"> SIALELLI Téo : teo.sialleli@edu.ece.fr </p>
      <Footer />
    </div>
  );
};

export default Contacts;
