import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Pagination from './Pagination';
import webs from './data/webs.json';

const Homepage = () => {
  const { pageNumber = 1 } = useParams();
  const itemsPerPage = 100;
  const totalItems = webs.length;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const currentData = webs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Websites</h1>
      <table style={{ margin: '0 auto', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((web, index) => (
            <tr key={index}>
              <td>{web.Rank}</td>
              <td>
                <Link to={`/domain/${web.Domain}`}>{web.Domain}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={parseInt(pageNumber)} totalItems={totalItems} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default Homepage;
