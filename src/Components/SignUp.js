import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const navigate=useNavigate();
  const [username,SetUsername]=useState("");
  const [password,SetPassword]=useState("");

const handleSignUp=()=>{
  localStorage.setItem("userName",username);
  localStorage.setItem("password",password);

  alert("Thanks For Registering")
  navigate("/Login")

}
  return (
    <div className='Signup' >
      <div style={{display:'flex',flexDirection:'column'}}>
          <h1>SignUP</h1>
          <p>Enter Username</p>
          <input
          placeholder='Enter Username'
          value={username}
          onChange={(e)=>SetUsername(e.target.value)}
          />
          <p>Enter Password</p>
          <input
          placeholder='Enter Password'
          value={password}
          onChange={(e)=>SetPassword(e.target.value)}
          />
          <button onClick={handleSignUp} style={{marginTop:20}}>Register</button>
        </div>
    </div>
  )
}

export default SignUp