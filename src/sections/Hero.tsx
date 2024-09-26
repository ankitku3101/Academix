'use client'
import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import cylinder from '@/assets/cylinder.png'
import noodleImage from '@/assets/noodle.png'
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link'
import { useRef } from 'react'

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"], 
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
   
  return (
    <section id='hero' ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
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
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img 
              src={cogImage.src} 
              alt='cog image' 
              className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
              animate={{
                translateY: [-30,30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut'
              }}
            />
            <motion.img 
              src={cylinder.src} 
              alt='cylinder' 
              className='hidden md:block -top-8 -left-32 md:absolute'
              width={220} 
              height={220} 
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt='noodle' 
              className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]' 
              width={220} 
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
