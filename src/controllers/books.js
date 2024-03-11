const Book = require("../models/book");

const getBooks = (request, response) => {
  //Get all books
  return Book.find({})
    .then((data) => {
      response.status(200).send(data);
    })
    .catch((e) => response.status(500).send(e.message));
};

const getBook = (request, response) => {
  //Get book
  const { book_id } = request.params;
  return Book.findById(book_id)
    .then((book) => {
      if (!book) {
        response.status(404).send("Book not found");
      } else {
        response.status(200).send(book);
      }
    })
    .catch((e) => response.status(500).send(e.message));
};

const createBook = (request, response) => {
  //Create new book
  return Book.create({ ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((e) => response.status(500).send(e.message));
};

const updateBook = (request, response) => {
  //Update book
  const { book_id } = request.params;
  return Book.findByIdAndUpdate(book_id, { ...request.body })
    .then((book) => {
      if (!book) {
        response.status(404).send("Book not found");
      } else {
        response.status(200).send(book);
      }
    })
    .catch((e) => response.status(500).send(e.message));
};

const deleteBook = (request, response) => {
  //Delete book
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) {
        response.status(404).send("Book not found");
      } else {
        response.status(200).send("Success");
      }
    })
    .catch((e) => response.status(500).send(e.message));
};

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };
