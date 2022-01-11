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
      state.bookList = action.payload
    }
  },
});

export const { addBook, allBooks } = bookListSlice.actions;

export const selectBookList = (state) => state.bookList.bookList;

export default bookListSlice.reducer;
