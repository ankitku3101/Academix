"use client";
import React from "react";
import { StickyScroll } from "@/components/StickyScroll";
import Image from "next/image";

const content = [
  {
    title: "Advanced AI and Machine Learning",
    description:
      "Comprehensive courses offering in-depth coverage of the latest advancements in artificial intelligence and machine learning technologies, focusing on cutting-edge techniques, practical applications, and theoretical foundations to prepare students for careers in AI-driven industries and innovative research opportunities.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/AI.jpg"
          width={300}
          height={300}
          className="h-full w-full"
          alt="Robotics image"
        />
      </div>
    ),
  },
  {
    title: "Biotechnology and Bioinformatics",
    description:
      "In-depth training at the intersection of biology and technology, equipping students with the knowledge and skills needed to drive breakthroughs in medical innovation, genetic engineering, environmental sustainability, and biotechnology, fostering advancements that address real-world challenges.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/biotech.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Robotics image"
        />
      </div>
    ),
  },
  {
    title: "Cybersecurity and Data Protection",
    description:
      "Programs specifically designed to equip students with essential skills and expertise needed to protect information systems against evolving cyber threats, focusing on network security, ethical hacking, data protection, and advanced cybersecurity strategies for safeguarding digital infrastructures.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/cybersec.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Robotics image"
        />
      </div>
    ),
  },
  {
    title: "Robotics and Automation",
    description:
      "Courses focused on the design, development, and application of robotic systems across various industries, providing students with hands-on experience in automation, artificial intelligence, and robotics engineering, while preparing them for careers in manufacturing, healthcare, and advanced technology sectors.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/robot.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Robotics image"
        />
      </div>
    ),
  },
];
export function Courses() {
  return (
    <section id="courses" className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-10 overflow-x-clip">
      <div className="container">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-10">Courses we offer</h2>
        <p className="text-center text-[22px] leading-[30-px] tracking-tight text-[#010D3E] mt-5">
          Each program is designed with the needs of both
          recent graduates and working professionals in mind,
          offering flexible learning options and cutting-edge
          knowledge.
        </p>
        <div className="py-10">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
}
