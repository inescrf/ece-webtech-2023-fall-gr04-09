// pages/articles/[articleId].js
import React from 'react';
import { useRouter } from 'next/router';
import db from '../../db.js';
import '../../styles/globals.css';

const ArticlePage = () => {
  const router = useRouter();
  const { articleId } = router.query;

  // Find the article with the matching ID
  const article = db.articles.find((article) => article.id === articleId);

  return (
    <div>
      <h1>Article Page</h1>
      {article ? (
        <>
          <h2>Article ID: {article.id}</h2>
          <h2>Title: {article.title}</h2>
          <p>{article.content}</p>
          <p>Date: {article.date}</p>
          <p>Author: {article.author}</p>
        </>
      ) : (
        <p>Article not found</p>
      )}
    </div>
  );
};

export default ArticlePage;
