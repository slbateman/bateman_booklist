import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bookRouter from "./routes/books.js"
import testRouter from "./routes/tests.js"

const app = express()
const PORT = 5000
const CONNECTION = "mongodb://localhost/bookList"

mongoose.connect(CONNECTION, (err) => {
    if (err) throw err;
    console.log("connected to bookList database")
})

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', bookRouter)
app.use('/test', testRouter)

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})