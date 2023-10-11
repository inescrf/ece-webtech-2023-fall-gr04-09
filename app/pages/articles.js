// pages/articles.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import db from '../db.js';
import './about.css';



const Articles = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1 className="title"> Articles </h1>
      <p className="list"> <ul>
        {db.articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}> 
              <b>{article.title}</b>
            </Link>
          </li>
        ))}
      </ul>
      </p>
      <Footer />
    </div>
  );
};

export default Articles;

