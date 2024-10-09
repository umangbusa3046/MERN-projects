import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const EditBook = ({ books, updateBook }) => {
  const { id } = useParams(); // Get the book id from the URL
  const navigate = useNavigate(); // Hook to navigate to the home page
  const currentBook = books.find(book => book._id === id); // Find the book to edit
  const [updatedBook, setUpdatedBook] = useState(currentBook);

  useEffect(() => {
    if (currentBook) {
      setUpdatedBook(currentBook); // Initialize the form with current book data
    }
  }, [currentBook]);

  const handleChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(id, updatedBook); // Update the book
    navigate('/'); // Navigate to the home page after successful update
  };

  return currentBook ? (
    <Container>
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            name="title" 
            value={updatedBook.title} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formAuthor" className="mt-2">
          <Form.Label>Author</Form.Label>
          <Form.Control 
            type="text" 
            name="author" 
            value={updatedBook.author} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formYear" className="mt-2">
          <Form.Label>Year</Form.Label>
          <Form.Control 
            type="number" 
            name="year" 
            value={updatedBook.year} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Update Book
        </Button>
      </Form>
    </Container>
  ) : (
    <p>Book not found</p>
  );
};

export default EditBook;
