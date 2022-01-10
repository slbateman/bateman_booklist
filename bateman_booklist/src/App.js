import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBookList, updateBookList } from "./store/bookListSlice";
import BookInput from "./components/BookInput";
import BookList from "./components/BookList";
import * as testAPI from "./api/tests";

function App() {
  const books = useSelector(selectBookList);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const newBook = (e) => {
    dispatch(
      updateBookList({
        title: title,
        author: author,
        synopsis: synopsis,
      })
    );
    setTitle("");
    setAuthor("");
    setSynopsis("");
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => testAPI.getTest()}>Test Get</button>
        <button onClick={() => testAPI.postTest()}>Test Post</button>
      </div>
      <div className="App">
        <BookInput
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          synopsis={synopsis}
          setSynopsis={setSynopsis}
          newBook={newBook}
        />
        <BookList books={books} />
      </div>
    </>
  );
}

export default App;
