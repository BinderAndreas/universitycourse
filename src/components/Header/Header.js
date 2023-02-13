import React from 'react'
import "./header.css"
import {Link,useNavigate} from "react-router-dom"
import logoBlack from "../../assets/img/logo-black - bearbeitet.png"

export default function Header() {


  return (
    <div className='header-container'>
      <img src={logoBlack} alt="Logo" className='logo-black'/>
      <div className='nav'>
          <a href="/" className='login'>Login</a>
          <a href="/">Mein Kursbereich</a>
          <a href="/">Über uns</a>
          <a href="/">Unsere Kurse</a>
      </div>
    </div>
  )
}
