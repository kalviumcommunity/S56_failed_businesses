import React from 'react'
import { useState } from 'react'

function Login() {
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    const handleSubmit = () => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        document.cookie = `username=${name}; expires=${expirationDate.toUTCString()}; path=/`;
        window.location.reload()
    };
    
  return (
    <div>
        Username : <input type="text" onChange={handleName} name="" id="" /><br/>
        Password : <input type="text" onChange={handlePass} name="" id="" /><br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login