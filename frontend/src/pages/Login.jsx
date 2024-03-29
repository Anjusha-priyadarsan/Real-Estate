import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'
import { useDispatch, useSelector } from 'react-redux';
import {signInFailure, signInStart, signInSuccess} from '../redux/user/userSlice';






export default function Login() {
  const[formData,setFormData]=useState({});
  // 'user' is the name in userslice 
  const {loading, error}= useSelector((state) => state.user);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      dispatch(signInStart());
      const res = await fetch('/backend/auth/signin', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
  
        },
        body:JSON.stringify(formData),
        
  
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message));
          return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
   
    // console.log(data);

  };
  return (
    <div className='p-3 max-w-lg mx-auto shadow mt-5 mb-5 bg-green-100 rounded' >
    <h1 className='text-3xl text-center font-semibold my-7 text-yellow-800'>Login</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input
        type='email'
        placeholder='email'
        className='border p-3 rounded-lg'
        id='email'
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='password'
        className='border p-3 rounded-lg'
        id='password'
        onChange={handleChange}

      />

      <button 
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
      >
        {loading ? 'loading...' : 'Login'}
      </button>
      <OAuth/>
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Dont have an account?</p>
      <Link to={'/register'}>
        <span className='text-blue-700'>Sign up</span>
      </Link>
    </div>
    {error && <p className='text-red-500 mt-5'>{error}</p>}

  </div>
  )
}
