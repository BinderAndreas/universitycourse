import React from 'react'
import "./infoarea.css"
import overview from "../../assets/img/overview.png"


function InfoArea() {
  return (
    <div className='info-area'>
        <div className='headline'>
        <h1>Das bieten wir:</h1>
        </div>
        <img className='overview' src={overview} alt="overview"/>
        <div className='headline'>
        <h1>Unsere Stärken</h1>
        </div>
        <div className='abilities-overview'>
          <div className='abilities zelle1'>
            <p>Kostengünstig</p>
          </div>
          <div className='abilities zelle1'>
            <p>Leicht verständlich</p>
          </div>
          <div className='abilities zelle2'>
            <p>Effizient</p>
          </div>
          <div className='abilities zelle3'>
            <p>Übersichtlich</p>
          </div>
          <div className='abilities zelle3'>
            <p>Kompakt</p>
          </div>
        </div>
    </div>
  )
}

export default InfoArea