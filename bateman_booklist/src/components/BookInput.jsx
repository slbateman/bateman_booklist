import React from "react";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { patchBook, postBook } from "../actions/books";

function BookInput({ currentID, setCurrentID, books }) {
  const dispatch = useDispatch();

  const bookObj = {
    title: "",
    author: "",
    synopsis: "",
  };
  const [bookData, setBookData] = useState(bookObj);

  const foundBook = books.find((e) => e._id === currentID);

  const clear = () => {
    setCurrentID(0);
    setBookData(bookObj);
  };

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentID === 0) {
      dispatch(postBook(bookData));
    } else {
      dispatch(patchBook(currentID, bookData));
    }
    clear();
  };

  useEffect(() => {
    if (foundBook) setBookData(foundBook)
  }, [foundBook])

  return (
    
    <div className="book-input">
      <h1>{currentID===0 ? "Add New Book" : `Editing: ${foundBook.title}` }</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <h5>Title</h5>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Title"
            name="title"
            value={bookData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <h5>Author</h5>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author Name"
            name="author"
            value={bookData.author}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <h5>Synopsis</h5>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Synopsis"
            name="synopsis"
            value={bookData.synopsis}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BookInput;
