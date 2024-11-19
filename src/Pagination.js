import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} style={{ margin: '0 5px' }}>
            <Link
              to={`/page/${index + 1}`}
              style={{
                textDecoration: 'none',
                color: currentPage === index + 1 ? 'red' : 'blue',
                fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
              }}
            >
              {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
