import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <header className='bg-green-700 shadow-md  z-0'>
      <div className='flex justify-between items-center max-w-6xl mx-auto '>
        
          <Link to={'/'}>
                <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/244207/large_greasehouse.png" alt="" width={150} />
                {/* <span className='text-slate-500'>Dream</span>
                <span className='text-slate-700'>Home</span> */}
          </Link>
        
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-slate-100 focus:outline-none w-94 sm:w-64'
          style={{height:"13px",width:"400px"}}/>
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          
            <Link to={'/'}>
                <li className='hidden sm:inline text-yellow-600 hover:underline fw-bold fs-6'>
                  Home
                </li>
            </Link>
          
          
            <Link to={'/about'}>
                <li className='hidden sm:inline text-yellow-600 hover:underline fw-bold'>
                  About
                </li>
            </Link>
            <a href='#footer'>
                <li className='hidden sm:inline text-yellow-600 hover:underline fw-bold'>
                  Contact
                </li>
            </a>

<Link to={'/login'}>
                <li className=' text-yellow-600 hover:underline fw-bold'> Login</li>
    
</Link>
          
        </ul>
      </div>
    </header>
  )
}
