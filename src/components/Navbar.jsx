import React, { useState } from 'react'
import logo from '../assets/logo.png'
import mobileMenu from '../assets/paw-menu.svg'
import mobileClose from '../assets/dog-close.svg'
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [navbarScrollColor, setNavbarScrollColor] = useState(false);

    const scrollNavbarColor = () => {
        if (window.scrollY > 200) {
            setNavbarScrollColor(true)
          }
          else {
            setNavbarScrollColor(false)
          }
    }
        window.addEventListener('scroll', scrollNavbarColor);

    return (
        // Container
        <nav className={`${navbarScrollColor ? 'container mx-auto bg-white border-b-2 border-black sticky top-0 z-10 p-2' : 'container mx-auto p-2'}`}>
            {/* Desktop View */}
            <div className='hidden lg:flex items-center'>
                {/* Logo dog */}
                <div>
                    <a href="/"><img src={logo} alt="logo-dog" className='w-32' /></a>
                </div>

                {/* Links */}
                <div className='w-full'>
                    <ul className='flex justify-center gap-10 p-8 text-2xl menu-links'>
                        <li><a href='/'>Pradžia</a></li>
                        <li><Link to='section-main' smooth={true}>Priežiūra</Link></li>
                        <li><Link to='section-services' smooth={true}>Paslaugos</Link></li>
                        <li><Link to='section-about' smooth={true}>Apie</Link></li>
                        <li><Link to='section-contacts' smooth={true}>Kontaktai</Link></li>
                    </ul>
                </div>
                {/* Navbar Contact Icons */}
                <div className='flex items-center gap-8 p-8 navbar-contact-icons'>
                    <a href="tel:123-456-789" title='Paskambinti'><i class="fa-sharp fa-solid fa-phone text-2xl"></i></a>
                    <a href="mailto: abc@example.com" title='Parašyti'><i class="fa-sharp fa-solid fa-envelope text-3xl"></i></a>
                </div>
            </div>

            {/* Mobile View */}
            <div className='flex lg:hidden items-center justify-between px-4'>
                {/* Logo dog */}
                <div>
                    <a href="/"><img src={logo} alt="logo-dog" className='w-[100px]' /></a>
                </div>

                {/* Mobile Menu Button */}
                <div onClick={() => setNavbar(!navbar)}>        
                    {!navbar ? <span><p className='text-center font-bold'>Meniu</p><img src={mobileMenu} alt="mobileMenu" className='hover:cursor-pointer' /></span>
                    : <img src={mobileClose} alt="mobileClose" className='hover:cursor-pointer' />}
                </div>
            </div>

              {/* Mobile Menu Links */}
              <div className={navbar ? 'block' : 'hidden'}>
                    <ul className='flex flex-col p-4 text-xl menu-links w-full text-center space-y-4'>
                        <li><a href='/'>Pradžia</a></li>
                        <li><Link onClick={() => setNavbar(!navbar)} to='section-main' smooth={true} offset={-300}>Priežiūra</Link></li>
                        <li><Link onClick={() => setNavbar(!navbar)} to='section-services' smooth={true} offset={-300}>Paslaugos</Link></li>
                        <li><Link onClick={() => setNavbar(!navbar)} to='section-about' smooth={true} offset={-300}>Apie</Link></li>
                        <li><Link onClick={() => setNavbar(!navbar)} to='section-contacts' smooth={true} offset={-300}>Kontaktai</Link></li>
                        {/* Navbar Contact Icons */}
                        <div className='flex items-center justify-center gap-4 navbar-contact-icons'>
                            <a href="tel:123-456-789" title='Paskambinti'><i class="fa-sharp fa-solid fa-phone text-2xl"></i></a>
                            <a href="mailto: abc@example.com" title='Parašyti'><i class="fa-sharp fa-solid fa-envelope text-3xl"></i></a>
                        </div>
                    </ul>
              </div>
        </nav>
    )
}

export default Navbar