import React from 'react'
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListItem() {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={'/list'}>
        <img
          src="https://i.postimg.cc/fbXLbHQN/pexels-binyamin-mellish-106399.jpg"
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            PVS CONSTRUCTION
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
                Calicut
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem iure rem, dignissimos accusantium odio tenetur ullam quod dolore 
          </p>
          <p className='text-slate-500 mt-2 font-semibold '>
            $
            1000
            2000
            sale
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
             3
            </div>
            <div className='font-bold text-xs'>
             3
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
