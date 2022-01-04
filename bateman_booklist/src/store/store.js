import { configureStore } from "@reduxjs/toolkit"
import bookListReducer from "./bookListSlice";

const store = configureStore({
  reducer: {
    bookList: bookListReducer,
  },
});

export default store