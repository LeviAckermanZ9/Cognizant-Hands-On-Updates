import React, { useState } from 'react';

export const CurrencyConvertor = () => {
    const [rupees, setRupees] = useState('');
    const [euros, setEuros] = useState(null);

    // Approximate conversion rate: 1 Euro = ~89 Rupees
    const CONVERSION_RATE = 89;

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent full page reload
        if (!rupees) return;
        
        const converted = parseFloat(rupees) / CONVERSION_RATE;
        setEuros(converted.toFixed(2));
    };

    return (
        <div style={{ border: '2px solid #ccc', padding: '20px', margin: '20px 0', borderRadius: '8px', textAlign: 'left' }}>
            <h2>4. Currency Convertor (INR to Euro)</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }}>Amount in Rupees (₹): </label>
                    <input 
                        type="number" 
                        value={rupees} 
                        onChange={(e) => setRupees(e.target.value)} 
                        placeholder="Enter amount"
                        required 
                        style={{ padding: '5px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '5px 15px', backgroundColor: '#007ACC', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Convert
                </button>
            </form>
            
            {euros !== null && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e6ffe6', borderLeft: '4px solid green' }}>
                    <h3 style={{ color: 'green', margin: 0 }}>
                        Equivalent Euros: €{euros}
                    </h3>
                </div>
            )}
        </div>
    );
};
