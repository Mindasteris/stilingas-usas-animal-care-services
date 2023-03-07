import React from 'react'
import banner from '../assets/banner.webp'

const Banner = () => {
  return (
    <section className='container mx-auto p-4' id='section-home'>
        <div className='relative'>
          <img src={banner} alt="banner" className='w-full rounded-lg' />
          <h1 className='absolute top-1/3 right-0 md:right-20 lg:right-0 transform -translate-x-1/2 text-xl lg:text-5xl font-bold'>Stilingas Ūsas</h1>
          <h2 className='absolute top-1/2 -right-32 lg:-right-32 transform -translate-x-1/2 mt-8 text-sm md:text-lg lg:text-2xl font-bold'>Visos grožio paslaugos jūsų augintiniui</h2>
        </div>
    </section>
  )
}

export default Banner