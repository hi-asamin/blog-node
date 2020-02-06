const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('get article lists');
});

router.get('/:id', (req, res) => {
  res.send('find article by id' + req.params);
});

router.post('/', (req, res) => {
  res.send('create article');
});

router.put('/:id', (req, res) => {
  res.send('edit article' + req.params);
});

router.delete('/:id', (req, res) => {
  res.send('delete article by id' + req.params);
});

module.exports = router;
