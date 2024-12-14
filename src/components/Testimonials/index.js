import Image from 'next/image'
import React from 'react'
import { Client1, Client2, Client3, Kutip } from '../../../public'

const Testimonials = () => {
  return (
    <section className='testimonials bg-gray-50 py-20'>
      <div className='container mx-auto px-10'>
        <h2 className='text-center text-2xl font-bold mb-10'>What Our Customers Say</h2>
        <div className='grid grid-cols-3 gap-6'>
          {/* col */}
          <div className='testimoni bg-white p-6 shadow-md rounded-md text-center'>
            <div className='flex justify-center mb-4'>
              <Image alt='Client' src={Client1} className='w-16 h-16 rounded-full' />
            </div>
            <h5 className='text-lg font-semibold mb-2'>Reza Pebriawan M</h5>
            <p className='text-sm text-gray-600 italic'>
              “The food here is amazing! Every bite is a burst of flavor, and the service is top-notch.”
            </p>
            <div className='flex justify-center mt-4'>
              <Image alt='Kutip' src={Kutip} className='w-6' />
            </div>
          </div>
          {/* col */}
          <div className='testimoni bg-white p-6 shadow-md rounded-md text-center'>
            <div className='flex justify-center mb-4'>
              <Image alt='Client' src={Client2} className='w-16 h-16 rounded-full' />
            </div>
            <h5 className='text-lg font-semibold mb-2'>Nuraini S</h5>
            <p className='text-sm text-gray-600 italic'>
              “This restaurant has become my favorite place to eat. The ambiance is cozy, and the food is fantastic.”
            </p>
            <div className='flex justify-center mt-4'>
              <Image alt='Kutip' src={Kutip} className='w-6' />
            </div>
          </div>
          {/* col */}
          <div className='testimoni bg-white p-6 shadow-md rounded-md text-center'>
            <div className='flex justify-center mb-4'>
              <Image alt='Client' src={Client3} className='w-16 h-16 rounded-full' />
            </div>
            <h5 className='text-lg font-semibold mb-2'>Andre Syak</h5>
            <p className='text-sm text-gray-600 italic'>
              “Every dish is a masterpiece. I highly recommend trying the signature dishes – they’re unforgettable.”
            </p>
            <div className='flex justify-center mt-4'>
              <Image alt='Kutip' src={Kutip} className='w-6' />
            </div>
          </div>
          {/* col */}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
