import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useDispatch} from "react-redux"
import { postBook } from "../actions/books";

function BookInput() {

  const dispatch = useDispatch()

  const [bookData, setBookData] = useState()
  const handleChange = (e) => {
    setBookData({...bookData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postBook(bookData))
    e.target.title.value = ""
    e.target.author.value = ""
    e.target.synopsis.value = ""
  }

  return (
    <div className="book-input">
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <h5>Title</h5>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Title"
            name="title"
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
