import React from "react";
import { Form, Button } from "react-bootstrap";

function BookInput({ title, setTitle, author, setAuthor, synopsis, setSynopsis, newBook }) {
  return (
    <div className="book-input">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          newBook();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <h5>Title</h5>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <h5>Author</h5>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author Name"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
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
            value={synopsis}
            onChange={(e) => {
              setSynopsis(e.target.value);
            }}
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
