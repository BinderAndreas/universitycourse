import React from 'react'

import "./homepage.css"
import Banner from '../../components/Banner/Banner'
import InfoArea from '../../components/InfoArea/InfoArea'

function HomePage() {
  return (
    <div className='homepage'>
        <Banner/>
        <InfoArea/>
    </div>
  )
}

export default HomePage