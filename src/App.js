import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import DomainPage from './DomainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page/:pageNumber" element={<Homepage />} />
        <Route path="/domain/:domain" element={<DomainPage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
