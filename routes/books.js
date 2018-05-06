var express = require('express');
var router = express.Router();

const Book = require('../models/book');

//localhost:3000/api/books?skip=3&limit=3&order=asc
router.get('/', function(req, res, next) {
  let skip = parseInt(req.query.skip);
  let limit = parseInt(req.query.limit);
  let order = req.query.order;
  console.log(order);

  Book.find()
        .skip(skip)
        .limit(limit)
        .sort({createdAt: order})
        .exec(function(err, books){
          if (err) return res.status(400).send(err);
          res.status(200).json({
            response: true,
            books: books
          });
        });
});


router.put('/update-book', function(req, res, next) {
  Book.findByIdAndUpdate(req.body._id, req.body, {new: true}, function(err, book) {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      response: true,
      book: book
    });
  });
});

router.delete('/delete-book', function(req, res, next) {
  let id = req.query.id;
  Book.findByIdAndRemove(id, function(err) {
    if(err) return res.status(400).send(err);
    res.send('ok');
  });
});


router.get('/getBook', function(req, res, next) {
  let id = req.query.id;
  Book.findById(id, function(err, book) {
    if(err) return res.status(400).send(err);
    res.status(200).json({response: true, book: book});
  });
});

router.post('/', function(req, res, next) {
  const book = new Book(req.body);
  book.save(function(err, books) {
    if(err) return res.status(400).send(err);
    res.status(200).json({
      post: true, 
      bookId: book._id
    });
  });
});

module.exports = router;
