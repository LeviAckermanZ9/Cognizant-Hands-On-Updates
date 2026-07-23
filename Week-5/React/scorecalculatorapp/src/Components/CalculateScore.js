import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
    return (decimal.toFixed(2) + '%');
}

const calcScore = (total, goal) => {
    return percentToDecimal((total / goal) * 100);
}

export const CalculateScore = ({ Name, School, Total, Goal }) => {
    return (
        <div className="formatstyle">
            <h1>Student Details</h1>
            <div className="details">
                <b>Name:</b>
                <span>{Name}</span>
            </div>
            <div className="details">
                <b>School:</b>
                <span>{School}</span>
            </div>
            <div className="details">
                <b>Total:</b>
                <span>{Total}</span>
            </div>
            <div className="details">
                <b>Score:</b>
                <span>{calcScore(Total, Goal)}</span>
            </div>
        </div>
    );
};
