import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohortName, cohortStatus, details }) => {
    
    // Style for <h3> element: "green" when ongoing, "blue" otherwise
    const h3Style = {
        color: cohortStatus.toLowerCase() === 'ongoing' ? 'green' : 'blue',
        margin: '10px 0'
    };

    return (
        <div className={styles.box}>
            <h3 style={h3Style}>{cohortName} - {cohortStatus}</h3>
            <dl>
                {details.map((item, index) => (
                    <React.Fragment key={index}>
                        <dt>{item.label}</dt>
                        <dd style={{ marginLeft: '10px', color: '#555' }}>{item.value}</dd>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    );
};

export default CohortDetails;
