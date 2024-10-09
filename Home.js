import React from 'react';
import { Card, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = ({ books, deleteBook }) => {
  const navigate = useNavigate(); 

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      deleteBook(id);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); 
  };

  return (
    <Container className="mt-4">
      {books.length === 0 ? (
        <Alert variant="info">No books available. Please add some books.</Alert>
      ) : (
        <Row>
          {books.map((book) => (
            <Col key={book._id} sm={12} md={6} lg={4} className="my-3">
              <Card>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Author: {book.author}</Card.Text>
                  <Card.Text>Year: {book.year}</Card.Text>
                  <Button 
                    variant="primary" 
                    className="me-2"
                    onClick={() => handleEdit(book._id)}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home;
