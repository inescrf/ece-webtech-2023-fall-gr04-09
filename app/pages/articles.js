// pages/articles.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import db from '/home/teo/Bureau/web_project/ece-webtech-2023-fall-gr04-09/app/db.js';



const Articles = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1>Articles</h1>
      <ul>
        {db.articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}> 
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Articles;

