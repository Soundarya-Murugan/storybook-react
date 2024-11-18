import React from 'react';
import './Book.css';

function Book({ title, author, image }) {
  return (
    <div className="book">
      <img src={image} alt={title} className="book-image" />
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default Book;
