import React from 'react'
import "./header.css"
import {Link,useNavigate} from "react-router-dom"
import logoBlack from "../../assets/img/logo-black - bearbeitet.png"
import {auth} from "../../config/firebaseConfig"
import {useAuthState} from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth';


export default function Header() {

  let navigate=useNavigate();
  const [user]=useAuthState(auth)

  return (
    <div className='header-container'>
        <img src={logoBlack} onClick={()=>navigate("/")} alt="Logo" className='logo-black'/>
      <div className='nav'>
        {
      user
      ? <div className='logout'>
          <button className='auth-link' onClick={()=>signOut(auth)}>Logout</button>
          <span className='username'>Hallo, {user?.displayName ? user?.displayName : user?.email}</span>
        </div>
      : <Link className='auth-link' to={`/login`}>Login</Link>
     }
          <Link to={`/mycoursearea`}>Mein Kursbereich</Link>
          <Link to={`/aboutus`}>Über uns</Link>
          <Link to={`/ourcourses`}>Unsere Kurse</Link>
          
      </div>
    </div>
  )
}
