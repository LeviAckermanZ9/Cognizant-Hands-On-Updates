import React from 'react';

const books = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
    { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
    { id: 3, title: 'Design Patterns', author: 'Erich Gamma' }
];

export const BookDetails = () => {
    return (
        <div style={{ padding: '15px', border: '2px solid #007ACC', margin: '10px 0', borderRadius: '8px', backgroundColor: '#f0f8ff', textAlign: 'left' }}>
            <h2 style={{ color: '#007ACC', marginTop: 0 }}>Book Details</h2>
            <ul>
                {books.map(book => (
                    // React key extracted for list rendering
                    <li key={book.id}><strong>{book.title}</strong> by {book.author}</li>
                ))}
            </ul>
        </div>
    );
};
