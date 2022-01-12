import React from "react";
import {useDispatch} from "react-redux"
import { Button, Card, Row } from "react-bootstrap";
import { deleteBook } from "../actions/books";

function BookList({ setCurrentID, books }) {
  const dispatch = useDispatch()

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
              <Card.Text style={{fontSize: ".75em"}} >{book.author}</Card.Text>
              <Card.Text>{book.synopsis}</Card.Text>
              <Button onClick={()=>setCurrentID(book._id)} >Edit</Button>
              <Button onClick={()=>dispatch(deleteBook(book._id))} >Delete</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default BookList;
