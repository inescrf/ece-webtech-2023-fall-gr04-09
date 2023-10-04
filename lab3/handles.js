const express = require('express');
const router = express.Router();
const notFound = require('./notFound.js');
const db = require('./db.js');
const { v4: uuidv4 } = require('uuid');

// GET /articles - List all articles
router.get('/articles', (req, res) => {
  res.status(200).json(db.articles);
});

// POST /articles - Add a new article
router.post('/articles', (req, res) => {
  const { title, content, author, date } = req.body;
  if (!title || !content || !author || !date) {
    return res.status(400).json({ error: 'Title, content, author, and date are required' });
  }

  const newArticle = {
    id: uuidv4(),
    title,
    content,
    author,
    date,
  };

  db.articles.push(newArticle);
  res.status(201).json(newArticle);
});

// GET /articles/:articleId - Get an article by ID
router.get('/articles/:articleId', (req, res) => {
  const articleId = req.params.articleId;
  const article = db.articles.find((article) => article.id === articleId);

  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }

  res.status(200).json(article);
});

// GET /articles/:articleId/comments - Get all comments of the article with articleId
router.get('/articles/:articleId/comments', (req, res) => {
  const articleId = req.params.articleId;
  const article = db.articles.find((article) => article.id === articleId);

  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }

  const comments = db.comments.filter((comment) => comment.articleId === articleId);
  res.status(200).json(comments);
});

// POST /articles/:articleId/comments - Add a new comment to a specific article with articleId
router.post('/articles/:articleId/comments', (req, res) => {
  const articleId = req.params.articleId;
  const article = db.articles.find((article) => article.id === articleId);

  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }

  const { content, author } = req.body;
  if (!content || !author) {
    return res.status(400).json({ error: 'Content and author are required for a comment' });
  }

  const newComment = {
    id: uuidv4(),
    timestamp: Date.now(),
    content,
    articleId,
    author,
  };

  db.comments.push(newComment);
  res.status(201).json(newComment);
});

// GET /articles/:articleId/comments/:commentId - Get a comment with commentId of the article with articleId
router.get('/articles/:articleId/comments/:commentId', (req, res) => {
  const articleId = req.params.articleId;
  const commentId = req.params.commentId;
  const article = db.articles.find((article) => article.id === articleId);
  const comment = db.comments.find((comment) => comment.id === commentId);

  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }

  if (!comment) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  res.status(200).json(comment);
});

// Gestion de la page 404
router.use((req, res) => {
  res.status(404).send(notFound);
});

module.exports = router;
