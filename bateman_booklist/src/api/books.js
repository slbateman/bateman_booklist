import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000/api"})

export const readBooks = () => API.get('/')
export const createBook = (book) => API.post('/', book)
export const updateBook = (id, updatedBook) => API.patch(`/${id}`, updatedBook)
export const deleteBook = (id) => API.delete(`/${id}`)