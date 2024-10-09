import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const AddBook = ({ addBook }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(newBook); 
    navigate('/'); 
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            name="title" 
            placeholder="enter book title"
            value={newBook.title} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formAuthor" className="mt-2">
          <Form.Label>Author</Form.Label>
          <Form.Control 
            type="text" 
            name="author" 
            placeholder="enter author name"
            value={newBook.author} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formYear" className="mt-2">
          <Form.Label>Year</Form.Label>
          <Form.Control 
            type="number" 
            name="year" 
            placeholder="enter publish year"
            value={newBook.year} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Add Book
        </Button>
      </Form>
    </Container>
  );
};

export default AddBook;
