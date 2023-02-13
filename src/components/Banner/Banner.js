import React from 'react'
import "./banner.css"
import office from "../../assets/img/03.png"

function Banner() {
  return (
    <div className='banner'>
      <img src={office} alt="office" className='office'/>
        <p>Vereinfache deine Bildungserfahrung mit unseren <b><span style={{ color: 'green', fontWeight: 'bold' }}>Intensiv-Online-Nachhilfekursen</span></b>.</p>
        
    </div>
  )
}

export default Banner