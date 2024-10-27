'use client'
import ArrowIcon from '@/assets/arrow-right.svg'
import vector from '@/assets/vector.png'
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"], 
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#558df5,#EAEEFE_100%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className="tag">
              Unlock your potential with Academix
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Learn without Limits
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Whether you are a recent graduate
              looking to advance your education or a
              professional seeking to enhance your skills, we
              invite you to explore our programs and discover
              how Academix can help you achieve your career
              aspirations.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href={'#contact'}><button className="btn btn-primary">Get Started</button></Link>
              <a href="tel:+918287401705" className="flex items-center btn btn-text hover:btn-primary gap-1 md:hidden">
                <span>Call Us</span>
                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative flex justify-center items-center'>
            <Image src={vector} width={540} height={540} alt='hero vector' 
              className='flex justify-center items-center pb-24 ml-10'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
