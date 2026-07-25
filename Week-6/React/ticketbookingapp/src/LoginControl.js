import React, { useState } from 'react';
import { GuestUser } from './GuestUser';
import { RegisteredUser } from './RegisteredUser';

export const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    // Element variables for conditional rendering
    let button;
    if (isLoggedIn) {
        button = <button onClick={handleLogoutClick} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}>Logout</button>;
    } else {
        button = <button onClick={handleLoginClick} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '4px' }}>Login</button>;
    }

    return (
        <div style={{ textAlign: 'center', margin: '40px auto', maxWidth: '600px' }}>
            <h1>Ticket Booking App</h1>
            
            {/* Render the appropriate toggle button */}
            <div style={{ marginBottom: '20px' }}>
                {button}
            </div>

            {/* Conditional Rendering of components */}
            {isLoggedIn ? <RegisteredUser /> : <GuestUser />}
        </div>
    );
};
