import React from "react";
import { Card, Row } from "react-bootstrap";

function BookList({ books }) {
  return (
    <div>
      <Row>
        {books.map((book, index) => (
          <Card
            className="book-card"
            key={`bookCard${index}`}
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>{index + 1}</Card.Title>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.author}</Card.Text>
              <Card.Text>{book.synopsis}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default BookList;
