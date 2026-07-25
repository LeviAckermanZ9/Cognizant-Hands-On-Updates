import React from 'react';

export const GuestUser = () => {
    return (
        <div style={{ padding: '20px', border: '2px solid #ffcc00', marginTop: '20px', borderRadius: '10px', backgroundColor: '#fff9e6' }}>
            <h2 style={{ color: '#d4aa00' }}>Welcome Guest User</h2>
            <p>You can freely browse the available flight details below.</p>
            
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                <li>Flight AI-101: Delhi to Mumbai</li>
                <li>Flight AI-202: Mumbai to Chennai</li>
                <li>Flight AI-303: Bangalore to Delhi</li>
            </ul>

            <p style={{ color: 'red', fontWeight: 'bold', marginTop: '20px' }}>
                Please sign up or login to book tickets!
            </p>
        </div>
    );
};
