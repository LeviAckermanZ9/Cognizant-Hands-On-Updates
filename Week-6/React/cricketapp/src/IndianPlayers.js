import React from 'react';

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

// Merge arrays using ES6 spread
const indianPlayers = [...T20Players, ...RanjiTrophyPlayers];

export const IndianPlayers = () => {
    // Destructuring ES6 array into Odd and Even teams
    const [odd1, even1, odd2, even2, odd3, even3] = indianPlayers;

    const oddTeam = [odd1, odd2, odd3];
    const evenTeam = [even1, even2, even3];

    return (
        <div style={{ textAlign: 'left', margin: '20px' }}>
            <h2>Indian Players</h2>
            
            <h3>Odd Team Players (Destructuring ES6)</h3>
            <ul>
                {oddTeam.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h3>Even Team Players (Destructuring ES6)</h3>
            <ul>
                {evenTeam.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h3>Merged All Players (Merge/Spread ES6)</h3>
            <ul>
                {indianPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
};
