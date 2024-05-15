import React, { useState } from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import UpdatePage from './Pages/UpdatePage';
import Navbar from './Components/Navbar.jsx';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [loginFormData, setLoginFormData] = useState({ username: '', password: '' });
  const [signupFormData, setSignupFormData] = useState({ username: '', password: '' });

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false); 
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({ ...signupFormData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth', loginFormData);
      if (response.status === 200) {
        console.log('Login successful');
        const { token } = response.data;
        document.cookie = `loginToken=${token};expires=Thu, 01 Jan 2070 00:00:00 GMT`;
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', signupFormData);
      if (response.status === 201) {
        console.log('Signup successful');
      } else {
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar openLoginModal={openLoginModal} openSignupModal={openSignupModal} />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/form' element={<UpdatePage />} />
        </Routes>
      </BrowserRouter>

      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeLoginModal}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label>Username:</label>
              <input type="text" name="username" value={loginFormData.username} onChange={handleLoginChange} />
              <label>Password:</label>
              <input type="password" name="password" value={loginFormData.password} onChange={handleLoginChange} />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}

      {showSignupModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeSignupModal}>&times;</span>
            <h2>Create Account</h2>
            <form onSubmit={handleSignupSubmit}>
              <label>Username:</label>
              <input type="text" name="username" value={signupFormData.username} onChange={handleSignupChange} />
              <label>Password:</label>
              <input type="password" name="password" value={signupFormData.password} onChange={handleSignupChange} />
              <button type="submit">Create Account</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
