// pages/articles.js
import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import db from '../db.js';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Articles = () => {
  return (
    <Layout>
      <h1 className="text-center font-bold text-[#5C785C] text-2xl"> Articles </h1>
      <br></br>
      <ul className="text-center list">
        {db.articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <b>{article.title}</b>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Articles;
