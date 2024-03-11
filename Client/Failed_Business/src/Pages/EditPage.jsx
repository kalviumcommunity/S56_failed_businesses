import React from 'react'
import Navbar from '../Components/Navbar'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function EditPage() {
    const {id} = useParams()
    const [userId,setUserId] = useState("")
    const [userName,setUserName] = useState("")
    const [businessName,setBusinessName] = useState("")
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://failed-business.onrender.com/getuser/:id');
            setUserId(response.data.id);
            setUserName(response.data.owner)
            setBusinessName(response.data.name)
            console.log(response.data.id)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      console.log(userId)
      const handleSubmit=(event)=>{
        event.preventDefault()
        axios.put('https://failed-business.onrender.com/getuser/:id',{userId,userName,businessName}).then(result=>(console.log(result))).catch(err=>console.log(error))
      }
  return (
    <div>
         <Navbar/>
        <input type="text" name="" id="" placeholder='id' value={userId}/>
        <input type="text" name="" id="" placeholder='name'value={userName}/>
        <input type="text" name="" id="" placeholder='owner'value={businessName}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default EditPage