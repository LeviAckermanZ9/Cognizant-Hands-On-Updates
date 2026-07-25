import React from 'react';

export const RegisteredUser = () => {
    return (
        <div style={{ padding: '20px', border: '2px solid #4CAF50', marginTop: '20px', borderRadius: '10px', backgroundColor: '#e8f5e9' }}>
            <h2 style={{ color: '#2e7d32' }}>Welcome User!</h2>
            <p>You are successfully logged in. Here are your flight booking details:</p>
            
            <div style={{ border: '1px solid #ccc', padding: '15px', backgroundColor: '#fff', borderRadius: '5px', textAlign: 'left', display: 'inline-block' }}>
                <p><strong>Booking ID:</strong> #AB12345</p>
                <p><strong>Flight:</strong> AI-101: Delhi to Mumbai (Confirmed)</p>
                <p><strong>Departure:</strong> 10:00 AM</p>
            </div>
            <br />
            <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}>
                Book Another Ticket
            </button>
        </div>
    );
};
