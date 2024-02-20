var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (_req, res) => {
  res.render('index', { title: 'Home Page' });
});

router.get('/dynamic/:id', (req, res) => {
  const id = req.params.id;
  res.render('dynamic', { title: 'Dynamic Page', id: id });
});