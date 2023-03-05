import React, {useState} from 'react'
import "./auth.css"

import {auth} from "../../config/firebaseConfig"
import { createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function Auth() {
let navigate = useNavigate();
const [existingUser,setExistingUser]=useState(true)
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const [userinfo, setUserInfo]=useState({
  name:"",
  email:"",
  password:"",
})



const handleLogin=(e)=>{
  e.preventDefault();
  signInWithEmailAndPassword(auth,email,password)
  .then(res=>{
    navigate("/")
  })
  .catch(err=>{
    alert(err.message)
  })
}
const handleSignup=(e)=>{
  e.preventDefault();
  
  createUserWithEmailAndPassword(auth,email,password)
  .then(res=>{
    navigate("/")
    updateProfile(auth.currentUser,{displayName:name})
    setExistingUser(true)
  })
  .catch(err=>{
    console.log(err)
  })

}

  return (
    <div>
      {
        existingUser 
        ? <form className='auth-form' onSubmit={handleLogin}>
            <h1>Mit deiner E-Mail einloggen</h1>
            <div className='form-group'>
              <input type="email"  value={email || "" }placeholder="Deine E-Mail" onChange={(e)=>setEmail(e.target.value)} required />
              <input  value={password || "" } type="password" placeholder="Dein Passwort" onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <button type="submit">Bestätigen</button>
            <p>Du hast noch keinen Account? <span onClick={()=>setExistingUser(false)} style={{color:"#3AB07B",fontWeight: 'bold' }}>Registrieren</span></p>
            </form> 
          : <form className='auth-form' onSubmit={handleSignup}>
            <h1>Registriere dich mit deiner E-Mail</h1>
            <div className='form-group'>
              <input value={name || "" } type="text" placeholder="Dein Name" onChange={(e)=>setName(e.target.value)} required />
              <input  value={email || "" } type="email" placeholder="Deine E-Mail" onChange={(e)=>setEmail(e.target.value)} required />
              <input value={password || "" } type="password" placeholder="Dein Passwort" onChange={(e)=>setPassword(e.target.value)} required />
            </div>
          <button type="submit">Registrieren</button>
          <p>Hast du schon einen Account? <span onClick={()=>setExistingUser(true)}  style={{color:"#3AB07B",fontWeight: "bold" }}>Login</span></p>
          </form>

      }


    </div>
  )
}

export default Auth