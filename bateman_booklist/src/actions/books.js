import * as api from "../api/books";
import {
  addBook,
  allBooks,
  editBook,
  removeBook,
} from "../store/bookListSlice";

export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await api.readBooks();
    dispatch(allBooks(data));
  } catch (error) {
    console.log(error);
  }
};

export const postBook = (book) => async (dispatch) => {
  try {
    const { data } = await api.createBook(book);
    dispatch(addBook(data));
  } catch (error) {}
};

export const patchBook = (id, updatedBook) => async (dispatch) => {
  try {
    const { data } = await api.updateBook(id, updatedBook);
    dispatch(editBook(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    await api.deleteBook(id);
    dispatch(removeBook(id));
  } catch (error) {
    console.log(error);
  }
};
