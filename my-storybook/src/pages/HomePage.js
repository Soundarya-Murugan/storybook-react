import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../components/Book';

function HomePage() {
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", image: "https://images.unsplash.com/photo-1549653977-1c7b9a7a0db7" },
    { id: 2, title: "1984", author: "George Orwell", image: "https://images.unsplash.com/photo-1506748686213-d2b0ffef12ea" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "https://images.unsplash.com/photo-1524163142357-00a09ee9fe32" }
  ];

  return (
    <div className="home-page">
      <h2>Book List</h2>
      <div className="book-list">
        {books.map(book => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <Book title={book.title} author={book.author} image={book.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
