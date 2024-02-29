import data from "../assets/data.json";
import React from 'react';

let dataa = data.failedBusinesses;

function Data() {
  return (
    <div>
      {dataa.map(element => (
        <div key={element.id}>
          <h1>{element.id}</h1>
          <h1>{element.name}</h1>
          <h1>{element.owner}</h1>
        </div>
      ))}
    </div>
  );
}

export default Data;
