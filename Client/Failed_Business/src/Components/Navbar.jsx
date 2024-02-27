import React from 'react'
import "../Stylesheets/Navbar.css"

function Navbar() {
  return (
    <div>
        <nav>
        <h1> Failed Businesses </h1>
        <div className="searchbar">
        <input type="text" placeholder='Search' />
        <button>Search</button>
        </div>
        </nav>
    </div>
  )
}

export default Navbar