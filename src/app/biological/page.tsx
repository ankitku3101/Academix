import CTA from '@/components/CTA';
import Footer from '@/sections/Footer';
import { Header } from '@/sections/Header';
import React from 'react';

export default function BiologicalCourses() {
  return (
    <>
      <section className='min-h-screen bg-gradient-to-tr from-blue-300 to-slate-50'>
        <Header />
        <div className='container'>
          <div className='flex flex-col items-center p-4'>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 pb-2'>
              Biological Courses
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Here's a list of all the courses that Academix offers:
            </p>
            <ul className="grid grid-cols-3 pt-4">
              <li className='tag m-2 hover:bg-black hover:text-white'>Systems Analysis</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Vaccine Technology</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Bioinformatics</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Cancer Biology</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Neurobiology</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Personalized Medicine</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Medical Microbiology</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Biotechnology Innovations</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Environmental Genomics</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Systems Biology</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Forensic Science</li>
              <li className='tag m-2 hover:bg-black hover:text-white'>Molecular Biology</li>
            </ul>
          </div>
          <CTA />
        </div>
      </section>
      <Footer />
    </>
  );
}
