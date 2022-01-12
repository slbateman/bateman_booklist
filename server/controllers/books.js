import mongoose from "mongoose";
import Books from "../models/books.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: error });
    return;
  }
};

export const postBook = async (req, res) => {
  const book = req.body;
  const newBook = new Books({ ...book, createdAt: new Date().toISOString });
  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error });
    return;
  }
};

export const patchBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No book with id: ${id}`);
  const updatedBook = req.body;
  await Books.findByIdAndUpdate(id, updatedBook, { new: true });
  res.json(updatedBook);
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No book with id: ${id}`);
  await Books.findByIdAndDelete(id);
  res.json({ message: "book deleted successfully" });
};
