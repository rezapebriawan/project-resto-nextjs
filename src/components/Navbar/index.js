import Image from 'next/image'
import React from 'react'
import { LogoImg } from '../../../public'
import { LuSearch } from 'react-icons/lu'
import { IoFastFoodSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <section>
      <div>
        <nav className='pt-10 pr-10 pl-10 pb-5 mb-12 flex justify-between'>
          <Image src={ LogoImg } alt='Gambar Logo'/>
          <div>
            <form>
              <input  placeholder='Find your favorite food' className='search-area'/>
              <button className='search-button'>
                <LuSearch />
              </button>  
            </form>
          </div>
          <ul className='flex items-center'>
            <li><IoFastFoodSharp className='cursor-pointer text-2xl' /></li>
            <li><a href='#' className='button-bg-secondary text-white px-4 py-2 rounded-md ml-8'>Cart</a></li>
          </ul>
        </nav>
        <div className='pl-10'>
          <ul className='flex justify-center items-center'>
            <li><a href='#' className='mr-8'>Home</a></li>
            <li><a href='#' className='mr-8'>BestSeller</a></li>
            <li><a href='#' className='mr-8'>Category</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar
