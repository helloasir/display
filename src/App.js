import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DomainPage from './DomainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page/:pageNumber" element={<HomePage />} />
        <Route path="/domain/:domain" element={<DomainPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
