import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Contact/Contact.css"

const Contact = () => {
  return (
    <div className='contact-main'>
        <div className='contact-nav'>
            <Navbar />
        </div>
        <div className='contact-body'>
        <div className='contact-head'> 
        <div className='span-contact'><span id='comma'>"</span><span id='main-txt'>Contact</span><span id='comma'>"</span></div>
        </div>
        </div>
    </div>
  )
}

export default Contact
