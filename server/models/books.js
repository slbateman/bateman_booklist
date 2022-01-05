import mongoose from "mongoose"

const book = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    synopsis: {type: String, required: true, default: ""}
})

const Books = mongoose.model("book", book)

export default Books