import React from 'react'
import "./banner.css"
import office from "../../assets/img/03.png"

function Banner() {
  return (
    <div className='banner'>
      <img src={office} alt="office" className='office'/>
        <p>Vereinfache deine Bildungserfahrung mit unseren <b><a href="/ourcourses"><span style={{ color: 'green', fontWeight: 'bold' }}>Intensiv-Online-Nachhilfekursen</span></a></b>.</p>
        
    </div>
  )
}

export default Banner