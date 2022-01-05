import express from "express";
import { getBooks, postBook } from "../controllers/books.js";

const router = express();

router.get("/", getBooks);
router.post("/", postBook);

export default router;
