import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DomainDetails from './components/DomainDetails';

const App = () => {
  return (
    
    <Router>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/domain/:domain" element={<DomainDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
