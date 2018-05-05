var express = require('express');
var router = express.Router();

const Book = require('../models/book');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const book = new Book(req.body);
  book.save(function(err, books) {
    if(err) return res.status(400).send(err);
    res.status(200).send(book)
  })
})

module.exports = router;
