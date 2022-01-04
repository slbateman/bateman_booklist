import { useState } from "react";
import { Form, Button, Card, Row } from "react-bootstrap";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const updateBookList = (e) => {
    setBooks([
      ...books,
      {
        title: title,
        author: author,
        synopsis: synopsis,
      },
    ]);
    setTitle("");
    setAuthor("");
    setSynopsis("");
  };

  return (
    <>
      <div className="App">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            updateBookList();
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
      <div>
        <Row>
          {books.map((book, index) => (
            <Card className="book-card" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{index + 1}</Card.Title>
                <Card.Title>
                  <h2>{book.title}</h2>
                </Card.Title>
                <Card.Text>
                  <h3>{book.author}</h3>
                </Card.Text>
                <Card.Text>{book.synopsis}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
    </>
  );
}

export default App;
