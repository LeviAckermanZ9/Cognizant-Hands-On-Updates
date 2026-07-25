import React, { useState } from 'react';

export const EventExamples = () => {
    const [counter, setCounter] = useState(0);

    // Multiple methods invoked by the Increment button
    const handleIncrement = () => {
        setCounter(prev => prev + 1);
        sayHello();
    };

    const handleDecrement = () => {
        setCounter(prev => prev - 1);
    };

    const sayHello = () => {
        alert("Hello! The counter has been incremented.");
    };

    // Passing arguments to event handler
    const sayWelcome = (message) => {
        alert(message);
    };

    // Synthetic event handler
    const onPress = (event) => {
        alert("I was clicked! Event Type: " + event.type);
    };

    return (
        <div style={{ border: '2px solid #ccc', padding: '20px', margin: '20px 0', borderRadius: '8px', textAlign: 'left' }}>
            <h2>1. Counter & Multiple Methods</h2>
            <p><strong>Counter Value: {counter}</strong></p>
            <button onClick={handleIncrement} style={{ marginRight: '10px', padding: '5px 10px' }}>Increment</button>
            <button onClick={handleDecrement} style={{ padding: '5px 10px' }}>Decrement</button>
            
            <hr style={{ margin: '20px 0' }} />

            <h2>2. Passing Arguments</h2>
            <button onClick={() => sayWelcome("Welcome to React Event Handling!")} style={{ padding: '5px 10px' }}>
                Say Welcome
            </button>

            <hr style={{ margin: '20px 0' }} />

            <h2>3. Synthetic Event</h2>
            <button onClick={onPress} style={{ padding: '5px 10px' }}>
                OnPress Event
            </button>
        </div>
    );
};
