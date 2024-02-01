import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListItem from '../components/ListItem';



export default function Home() {
  SwiperCore.use([Navigation]);
  return (
    <div className='bg-yellow-100 '>
       {/* main */}
       <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto bg-yellow-100   ' style={{backgroundImage:'url(https://i.postimg.cc/Jh8HpBKX/pngimg-com-house-PNG6.png)',backgroundRepeat:"no-repeat",backgroundSize:"1500px 500px"}}>
        <h1 className='text-slate-950 font-bold text-3xl lg:text-6xl mt-3'>
        Find   <span className='text-amber-500'>perfect</span>
          <br />
          Home to Live, Work <br />and Wonder...
        </h1>
        <div className='text-gray-300 text-xs sm:text-sm'>
          Dream Home is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        
        <Link to={'/search'}
         
          className='text-xs sm:text-sm text-red-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
       
            <SwiperSlide>
              <div
                style={{
                  background: `url(https://i.postimg.cc/htVQ5CVC/beautiful-house-pictures-gi9u23e95gi8iu2e.jpg`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  background: `url(https://i.postimg.cc/Tw1405Bc/istockphoto-547493642-612x612.jpg`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  background: `url(https://i.postimg.cc/DwtFtJf0/real-estate-modern-white-house-dcxpp5xsw4e7wqgc.jpg) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
              ></div>
            </SwiperSlide>
        
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
       
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
             
                <ListItem  />
                <ListItem  />
                <ListItem  />


                
              
            </div>
          </div>
        
       
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
             
                <ListItem />
                <ListItem  />

              
            </div>
          </div>
        
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' >Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
             
                <ListItem  />
            
            </div>
          </div>
      
      </div>
    </div>
  )
}
