import express from "express";
import {
  deleteBook,
  getBooks,
  patchBook,
  postBook,
} from "../controllers/books.js";

const router = express();

router.get("/", getBooks);
router.post("/", postBook);
router.patch("/:id", patchBook);
router.delete("/:id", deleteBook);

export default router;
