import mongoose from "mongoose";

const book = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: { type: String, default: "" },
  createdAt: { type: String },
});

const Books = mongoose.model("book", book);

export default Books;
