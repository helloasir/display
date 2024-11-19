import React from 'react';
import { useParams } from 'react-router-dom';
import webs from './data/webs.json';

const DomainPage = () => {
  const { domain } = useParams();
  const web = webs.find((web) => web.Domain === domain);

  if (!web) {
    return <h1>Domain not found</h1>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Details for {web.Domain}</h1>
      <table style={{ margin: '0 auto', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Domain</th>
            <th>Data 1</th>
            <th>Data 2</th>
            <th>Data 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{web.Rank}</td>
            <td>{web.Domain}</td>
            <td>{web.data1}</td>
            <td>{web.data2}</td>
            <td>{web.data3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DomainPage;
