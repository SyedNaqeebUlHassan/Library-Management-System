import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { userData } from '../Redux/UserSlider';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [username,SetUsername]=useState("");
  const [password,SetPassword]=useState("");
  const handleClick=()=>{

    const userName=localStorage.getItem("userName");
    const Password=localStorage.getItem("password");
    if(username===userName && password===Password){
        dispatch(userData(
          {newUserName:username,newPassword:password}
        ))
        navigate("/SearchBook")
    } 
    else {
      alert("Incorrect userName or Password")
    }
  }
  return (
    <div className='Signup'>
      <div style={{display:'flex',flexDirection:'column'}}>
            <h1>Login</h1>
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
            <button onClick={handleClick} style={{marginTop:20}}>Register</button>
      </div>
  </div>
  )
}

export default Login