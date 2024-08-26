import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs,setInputs]=useState({
    username:"",
    password:""
  })

  const [err,setError]=useState(null);

  const  navigate=useNavigate();

  const {login}=useContext(AuthContext);

  const handleChange=e=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  
  const handleSubmit=async e=>{
    e.preventDefault()
    try{
      await login(inputs);
      navigate("/")
    }catch(err)
    {
      setError(err.response)
    }
   
  }
  console.log(inputs);


  return (
    <div className='auth'> 
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username' name='username' onChange={handleChange} required/>
        <input type="password" placeholder='password' name='password' onChange={handleChange} required/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't You have an account?<Link to="/register">Register</Link></span>
      </form>
    </div>
  );
}

export default Login;
