"use client"

import { useState } from 'react';
import { Alfa_Slab_One } from 'next/font/google';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'; // Assuming this is your existing menu icon
import Link from 'next/link';

const Alfa = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='pt-5 pb-10'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <div className='flex items-center bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>
                <Image src={Logo} alt="Logo" height={50} width={55} />
                <h1 className={`${Alfa.className} mx-2 text-lg`}>ACADEMIX</h1>
              </div>
            </Link>

            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <div className="text-black text-xl font-bold">X</div> 
              ) : (
                <MenuIcon className="h-5 w-5" /> // Your existing menu icon
              )}
            </div>

            <nav className='hidden md:flex gap-6 text-white/75 items-center bg-black rounded-full shadow-lg px-6 py-2'>
              <Link href="/#productshowcase" className='hover:text-white'>About</Link>
              <Link href="/#whyus" className='hover:text-white'>Why Us</Link>
              <Link href="/" className='hover:text-white'>Home</Link>
              <Link href="/#courses" className='hover:text-white'>Courses</Link>
              <Link href="/#contact" className='hover:text-white'>Contact</Link>
            </nav>

            <a href="tel:+918287401705" className="hidden lg:block text-black/85 relative hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-800 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-900 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              Call Us +91 82874 01705
            </a>
          </div>

          {isMenuOpen && (
            <nav className='flex flex-col items-center mt-4 md:hidden text-white/75 bg-black rounded-lg shadow-lg px-6 py-4'>
              <Link href="/#productshowcase" className='hover:text-white mb-4'>About</Link>
              <Link href="/#whyus" className='hover:text-white mb-4'>Why Us</Link>
              <Link href="/#courses" className='hover:text-white mb-4'>Courses</Link>
              <Link href="/#contact" className='hover:text-white mb-4'>Contact</Link>
              <Link href="/" className='hover:text-white'>Home</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
