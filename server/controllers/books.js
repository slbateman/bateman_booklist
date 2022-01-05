import mongoose from "mongoose";
import Books from "../models/books.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Books.find();
    console.log("GET successful");
    res.send(200).json(books);
  } catch (error) {
    res.send(404).json({ message: error });
  }
};

export const postBook = async (req, res) => {
  const book = req.body;
  const newBook = new Books({ ...book, createdAt: new Date().toISOString });
  try {
    await newBook.save();
    console.log("POST successful");
    res.send(201).json(newBook);
  } catch (error) {
    res.send(409).json({ message: error });
  }
};
