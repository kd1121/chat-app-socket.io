import React from 'react'
import "../ChatRooms/ChatRooms.css"
import ListCard from '../ListCard/ListCard'

const ChatRooms = () => {
  return (
    <div className='rooms-main'>
      <div className='room-body'>
        <p className='rooms-header'>Chat Rooms</p>
        <div className='search-bar'>
        <input className='cta-txt search-input' type="text" placeholder='OP'></input>
                <button className="cta-ser">
                <span className='search-btn'>Search</span>
              </button>
        </div>
        <div className='rooms-list'>
          <div className='list-main'>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatRooms
