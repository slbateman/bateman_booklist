import express from "express";
import { getBooks, postBook } from "../controllers/books.js";

const router = express();

router.get("/get", getBooks);
router.post("/post", postBook);

export default router;
