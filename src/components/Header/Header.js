import React from 'react'
import "./header.css"
import { FcGraduationCap } from "react-icons/fc";
import {Link,useNavigate} from "react-router-dom"

export default function Header() {
  return (
    <div className='header-container'>
        <FcGraduationCap/>
        <a href="/">Kurse</a>
        <a href="/">Mitgliederbereich</a>
        <a href="/">Tipps & Tricks</a>
        <a href="/">Über uns</a>
    </div>
  )
}
