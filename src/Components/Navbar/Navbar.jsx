import React from 'react'
import{ NavLink } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
    return (
        <>
        <div className="construction__navbar-main">
            <div className="construction__navbar-logo">
                <p>CONSTRUCTION</p>
            </div>
            <div className="construction__navbar-links">
               <a href="">Home</a>
               <a href="">About us</a>
               <a href="">Services</a>
               <a href="">Projects</a>
            </div>
            </div>
        </>
    )
}

export default Navbar
