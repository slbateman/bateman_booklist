import express from "express"
import mongoose from "mongoose"
import router from "./routes/books.js"

const app = express()
const PORT = 5000
const CONNECTION = "mongodb://localhost/bookList"

mongoose.connect(CONNECTION, (err) => {
    if (err) throw err;
    console.log("connected to bookList database")
})

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})