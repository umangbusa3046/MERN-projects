import React from 'react';
import { Link } from 'react-router-dom';
import './CardComponent.css';
const BookList = ({ books, handleDelete }) => {
    return (
        <ul className="list-group">
            {books.map(book => (
                <div className="row ">
                    <div className="col-md-4 my-2">
                        <div className="card card-group">
                            <img src={book.coverImage || "data:image/jpeg;base64,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"} className="card-img-top" alt="Book Cover" />
                            <div className="card-body">
                                <h2 className="card-title">{book.title}</h2>
                                <h5 className="card-body">Author:{book.author}</h5>
                                <h4 className='card-body'>Price:{book.price}</h4>
                                <p className='card-body'>Details:{book.detail}</p>  
                                <div className="d-flex justify-content-between">
                                    <Link to={`/edit/${book.id}`} className="btn btn-primary">Edit</Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            ))}
        </ul>
    );
};

export default BookList;