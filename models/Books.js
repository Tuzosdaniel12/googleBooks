const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String},
  description: { type: String},
  image: { type: String},
  link: { type: String},
  author: { type: [String] },
  date: { type: Date, default: Date.now }
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;