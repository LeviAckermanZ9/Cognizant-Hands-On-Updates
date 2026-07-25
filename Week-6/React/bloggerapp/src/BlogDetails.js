import React from 'react';

const blogs = [
    { id: 101, title: 'React Hooks Explained', category: 'Frontend' },
    { id: 102, title: 'Understanding ES6', category: 'JavaScript' },
    { id: 103, title: 'Mastering CSS Grid', category: 'Design' }
];

export const BlogDetails = () => {
    return (
        <div style={{ padding: '15px', border: '2px solid #4CAF50', margin: '10px 0', borderRadius: '8px', backgroundColor: '#e8f5e9', textAlign: 'left' }}>
            <h2 style={{ color: '#2e7d32', marginTop: 0 }}>Blog Details</h2>
            <ul>
                {blogs.map(blog => (
                    // React key extracted for list rendering
                    <li key={blog.id}><strong>{blog.title}</strong> - {blog.category}</li>
                ))}
            </ul>
        </div>
    );
};
