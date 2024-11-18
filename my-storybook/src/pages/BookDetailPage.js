import React from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailPage.css';

function BookDetailPage() {
  const { id } = useParams();
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.", image: "https://images.penguinrandomhouse.com/cover/9780812976533" },
    { id: 2, title: "1984", author: "George Orwell", description: "A dystopian social science fiction novel and cautionary tale about the future.", image: "https://images.unsplash.com/photo-1506748686213-ty1314" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgf47KlgQcOmTUsb0s6sK5ssY8NbkrJyRzhUd6tcr-XftenwFkzR6ucNPxCaYFgiSCqA0&usqp=CAU" }
  ];

  const book = books.find(book => book.id === parseInt(id));

  return (
    <div className="book-detail">
      <h2>{book?.title}</h2>
      <img src={book?.image} alt={book?.title} className="book-image" />
      <p><strong>Author:</strong> {book?.author}</p>
      <p><strong>Description:</strong> {book?.description}</p>
    </div>
  );
}

export default BookDetailPage;
