import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';


import {
    FaBath,
    FaBed,
    FaChair,
    FaMapMarkedAlt,
    FaMapMarkerAlt,
    FaParking,
    FaShare,
  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
  // import Contact from '../components/Contact';

export default function List() {
    SwiperCore.use([Navigation]);
  return (
 <div className=' m-5  shadow mt-5 mb-5 bg-green-100 rounded'>
      <main>
       
          <div className='p-5'>
            <Swiper navigation>
                <SwiperSlide >
                  <div
                    className='h-[550px]'
                    style={{
                      background: `url(https://i.postimg.cc/fbXLbHQN/pexels-binyamin-mellish-106399.jpg) center no-repeat`,
                      backgroundSize: 'cover',
                    }}
                  ></div>
                </SwiperSlide>
                <SwiperSlide >
                  <div
                    className='h-[550px]'
                    style={{
                      background: `url(https://i.postimg.cc/xd2H9dtj/kitchen-home-real-estate-living.jpg) center no-repeat`,
                      backgroundSize: 'cover',
                    }}
                  ></div>
                </SwiperSlide>
              
            </Swiper>
            <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
              <FaShare
                className='text-slate-500'
               
              />
            </div>
            
            <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
              <p className='text-2xl font-semibold'>
               PV CONSTRUCTION
              </p>
              <p className='flex items-center mt-6 gap-2 text-slate-600  text-sm'>
                <FaMapMarkerAlt className='text-green-700' />
                Guruvayur
              </p>
              <div className='flex gap-4'>
                <p className='bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
               Rent
                </p>
               
                  <p className='bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                    $999 OFF
                  </p>
                
              </div>
              <p className='text-slate-800'>
                <span className='font-semibold text-black'>Description - </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, optio consectetur eaque cumque culpa molestias doloremque alias deserunt dolores .
              </p>
              <ul className='text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
                <li className='flex items-center gap-1 whitespace-nowrap '>
                  <FaBed className='text-lg' />
                  3
                </li>
                <li className='flex items-center gap-1 whitespace-nowrap '>
                  <FaBath className='text-lg' />
                 4
                </li>
                <li className='flex items-center gap-1 whitespace-nowrap '>
                  <FaParking className='text-lg' />
                    parking              </li>
                <li className='flex items-center gap-1 whitespace-nowrap '>
                  <FaChair className='text-lg' />
                  furnished
                </li>
              </ul>
                <button
                  className='bg-yellow-600 text-white rounded-lg uppercase hover:opacity-95 p-3'
                >
                 <Link to={'/contact'}
                  > Enquiry</Link>
                </button>
              
              {/* <Contact  /> */}
            </div>
          </div>
        
      </main>
 </div>
  )
}
