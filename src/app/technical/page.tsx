import CTA from '@/components/CTA'
import Footer from '@/sections/Footer'
import { Header } from '@/sections/Header'
import Image from 'next/image'
import React from 'react'

export default function TechnicalCourses() {
  return (
    <>
        <section className='min-h-screen bg-gradient-to-tr from-blue-300 to-slate-50'>
            <Header />
            <div className='container'>
                <div className='flex flex-col items-center p-4'>
                    <h1 className='text-center text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>
                        Technical Courses
                    </h1>
                    <p className="text-xl text-[#010D3E] tracking-tight mt-6 text-center">
                        Here's a list of all the courses that Academix offers:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4">
                        <li className='tag m-2 hover:bg-black hover:text-white'>AI & ML</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Electric vehicle</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Data Science and Machine Learning</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Cybersecurity</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Cloud Computing</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Power BI</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Ethical Hacking</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Deep Learning</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Internet of Things (IoT)</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Blockchain Technology</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Big Data Analytics</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Full Stack Web Development</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Robotics and Automation</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Advanced Programming Languages</li>
                        <li className='tag m-2 hover:bg-black hover:text-white'>Systems Analysis</li>
                    </ul>
                </div>
                <CTA />
            </div>
        </section>  
        <Footer />
    </>
  )
}
