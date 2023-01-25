import React from 'react'
import {Link} from "react-router-dom"
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div className='main-div'>
        <div className='nav-div'>

        <Link id='hm-id' className='link-route-head' to='/'>AR<span id='span-e'>e</span>NA</Link>
        <Link className='link-route' to='/about-us'>About Us</Link>
        <Link className='link-route' to='/contact'>Contact</Link>
        </div>
      
    </div>
  )
}

export default Navbar
