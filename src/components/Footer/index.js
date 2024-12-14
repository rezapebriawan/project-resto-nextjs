import Image from 'next/image'
import React from 'react'
import { FBImg, IGImg, LogoImg } from '../../../public'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='p-10 mt-12'>
        <div className='flex justify-between mt-5 pl-10 pr-10'>
          <div>
            <Image alt='Logo' src={LogoImg} />
            <p className='mt-5'>The best place to enjoy delicious food</p>
          </div>
          <div className='flex-menu'>
            <ul className='mr-52'>
              <li><p className='mb-5'>Navigation</p></li>
              <li className='mb-3'><a href='#'>Home</a></li>
              <li className='mb-3'><a href='#'>Menu</a></li>
              <li className='mb-3'><a href='#'>Reservation</a></li>
              <li className='mb-3'><a href='#'>Contact</a></li>
            </ul>
            <ul className='mr-20'>
              <li><p className='mb-5'>Contact</p></li>
              <li className='mb-3'><a href='#'>info@resto.web</a></li>
              <li className='mb-3'><a href='#'>Jl. Nikmat No. 123</a></li>
              <li className='mb-3'><a href='#'>Jakarta, Indonesia</a></li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-center mt-5 pl-10 pr-10'>
          <p>@ 2024 Resto Web.</p>
          <div className='flex'>
            <Image alt='IG' src={IGImg} className='mr-4' />
            <Image alt='FB' src={FBImg} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
