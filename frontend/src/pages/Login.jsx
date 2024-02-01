import React from 'react'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'



export default function Login() {
  return (
    <div className='p-3 max-w-lg mx-auto shadow mt-5 mb-5 bg-green-100 rounded' >
    <h1 className='text-3xl text-center font-semibold my-7 text-yellow-800'>Login</h1>
    <form className='flex flex-col gap-4'>
      <input
        type='email'
        placeholder='email'
        className='border p-3 rounded-lg'
        id='email'
      />
      <input
        type='password'
        placeholder='password'
        className='border p-3 rounded-lg'
        id='password'
      />

      <button 
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
      >
        <Link to={'/profile'}>Login</Link>
      </button>
      <OAuth/>
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Dont have an account?</p>
      <Link to={'/register'}>
        <span className='text-blue-700'>Sign up</span>
      </Link>
    </div>
  </div>
  )
}
