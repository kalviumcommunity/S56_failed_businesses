import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Login() {
    let [username,setName] = useState('')
    const [pass,setPass] = useState('')
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    const handleLogin = () => {
        if(username.trim!=='' && pass.trim()!==''){
            axios.post('https://failed-business.onrender.com/auth', { username:username }).then((res) => {
                const token = res.data;
                document.cookie = username=`${token}; expires=Sun, 1 Jan 2025 12:00:00 UTC;;`
                console.log(document.cookie);
        });
        } else {
            alert('Username and password are required');
        }
    };

    
  return (
    <div>
        Username : <input type="text" onChange={handleName} name="" id="" /><br/>
        Password : <input type="text" onChange={handlePass} name="" id="" /><br/>
        <button onClick={handleLogin}>Submit</button>
    </div>
  )
}

export default Login