import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [id, setId] = useState('');
  const [data,setData] = useState([])

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleOwner = (event) => {
    setOwner(event.target.value);
  };
  const handleId = (event) => {
    setId(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
   
    var myData = {id,name,owner}
   console.log(myData)
    axios
      .post('https://failed-business.onrender.com/updateuser',myData)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };


  return (
    <div>
        <input
          type="number"
          value={id}
          onChange={handleId}
          placeholder={'Enter Id'}
        />
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder={'Enter Business Name'}
      />
      <input
        type="text"
        value={owner}
        onChange={handleOwner}
        placeholder={'Enter Owner Name'}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
