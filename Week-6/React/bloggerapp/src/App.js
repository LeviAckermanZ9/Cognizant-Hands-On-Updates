import React, { useState } from 'react';
import './App.css';
import { BookDetails } from './BookDetails';
import { BlogDetails } from './BlogDetails';
import { CourseDetails } from './CourseDetails';

function App() {
  const [activeView, setActiveView] = useState('books');

  // 1. Conditional Rendering using Element Variables
  let elementVariableView;
  if (activeView === 'books') {
      elementVariableView = <BookDetails />;
  } else if (activeView === 'blogs') {
      elementVariableView = <BlogDetails />;
  } else {
      elementVariableView = <CourseDetails />;
  }

  // 2. Conditional Rendering using IF/ELSE returning early (Helper Function)
  const renderIfElse = () => {
      if (activeView === 'books') return <BookDetails />;
      if (activeView === 'blogs') return <BlogDetails />;
      return <CourseDetails />;
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
      <h1>Blogger App Dashboard</h1>
      <p>Select a view to see Conditional Rendering in action:</p>
      <div style={{ marginBottom: '30px' }}>
          <button onClick={() => setActiveView('books')} style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007ACC', color: 'white', border: 'none', borderRadius: '4px' }}>Show Books</button>
          <button onClick={() => setActiveView('blogs')} style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>Show Blogs</button>
          <button onClick={() => setActiveView('courses')} style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}>Show Courses</button>
      </div>
      
      <hr />
      <h3 style={{ textAlign: 'left', color: '#555' }}>Method 1: Element Variables</h3>
      {elementVariableView}
      
      <hr />
      <h3 style={{ textAlign: 'left', color: '#555' }}>Method 2: If/Else (Helper Function)</h3>
      {renderIfElse()}
      
      <hr />
      <h3 style={{ textAlign: 'left', color: '#555' }}>Method 3: Ternary Operator</h3>
      { activeView === 'books' ? <BookDetails /> : (activeView === 'blogs' ? <BlogDetails /> : <CourseDetails />) }
      
      <hr />
      <h3 style={{ textAlign: 'left', color: '#555' }}>Method 4: Logical && Operator</h3>
      { activeView === 'books' && <BookDetails /> }
      { activeView === 'blogs' && <BlogDetails /> }
      { activeView === 'courses' && <CourseDetails /> }

    </div>
  );
}

export default App;
