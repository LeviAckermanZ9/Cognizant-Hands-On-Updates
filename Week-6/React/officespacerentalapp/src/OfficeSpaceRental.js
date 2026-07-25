import React from 'react';

const officeSpaces = [
    {
        name: "DBS",
        rent: 50000,
        address: "Chennai"
    },
    {
        name: "Cognizant",
        rent: 75000,
        address: "Bangalore"
    },
    {
        name: "TCS",
        rent: 60000,
        address: "Hyderabad"
    }
];

export const OfficeSpaceRental = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'left', maxWidth: '600px', margin: 'auto' }}>
            <h1 style={{ textAlign: 'center' }}>Office Space Rental App</h1>
            
            <div style={{ textAlign: 'center' }}>
                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" 
                    alt="Office Space"
                    style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }}
                />
            </div>

            <h2>Available Office Spaces</h2>
            
            {/* Loop through the office space items to display data */}
            {officeSpaces.map((office, index) => {
                // Apply inline CSS conditionally
                const rentColor = office.rent <= 60000 ? 'red' : 'green';

                return (
                    <div key={index} style={{ border: '1px solid #ccc', margin: '15px 0', padding: '15px', borderRadius: '8px' }}>
                        <h3>Name: {office.name}</h3>
                        <p style={{ color: rentColor, fontWeight: 'bold' }}>
                            Rent: ₹{office.rent}
                        </p>
                        <p>Address: {office.address}</p>
                    </div>
                );
            })}
        </div>
    );
};
