import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditPage() {
  const { id } = useParams();
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [businessName, setBusinessName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://failed-business.onrender.com/getuser/${id}`);
        console.log('Full Response:', response.data);

        // Assuming the response structure is { id, owner, name }
        setUserId(response.data.id || '');
        setUserName(response.data.owner || '');
        setBusinessName(response.data.name || '');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'id':
        setUserId(value);
        break;
      case 'name':
        setUserName(value);
        break;
      case 'owner':
        setBusinessName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Assuming your API supports the PUT request for updating data
      await axios.put(`https://failed-business.onrender.com/getuser/${id}`, {
        id: userId,
        owner: userName,
        name: businessName,
      });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" value={userId} onChange={handleInputChange} />
        <input type="text" name="name" placeholder="name" value={userName} onChange={handleInputChange} />
        <input type="text" name="owner" placeholder="owner" value={businessName} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditPage;
