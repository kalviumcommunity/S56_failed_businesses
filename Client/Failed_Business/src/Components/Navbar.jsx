import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Stylesheets/Navbar.css";

function Navbar({ openLoginModal, openSignupModal }) {
  return (
    <nav>
      <h1>Failed Businesses</h1>
      <div className="searchbar">
        <input type="text" placeholder='Search' style={{ background: "white", height: "25px", width: "400px" }} />
        <button style={{ background: "white", height: "25px", width: "70px" }}>Search</button>
        <Link to={"/form"}><button style={{ background: "red", height: "25px", width: "70px" }}>Register</button></Link>
        <button onClick={openLoginModal} style={{ background: "blue", height: "25px", width: "70px" }}>Login</button>
        <button onClick={openSignupModal} style={{ background: "green", height: "25px", width: "100px" }}>Create Account</button>
      </div>
    </nav>
  );
}

export default Navbar;
