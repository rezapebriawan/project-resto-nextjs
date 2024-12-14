import React from 'react'

const Subscribe = () => {
  return (
    <section className='subscribe flex justify-center items-center mt-20 bg-gray-100 rounded-lg'>
      <div className='p-10 text-center'>
        <h4 className='mb-8 text-xl font-bold'>Stay Updated with Our Latest Menu & Offers!</h4>
        <p className='mb-6 text-gray-600'>Subscribe to our newsletter and never miss out on exclusive deals and new dishes.</p>
        <form className='flex flex-col items-center'>
          <input 
            type='email' 
            placeholder='Enter your email address' 
            className='submit-area mb-4 px-4 py-2 border border-gray-300 rounded-md w-full max-w-md'
          />
          <button 
            className='submit-button px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'>
            Subscribe
          </button>
        </form>
      </div>  
    </section>
  )
}

export default Subscribe
