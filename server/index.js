import express from "express"
const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded())

app.get('/get', (req, res) => {
    try {
        console.log("GET successful")
        res.send("GET successful")
    } catch (error) {
        res.send(error)
    }
})

app.post('/post', (req, res) => {
    try {
        console.log("POST successful")
        res.send("POST successful")
    } catch (error) {
        res.send(error)
    }
})

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})