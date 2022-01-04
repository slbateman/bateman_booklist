import { createSlice } from "@reduxjs/toolkit";

const bookList = [];

export const bookListSlice = createSlice({
  name: "bookList",
  initialState: {
    bookList,
  },
  reducers: {
    updateBookList: (state, action) => {
      state.bookList.push(action.payload);
    },
  },
});

export const { updateBookList } = bookListSlice.actions;

export const selectBookList = (state) => state.bookList.bookList;

export default bookListSlice.reducer;
