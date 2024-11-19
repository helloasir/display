import React from 'react';
import { useParams } from 'react-router-dom';
import webs from './data/webs.json';
import './DomainPage.css'; // Import the new CSS file


const DomainPage = () => {
  const { domain } = useParams();
  const web = webs.find((web) => web.Domain === domain);

  if (!web) {
    return <h1>Domain not found</h1>;
  }

  return (
    <div className="domain-container">
      <h1 className="domain-title">Details for {web.Domain}</h1>
      <table className="domain-table">
        <tbody>
          <tr>
            <th>Rank</th>
            <td>{web.Rank}</td>
          </tr>
          <tr>
            <th>Domain</th>
            <td>{web.Domain}</td>
          </tr>
          <tr>
            <th>Data 1</th>
            <td>{web.data1}</td>
          </tr>
          <tr>
            <th>Data 2</th>
            <td>{web.data2}</td>
          </tr>
          <tr>
            <th>Data 3</th>
            <td>{web.data3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DomainPage;
