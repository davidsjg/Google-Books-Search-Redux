const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String },
  subtitle: { type: String },
  author: { type: String },
  img: { type: String },
  description: { type: String },
  read: { type: Boolean },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
