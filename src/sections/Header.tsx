import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='flex bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>
              <Image src={Logo} alt="Logo" height={40} width={40} />
              <h1 className='mx-2 font-bold'>ACADEMIX</h1>
            </div>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <Link href="/#productshowcase">About</Link>
              <Link href="/#whyus">Why Us</Link>
              <Link href="/#courses">Courses</Link>
              <Link href="/#contact">Contact</Link>
              <Link href="/">Home</Link>
            </nav>
            <div className='bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text font-semibold'>
              Call Us +91 82874 01705
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
