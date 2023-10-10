// pages/index.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/about"> About</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Home;

