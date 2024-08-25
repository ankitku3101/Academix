"use client"

import Image from "next/image";
import productImage from '@/assets/product-image.png'
import tubeImage from '@/assets/tube.png'
import pyramidImage from '@/assets/pyramid.png'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150])
  return (
    <section ref={sectionRef} id="productshowcase" className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-10 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your career</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">Learn on-demand skills and grab every oppurtunity</h2>
          <p className="text-center text-[22px] leading-[30-px] tracking-tight text-[#010D3E] mt-5">Academix provides educational resources and training programs focused on future technologies and technical topics.
            Our services are designed for individuals pursuing higher education or professional development.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="image" className="mt-10"/>     
          <motion.img
            src={pyramidImage.src} 
            alt="pyramid" 
            className="hidden md:block absolute -right-36 -top-32" 
            height={262} 
            width={262}
            style={{
              translateY: translateY
            }} 
          />
          <motion.img 
            src={tubeImage.src} 
            alt="tube" 
            className="hidden md:block absolute bottom-24 -left-36" 
            height={262} 
            width={262} 
            style={{
              translateY: translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};
