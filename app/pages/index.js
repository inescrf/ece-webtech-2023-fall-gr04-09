import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import './about.css';

const Home = () => {
  return (
    <Layout>
      <h1 className="title">Home Page</h1>
      <ul>
        <li>
          <Link className="banner-link" href="/about">About</Link>
        </li>
        <li>
          <Link className="banner-link" href="/contacts">Contacts</Link>
        </li>
        <li>
          <Link className="banner-link" href="/articles">Articles</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Home;
