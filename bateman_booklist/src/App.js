import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBookList } from "./store/bookListSlice";
import BookInput from "./components/BookInput";
import BookList from "./components/BookList";
// import * as testAPI from "./api/tests";
import { getBooks } from "./actions/books";

function App() {
  const books = useSelector(selectBookList);
  const dispatch = useDispatch();
  const [currentID, setCurrentID] = useState(0);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <BookInput
          currentID={currentID}
          setCurrentID={setCurrentID}
          books={books}
        />
        <BookList setCurrentID={setCurrentID} books={books} />
      </div>
    </>
  );
}

export default App;
