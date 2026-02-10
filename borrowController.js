const Borrow = require("../models/Borrow");
const Book = require("../models/Book");

exports.borrowBook = async (req, res) => {
  const { userId, bookId } = req.body;

  const book = await Book.findById(bookId);
  if (book.availableCopies <= 0)
    return res.status(400).json({ message: "Not Available" });

  book.availableCopies -= 1;
  await book.save();

  const borrow = new Borrow({ user: userId, book: bookId });
  await borrow.save();

  res.json({ message: "Book Borrowed" });
};
