import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white h-[300px] relative'>

        <div className='text-2xl lg:text-3xl w-full flex justify-center items-center gap-10 social-media absolute bottom-48'>
            <a href="https://www.facebook.com/people/Stilingas-%C5%AAsas/100070168009614/" target='_blank'><BsFacebook /></a>
            <a href="https://www.tiktok.com/@stilingasusas" target='_blank'><FaTiktok /></a>
        </div>

        <div className='absolute bottom-0 w-full p-4'>
            <p className='text-center text-sm lg:text-xl'>&copy; {new Date().getFullYear()} Stilingas ūsas | Visos teisės saugomos.</p>
        </div>
    </footer>
  )
}

export default Footer