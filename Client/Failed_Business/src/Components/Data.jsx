import React from 'react';
import data from '../assets/data.json';

function Data() {
  const failedBusinesses = data.failedBusinesses || [];

  return (
    <div>
      {failedBusinesses.map(element => (
        <div key={element.id}>
          <div>
            <strong>ID:</strong> {element.id}
          </div>
          <div>
            <strong>Name:</strong> {element.name}
          </div>
          <div>
            <strong>Owner:</strong> {element.owner}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Data;
