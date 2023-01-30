import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "../Home/Home.css"

const Home = () => {

  return (
    <div className='home-main'>
        <div className='home-nav'>
            <Navbar/>
        </div>
        <div className='home-body'>
          <div className='wlcm-txt'>
            <h2 className='home-head'>Hey! Welcome to Chat AR<span className='style-e'>é</span>NA</h2>
            <p className='ani-txt'>Let's</p>
            <p className='span-txt'><span className='animated-txt'></span></p>
            {/* <p>together.</p> */}
          </div>
        
          <div class="goto-wrapper">
            <Link className='goto-chat-room-btn' to='chat-rooms'>
              <button class="cta">
                <span>Chat Rooms</span>

              </button>
            </Link>
          </div>
            {/* <Link to='chat-rooms'><button className='goto-btn-home btn-6'><span>Goto Chat Rooms</span></button></Link><br /> */}
            <div className='create-new'>
              <p className='create-new-txt'>Or wanna create new one</p>
            </div>

            <div className='create-room-main'>
              <div className='create-room-body'>  
                <input className='cta-txt-home' type="text"></input>
                <Link className='create-room-btn' to='/room:id'>
                <button className="cta">
                <span>Create Room</span>
              </button>
                </Link>


              </div>
            </div>
            
        </div>
        
        

    </div>
  )
}

export default Home
