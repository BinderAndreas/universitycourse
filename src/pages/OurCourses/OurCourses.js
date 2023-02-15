import React from 'react'
import "./ourcourses.css"

function OurCourses() {
  return (
    <div>
        <div className='headline-area'>
                <div className='headline'>
                    <h1>Unser Angebot an Kursen</h1>
                </div>
        </div>
            <div className='our-courses'>
                <h3>STEOP</h3>
                <div className='course-field'>
                        <p>Europäisches- und öffentliches Wirtschaftsrecht I (LVP)</p>
                    <div className='informations'>
                        <a href="/">Mehr Informationen</a>
                        <a href="/" className='book-course'>Kurs buchen</a>
                     </div>
                 </div>
                <h3>CBK</h3>
                <div className='course-field'>
                    <p>Introduction to Business Communication (LVP) (LVP)</p>
                    <div className='informations'>
                        <a href="/">Mehr Informationen</a>
                        <a href="/" className='book-course'>Kurs buchen</a>
                    </div>
                </div>
                <div className='course-field'>
                    <p>Marketing (LVP)</p>
                    <div className='informations'>
                        <a href="/">Mehr Informationen</a>
                        <a href="/" className='book-course'>Kurs buchen</a>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default OurCourses