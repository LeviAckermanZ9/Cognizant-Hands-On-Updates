import React from 'react';

const courses = [
    { id: 'C1', name: 'Full Stack Java', duration: '12 Weeks' },
    { id: 'C2', name: 'React Development', duration: '6 Weeks' },
    { id: 'C3', name: 'Cloud Computing', duration: '8 Weeks' }
];

export const CourseDetails = () => {
    return (
        <div style={{ padding: '15px', border: '2px solid #f44336', margin: '10px 0', borderRadius: '8px', backgroundColor: '#ffebee', textAlign: 'left' }}>
            <h2 style={{ color: '#c62828', marginTop: 0 }}>Course Details</h2>
            <ul>
                {courses.map(course => (
                    // React key extracted for list rendering
                    <li key={course.id}><strong>{course.name}</strong> ({course.duration})</li>
                ))}
            </ul>
        </div>
    );
};
