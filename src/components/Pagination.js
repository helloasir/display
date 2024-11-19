import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages }) => {
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      // Navigate to the new page based on the page number
      navigate(`/page/${page}`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span style={{ margin: '0 10px' }}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
