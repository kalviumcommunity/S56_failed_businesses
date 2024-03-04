import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDataComponent = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://failed-business.onrender.com/getuser');
        setUserData(response.data);
        console.log(response.data)
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    {error && <p>{error}</p>}
    {userData.map((user) => (
      <div key={user.id} style={{border:"2px solid black",margin:"5px"}}>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Owner: {user.owner}</p>
      </div>
    ))}
  </div>
  );
};

export default UserDataComponent;
