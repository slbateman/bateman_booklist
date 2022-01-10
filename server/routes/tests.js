import express from "express"
import { getTest, postTest } from "../controllers/tests.js"

const router = express ();

router.get("/", getTest)
router.post("/", postTest)

export default router