import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../data/webs.json';
import Pagination from './Pagination';

const HomePage = () => {
  const { pageNumber } = useParams(); // Extract page number from the URL
  const navigate = useNavigate();

  const [gridData, setGridData] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(pageNumber) || 1);
  const rowsPerPage = 100;

  useEffect(() => {
    console.log("Loading data...");
    const expandedData = [];
    for (let i = 0; i < 1000; i++) {
      expandedData.push(
        ...data.map((row, index) => ({
          ...row,
          Rank: i * data.length + index + 1,
        }))
      );
    }
    console.log("Data loaded: ", expandedData.length); // Log the length of the expanded data
    setGridData(expandedData);
  }, []);

  // Update current page when pageNumber changes in the URL
  useEffect(() => {
    setCurrentPage(parseInt(pageNumber) || 1);
  }, [pageNumber]);

  // Pagination logic
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = gridData.slice(startIndex, startIndex + rowsPerPage);
  const totalPages = Math.ceil(gridData.length / rowsPerPage);

  const columnDefs = [
    { field: 'Rank', sortable: true, filter: true },
    {
      field: 'Domain',
      sortable: true,
      filter: true,
      cellRenderer: (params) => {
        const link = document.createElement('a');
        link.href = `#`;
        link.textContent = params.value;
        link.style.color = '#007bff';
        link.style.cursor = 'pointer';
        link.style.textDecoration = 'underline';

        // Add click handler to navigate to the domain details page
        link.addEventListener('click', () => {
          console.log(`Navigating to: /domain/${params.value}`); // Log navigation
          navigate(`/domain/${params.value}`);
        });

        return link;
      },
    },
  ];

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div
        className="ag-theme-alpine"
        style={{
          height: '500px',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {gridData.length > 0 ? (
          <AgGridReact
            rowData={currentData}
            columnDefs={columnDefs}
            pagination={false}
            domLayout="autoHeight"
          />
        ) : (
          <p>Loading data...</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default HomePage;
