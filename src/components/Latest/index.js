import Image from 'next/image'
import React from 'react'
import { Dish5, Dish6, Dish7, Dish8, StarON, StarOFF } from '../../../public'

const Latest = () => {
  return (
    <section className='popular'>
      <div className='flex justify-between items-center p-10'>
        <h2>Latest Dishes</h2>
        <a href="#">View All</a>
      </div>
      <div className='pl-10 pr-10 grid grid-cols-4 gap-4'>
        {/* col */}
        <div className='dish flex flex-col items-center text-center rounded-xl shadow-md bg-white p-6'>
          <Image alt='Dish' src={Dish5} className='rounded-md' />
          <h3 className='mt-3 font-bold text-lg'>Chicken Alfredo</h3>
          <ul className='flex justify-center mt-2'>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarOFF} /></li>
          </ul>
          <p className='text-gray-600 mt-2'>Rp 70.000</p>
        </div>
        {/* col */}
        <div className='dish flex flex-col items-center text-center rounded-xl shadow-md bg-white p-6'>
          <Image alt='Dish' src={Dish6} className='rounded-md' />
          <h3 className='mt-3 font-bold text-lg'>Beef Wellington</h3>
          <ul className='flex justify-center mt-2'>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarOFF} /></li>
          </ul>
          <p className='text-gray-600 mt-2'>Rp 200.000</p>
        </div>
        {/* col */}
        <div className='dish flex flex-col items-center text-center rounded-xl shadow-md bg-white p-6'>
          <Image alt='Dish' src={Dish7} className='rounded-md' />
          <h3 className='mt-3 font-bold text-lg'>Seafood Paella</h3>
          <ul className='flex justify-center mt-2'>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarOFF} /></li>
          </ul>
          <p className='text-gray-600 mt-2'>Rp 130.000</p>
        </div>
        {/* col */}
        <div className='dish flex flex-col items-center text-center rounded-xl shadow-md bg-white p-6'>
          <Image alt='Dish' src={Dish8} className='rounded-md' />
          <h3 className='mt-3 font-bold text-lg'>Berry Cheesecake</h3>
          <ul className='flex justify-center mt-2'>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarOFF} /></li>
          </ul>
          <p className='text-gray-600 mt-2'>Rp 50.000</p>
        </div>
      </div>
    </section>
  )
}

export default Latest
