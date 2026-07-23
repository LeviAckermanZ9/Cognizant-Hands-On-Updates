import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  const ongoingDetails = [
      { label: "Start Date", value: "01-08-2026" },
      { label: "Track", value: "Java FSE" },
      { label: "Strength", value: "45 Students" }
  ];
  
  const completedDetails = [
      { label: "Start Date", value: "15-05-2026" },
      { label: "End Date", value: "30-06-2026" },
      { label: "Track", value: ".NET Full Stack" }
  ];

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Cognizant My Academy Dashboard</h2>
      <div style={{ marginTop: '20px' }}>
          <CohortDetails cohortName="Cohort A" cohortStatus="Ongoing" details={ongoingDetails} />
          <CohortDetails cohortName="Cohort B" cohortStatus="Completed" details={completedDetails} />
      </div>
    </div>
  );
}

export default App;
