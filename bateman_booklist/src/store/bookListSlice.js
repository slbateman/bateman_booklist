import { createSlice } from "@reduxjs/toolkit";

const bookList = [];

export const bookListSlice = createSlice({
  name: "bookList",
  initialState: {
    bookList,
  },
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    allBooks: (state, action) => {
      state.bookList = action.payload;
    },
    editBook: (state, action) => {
      state.bookList.map((book) => book._id === action.payload._id ? action.payload : book)
    },
    removeBook: (state, action) => {
      state.bookList.splice(
        state.bookList.findIndex((e) => e._id === action.payload),
        1
      );
    },
  },
});

export const { addBook, allBooks, editBook, removeBook } =
  bookListSlice.actions;

export const selectBookList = (state) => state.bookList.bookList;

export default bookListSlice.reducer;
