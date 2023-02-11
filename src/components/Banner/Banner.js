import React from 'react'
import "./banner.css"
import businessLady from "../../assets/img/businesslady.png"

function Banner() {
  return (
    <div className='banner'>
        <p>Bestehe deine Betriebswirtschaftsprüfung mit unseren umfassenden Lernnotizen - Hole sie dir jetzt!</p>
        <img src={businessLady} alt="business lady" className='businesslady'/>
    </div>
  )
}

export default Banner