import React from 'react'
import "../ListCard/ListCard.css"

const ListCard = () => {
  return (
    <div className='list-card-main'>
        <div className='card-body'>
           <h2>OPName of Room</h2>
           <button className="cta-join">
                <span className='join-btn'>Join</span>
              </button>
        </div>
      
    </div>
  )
}

export default ListCard
