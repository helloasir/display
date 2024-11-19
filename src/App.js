import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DomainDetailPage from './DomainDetailPage'; // Assuming this component exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page/:pageNumber" element={<HomePage />} /> {/* Handle pagination */}
        <Route path="/domain/:domainValue" element={<DomainDetailPage />} /> {/* Handle domain details */}
      </Routes>
    </Router>
  );
}

export default App;
