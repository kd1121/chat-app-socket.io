import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../AboutUs/AboutUs.css"

const AboutUs = () => {
  return (
    <div className='about-main'>
      <div className='about-nav'>
        <Navbar />
      </div>
      <div className='about-body'>
      <div className='home-head'> 
        <div className='spaning'><span id='comma'>"</span><span id='main-txt'>About Us</span><span id='comma'>"</span></div>
      </div>
      </div>

      
    </div>
  )
}

export default AboutUs
