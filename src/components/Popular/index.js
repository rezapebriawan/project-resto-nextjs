import Image from 'next/image'
import React from 'react'
import { Dish1, Dish2, Dish3, Dish4, Chef1, Chef2, Chef3, Chef4, StarON, StarOFF } from '../../../public'

const Popular = () => {
  return (
    <section className='popular'>
      <div className='flex justify-between items-center p-10'>
        <h2>Popular Dishes</h2>
        <a href="#">The Best Seller</a>
      </div>
      <div className='pl-10 pr-10 grid grid-cols-4 gap-4'>
        {/* Dish 1 */}
        <div className='dish flex flex-col items-center text-center rounded-xl shadow-md bg-white p-6'>
          <Image alt='Dish Image' src={Dish1} className='rounded-md' />
          <h3 className='mt-3 font-bold text-lg'>Spicy Ramen</h3>
          <ul className='flex justify-center mt-2'>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarOFF} /></li>
          </ul>
          <p className='text-gray-600 mt-2'>Rp 45.000</p>
          <div className='flex items-center mt-4'>
            <Image alt='Chef' src={Chef1} className='rounded-full' />
            <p className='ml-2 text-sm'><span className='font-semibold'>Chef Aiden</span></p>
          </div>
        </div>
        {/* Dish 2 */}
        <div className='dish flex flex-col items-center text-center rounded-xl shadow-md bg-white p-6'>
          <Image alt='Dish Image' src={Dish2} className='rounded-md' />
          <h3 className='mt-3 font-bold text-lg'>Grilled Steak</h3>
          <ul className='flex justify-center mt-2'>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarOFF} /></li>
          </ul>
          <p className='text-gray-600 mt-2'>Rp 150.000</p>
          <div className='flex items-center mt-4'>
            <Image alt='Chef' src={Chef2} className='rounded-full' />
            <p className='ml-2 text-sm'><span className='font-semibold'>Chef Bella</span></p>
          </div>
        </div>
        {/* Dish 3 */}
        <div className='dish flex flex-col items-center text-center rounded-xl shadow-md bg-white p-6'>
          <Image alt='Dish Image' src={Dish3} className='rounded-md' />
          <h3 className='mt-3 font-bold text-lg'>Sushi Platter</h3>
          <ul className='flex justify-center mt-2'>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarOFF} /></li>
          </ul>
          <p className='text-gray-600 mt-2'>Rp 85.000</p>
          <div className='flex items-center mt-4'>
            <Image alt='Chef' src={Chef3} className='rounded-full' />
            <p className='ml-2 text-sm'><span className='font-semibold'>Chef Clara</span></p>
          </div>
        </div>
        {/* Dish 4 */}
        <div className='dish flex flex-col items-center text-center rounded-xl shadow-md bg-white p-6'>
          <Image alt='Dish Image' src={Dish4} className='rounded-md' />
          <h3 className='mt-3 font-bold text-lg'>Vegan Salad</h3>
          <ul className='flex justify-center mt-2'>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarON} /></li>
            <li><Image alt='star' src={StarOFF} /></li>
          </ul>
          <p className='text-gray-600 mt-2'>Rp 60.000</p>
          <div className='flex items-center mt-4'>
            <Image alt='Chef' src={Chef4} className='rounded-full' />
            <p className='ml-2 text-sm'><span className='font-semibold'>Chef David</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular
