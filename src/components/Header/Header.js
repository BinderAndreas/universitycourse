import React from 'react'
import "./header.css"
import {Link,useNavigate} from "react-router-dom"
import logoBlack from "../../assets/img/logo-black - bearbeitet.png"
import OurCourses from '../../pages/OurCourses/OurCourses'


export default function Header() {

  let navigate=useNavigate();


  return (
    <div className='header-container'>
        <img src={logoBlack} onClick={()=>navigate("/")} alt="Logo" className='logo-black'/>
      <div className='nav'>
          <a href="/" className='login'>Login</a>
          <a href="/">Mein Kursbereich</a>
          <a href="/aboutus">Über uns</a>
          <a href="/ourcourses">Unsere Kurse</a>
      </div>
    </div>
  )
}
