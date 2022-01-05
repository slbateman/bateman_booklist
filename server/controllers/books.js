import mongoose from "mongoose";
import Books from "../models/books.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Books.find();
    console.log(books);
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
    console.log("POST successful");
    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error });
    return;
  }
};
