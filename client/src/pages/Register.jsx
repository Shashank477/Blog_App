import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  
    const [inputs,setInputs]=useState({
      username:"",
      email:"",
      password:""
    })

    const [err,setError]=useState(null);

    const  navigate=useNavigate();


    const handleChange=e=>{
      setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    
    const handleSubmit=async e=>{
      e.preventDefault()
      try{
        await axios.post("http://localhost:8800/api/auth/register",inputs);
        navigate("/login")
      }catch(err)
      {
        setError(err.response.data)
      }
     
    }
    console.log(inputs);


  return (
    <div className='auth'> 
      <h1>Register</h1>
      <form action="">
        <input type="text" placeholder='username' name='username' required onChange={handleChange}/>
        <input type="email" placeholder='email' name='email' required onChange={handleChange}/>
        <input type="password" placeholder='password' name='password' required onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p> }
        <span>Do You have an account?<Link to="/login">Login</Link></span>
      </form>
    </div>
  );
}

export default Register;
