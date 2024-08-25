import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logo.png'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt="Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#productshowcase'>About</a>
              <a href='#whyus'>Why Us</a>
              <a href='#courses'>Courses</a>
              <a href='#contact'>Contact</a>  
              <a href='#'>Home</a>  
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
