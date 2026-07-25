import React from 'react';
import './App.css';
import { EventExamples } from './EventExamples';
import { CurrencyConvertor } from './CurrencyConvertor';

function App() {
  return (
    <div className="App" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>React Events Hands-on Lab</h1>
      <EventExamples />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
