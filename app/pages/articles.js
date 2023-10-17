// pages/articles.js
import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import db from '../db.js';
import './about.css';

const Articles = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Articles;
