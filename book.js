const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  availableCopies: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
