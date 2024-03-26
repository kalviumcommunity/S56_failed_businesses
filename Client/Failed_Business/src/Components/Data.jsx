import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EditPage from '../Pages/EditPage';

const UserDataComponent = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState("All");
  const [mydata,setMydata] = useState([])
  // const id = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://failed-business.onrender.com/getuser');
        setUserData(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(()=>{
    const data = axios.get('https://failed-business.onrender.com/getuserdata').then((data)=>setMydata(data.data)).catch((err)=>console.log(err))
  },[])
  console.log(mydata)
  const handleEdit = () => {
    console.log(userData);
  };

  const handleDelete = async (userId) => {
     
    try {
      // setSelectedId(userId);
      console.log(userId,'user')
      let data = await axios.delete(`https://failed-business.onrender.com/delete/${userId}`)
      console.log(data)
      window.location.reload()
      // setUserData(prevUserData => prevUserData.filter(user => user._id !== userId));
      // setSelectedId(null);
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Error deleting user');
    }
  };
  let filteredData = selectedId === "All" ?  userData : userData.filter((el)=>{
    if(el.created_by===selectedId){
      return el;
    }
  })
  return (
    <div>
        <select onChange={(e)=>{setSelectedId(e.target.value)}}>
          <option value="All">All Data</option>
          {mydata.map((el,i)=>{
            return <option key={i}>{el.username}</option>
          })}
        </select>
      {error && <p>{error}</p>}
      {filteredData.map((user, i) => (
        <div key={i} style={{ border: '2px solid black', margin: '5px' }}>
          <p>Name: {user.name}</p>
          <p>Owner: {user.owner}</p>
          <Link to={`/edit/${user._id}`}>
            <button onClick={handleEdit}>EDIT</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default UserDataComponent;
