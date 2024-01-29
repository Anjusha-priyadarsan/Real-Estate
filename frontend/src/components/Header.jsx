import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <header className='bg-slate-950 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        
          <Link to={'/'}>
              <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/244207/large_greasehouse.png" alt="" width={150} />
                {/* <span className='text-slate-500'>Dream</span>
                <span className='text-slate-700'>Home</span> */}
              </h1>
          </Link>
        
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-34 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          
            <Link to={'/'}>
                <li className='hidden sm:inline text-slate-50 hover:underline'>
                  Home
                </li>
            </Link>
          
          
            <Link to={'/about'}>
                <li className='hidden sm:inline text-slate-50 hover:underline'>
                  About
                </li>
            </Link>

<Link to={'/login'}>
                <li className=' text-slate-50 hover:underline'> Login</li>
    
</Link>
          
        </ul>
      </div>
    </header>
  )
}
