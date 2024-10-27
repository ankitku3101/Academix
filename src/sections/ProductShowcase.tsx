"use client"

import Image from "next/image";
import test1 from '@/assets/test1.jpg'
import test2 from '@/assets/test2.jpg'
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
        <div className="max-w-5xl max-md:max-w-xl mx-auto font-[sans-serif] my-4">
          <div className="mt-16">
            <div className="grid md:grid-cols-2 items-center gap-16">
              <div>
                <Image src={test1} width={626} height={417} alt="demo" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
              </div>
              <div>
                <h3 className="text-gray-800 text-xl font-bold mb-4">Customized Learning Schedules</h3>
                <p className="text-gray-600 text-sm">At Academix, we believe that learning should fit seamlessly into your life, not the other way around. With our flexible scheduling options, you can plan your study hours around your needs and budget. Whether you’re balancing work, family, or other commitments, Academix makes it easy to set your own pace and keep learning accessible.</p>
              </div>
              <div className="max-md:order-1">
                <h3 className="text-gray-800 text-xl font-bold mb-4">Exceptional Course Quality, Tailored for You</h3>
                <p className="text-gray-600 text-sm">Academix is dedicated to delivering top-notch education, whether you’re learning online or in-person. Our courses are developed by industry experts, focusing on practical skills and deep knowledge that prepare you for real-world challenges. With Academix, you’ll always experience high standards, interactive learning, and reliable support on your journey to success.</p>
              </div>
              <div>
              <Image src={test2} width={626} height={417} alt="demo" className="w-full object-contain rounded-md shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
