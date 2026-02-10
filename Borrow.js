const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  borrowDate: { type: Date, default: Date.now },
  returnDate: Date,
  status: { type: String, default: "Borrowed" }
});

module.exports = mongoose.model("Borrow", borrowSchema);
