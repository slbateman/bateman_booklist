import * as api from "../api/books"
import {addBook, allBooks} from "../store/bookListSlice"

export const getBooks = () => async (dispatch) => {
    try {
        const {data} = await api.readBooks()
        dispatch(allBooks(data))
    } catch (error) {
        console.log(error)
    }
}

export const postBook = (book) => async (dispatch) => {
    try {
        const { data } = await api.createBook(book)
        dispatch(addBook(data))
    } catch (error) {
        
    }
}