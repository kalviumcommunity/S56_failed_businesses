import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [userData,setUserData] = useState([])
  const [token, setToken] = useState(null);

  const handleName = (e) => {
    setUsername(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() !== '' && pass.trim() !== '') {
      let currUserData = userData.filter((el)=>{
        return el.username == username
      })
      console.log(currUserData)
      if(currUserData.length>0){
        localStorage.setItem("User",username)
      }else{
        localStorage.setItem("User",username)
        axios.post('https://failed-business.onrender.com/auth', { username: username, password: pass })
          .then((res) => {
            console.log('Server Response:', res.data);
            const newToken = res.data;
            setToken(newToken);
            document.cookie = `username=${newToken}; expires=Sun, 1 Jan 2025 12:00:00 UTC; path=/;`;
            console.log(document.cookie);
          })
          .catch((error) => {
            console.error('Authentication failed:', error);
            alert('Authentication failed. Please check your credentials.');
          });
      }
    } else {
      alert('Username and password are required');
    }
  };
useEffect(()=>{
  const data = axios.get('https://failed-business.onrender.com/getuserdata').then((data)=>setUserData(data.data)).catch((err)=>console.log(err))
},[])
console.log(userData)
  const handleLogout = () => {
    setToken(null);
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    console.log('User logged out');
    window.location.reload()
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          Username: <input type="text" onChange={handleName} id="usernameInput" autoComplete="username" /><br />
          Password: <input type="password" onChange={handlePass} id="passwordInput" autoComplete="current-password" /><br />
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
