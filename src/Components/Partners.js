import React from 'react'
import MovingText from './MovingText'
import Company1 from "../assets/Logo final.png";
import Company2 from "../assets/02.png";

const Partners = () => {
  return (
    <div id="partner">
    <MovingText/>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 lg:px-24 px-4 pt-20'>
  <div className='rounded-2xl  m-5'>
    <img className='h-40 w-full rounded-2xl' src={Company1} alt='' />
  </div>
  <div className='rounded-2xl  m-5'>
    <img className='h-40 w-full rounded-2xl' src={Company2} alt='' />
  </div>
  <div className='rounded-2xl m-5'>
  <img
    className='h-40 w-full rounded-2xl bg-white'
    src='https://www.tuitionworld.co.in/assets/img/tw1.png'
    alt=''
  />
</div>

  <div className='rounded-2xl  m-5'>
    <img className='h-40 w-full rounded-2xl' src='https://www.tcs.com/content/dam/global-tcs/en/images/home/dark-theme.svg' alt='' />
  </div>
</div>

    <div className='h-20'></div>
    </div>
   
  )
}

export default Partners
