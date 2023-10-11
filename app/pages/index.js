import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import './about.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1 className="title">Home Page</h1>
      <ul>
        <li>
          <Link href="/about"><a className="banner-link">About</a></Link>
        </li>
        <li>
          <Link href="/contacts"><a className="banner-link">Contacts</a></Link>
        </li>
        <li>
          <Link href="/articles"><a className="banner-link">Articles</a></Link>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Home;
