import React from 'react'
import "../Stylesheets/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
        <h1> Failed Businesses </h1>
        <div className="searchbar">
        <input type="text" placeholder='Search'  style={{background:"white",height:"25px",width:"400px"}} />
        <button  style={{background:"white",height:"25px",width:"70px"}}>Search</button>
        <Link to={"/form"}> <button style={{background:"red",height:"25px",width:"70px"}}>Register</button> </Link>
        </div>
        </nav>
    </div>
  )
}

export default Navbar