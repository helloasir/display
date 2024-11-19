import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  // Generate an array of page numbers based on current page
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calculate the range of page numbers to show around the current page
  const range = (start, end) => {
    return pageNumbers.filter((number) => number >= start && number <= end);
  };

  const startPage = currentPage - 2 > 0 ? currentPage - 2 : 1;
  const endPage = currentPage + 2 <= totalPages ? currentPage + 2 : totalPages;

  const displayPages = range(startPage, endPage);

  return (
    <div>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <li>
          {/* "Previous" Button */}
          <Link
            to={`/page/${currentPage - 1}`}
            style={{
              textDecoration: 'none',
              color: currentPage > 1 ? '#007bff' : '#ccc',
              fontWeight: currentPage > 1 ? 'bold' : 'normal',
            }}
            disabled={currentPage <= 1}
          >
            Previous
          </Link>
        </li>

        {/* Page Numbers */}
        {displayPages.map((page) => (
          <li key={page} style={{ margin: '0 5px' }}>
            <Link
              to={`/page/${page}`}
              style={{
                textDecoration: 'none',
                color: currentPage === page ? 'red' : '#007bff',
                fontWeight: currentPage === page ? 'bold' : 'normal',
              }}
            >
              {page}
            </Link>
          </li>
        ))}

        <li>
          {/* "Next" Button */}
          <Link
            to={`/page/${currentPage + 1}`}
            style={{
              textDecoration: 'none',
              color: currentPage < totalPages ? '#007bff' : '#ccc',
              fontWeight: currentPage < totalPages ? 'bold' : 'normal',
            }}
            disabled={currentPage >= totalPages}
          >
            Next
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
