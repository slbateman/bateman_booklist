import express from "express"
import mongoose from "mongoose"
import router from "./routes/books.js"

const app = express()
const PORT = 5000
const CONNECTION = ""

app.use(express.json())
app.use(express.urlencoded())

app.get('/', router)
app.post('/', router)

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})