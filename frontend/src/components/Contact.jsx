import React from 'react';
import { Link } from 'react-router-dom';


export default function Contact() {
  return (
    
    <>
      
      <div className=' m-5  shadow mt-5 mb-5 bg-green-100 rounded'>
         <div className='p-5'>
            <div className='flex flex-col gap-2'>
              <p>
                Contact <span className='font-semibold'>Grease house</span>
                <span className='font-semibold'></span>
              </p>
              <textarea
                name='message'
                id='message'
                rows='2'
                // value={message}
                placeholder='Enter your message here...'
                className='w-full border p-3 rounded-lg'
              ></textarea>
    
              <Link
              className='bg-yellow-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
              >
                Send Message          
              </Link>
            </div>
          
         </div>
      </div>
    </>
    
  )
}
