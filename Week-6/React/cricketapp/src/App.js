import React, { useState } from 'react';
import './App.css';
import { ListofPlayers } from './ListofPlayers';
import { IndianPlayers } from './IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Cricket App</h1>
      <button 
        onClick={() => setFlag(!flag)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Toggle Flag (Currently {flag ? 'true' : 'false'})
      </button>
      <hr style={{ margin: '20px 0' }} />
      
      {/* Display components using simple if/else logic on flag */}
      {flag ? (
        <ListofPlayers />
      ) : (
        <IndianPlayers />
      )}
    </div>
  );
}

export default App;
