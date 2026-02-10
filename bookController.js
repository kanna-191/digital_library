const Book = require("../models/Book");

exports.addBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json({ message: "Book Added" });
};

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book Deleted" });
};
