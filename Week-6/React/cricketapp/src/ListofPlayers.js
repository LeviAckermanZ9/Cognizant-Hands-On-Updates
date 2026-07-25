import React from 'react';

const players = [
    { name: 'Sachin', score: 100 },
    { name: 'Virat', score: 120 },
    { name: 'Dhoni', score: 85 },
    { name: 'Rohit', score: 65 },
    { name: 'Yuvraj', score: 50 },
    { name: 'Raina', score: 45 },
    { name: 'Dravid', score: 110 },
    { name: 'Sehwag', score: 80 },
    { name: 'Gambhir', score: 68 },
    { name: 'Ashwin', score: 30 },
    { name: 'Jadeja', score: 40 }
];

export const ListofPlayers = () => {
    // Filter players with scores below 70 using ES6 arrow functions
    const below70 = players.filter(p => p.score < 70);

    return (
        <div style={{ textAlign: 'left', margin: '20px' }}>
            <h2>List of All Players (Map ES6)</h2>
            <ul>
                {players.map((p, index) => (
                    <li key={index}>Mr. {p.name} - Score: {p.score}</li>
                ))}
            </ul>

            <h2>Players with Scores Below 70 (Filter ES6)</h2>
            <ul>
                {below70.map((p, index) => (
                    <li key={index}>Mr. {p.name} - Score: {p.score}</li>
                ))}
            </ul>
        </div>
    );
};
