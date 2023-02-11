import React from 'react'
import "./header.css"
import { FcGraduationCap } from "react-icons/fc";
import {Link,useNavigate} from "react-router-dom"
import logoBlack from "../../assets/img/logo-black - bearbeitet.png"

export default function Header() {


  return (
    <div className='header-container'>
      <img src={logoBlack} alt="Logo" className='logo-black'/>
        
        <a href="/">Kursübersicht</a>
        <a href="/">Mein Kursbereich</a>
        <a href="/">About us</a>
    </div>
  )
}
