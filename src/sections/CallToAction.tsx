'use client'
import Image from "next/image";
import cog from '@/assets/cogBG.jpg'
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import supportImage from '@/assets/support.jpg'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const CallToAction = () => {

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-10 overflow-x-clip bg-cover bg-fixed sm:bg-left bg-center"
      style={{
        backgroundImage: `url(${cog.src})`,
      }}
    >
      <div className="container relative">
        <div className="px-6 py-12 mx-auto ">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6 p-8 h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-2xl">
              <div className="mb-4 flex flex-col text-4xl text-gray-900 md:text-5xl lg:text-5xl text-center lg:text-left">
                <div className="tracking-tighter text-[#010D3E] font-extrabold mb-2">
                  Need Assistance?
                </div>
                <p className="text-left text-[19px] tracking-tight text-[#010D3E] leading-none">
                  We’re here to help you out.
                </p>
              </div>
              <div className="flex-none lg:block md:flex md:justify-center md:items-center">

                <div className="pl-6 lg:pl-0 mt-6 space-y-6 md:mt-8">
                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span className="mx-2 text-gray-700 truncate w-72">
                      New Delhi
                    </span>
                  </p>

                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="mx-2 text-gray-700 truncate w-72">
                      +91 82874 01705
                    </span>
                  </p>

                  <p className="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="mx-2 text-gray-700 truncate w-72">
                      support@academix.net.in
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-50 shadow-2xl rounded-xl lg:max-w-xl">
                <h1 className="text-2xl font-semibold text-gray-800">
                  Enquire more about us !
                </h1>

                <form className="mt-4">
                  <div className="flex-1">
                    <label className="block mb-1 text-sm text-gray-600">Full Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="block w-full px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-4">
                    <label className="block mb-1 text-sm text-gray-600">Email address</label>
                    <input
                      type="Email"
                      placeholder="Email-id"
                      className="block w-full px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-4">
                    <label className="block mb-1 text-sm text-gray-600">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Phone No."
                      className="block w-full px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-4">
                    <label className="block mb-1 text-sm text-gray-600">Course</label>
                    <select
                      id="course"
                      name="course"
                      className="block w-full px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option>AI & ML</option>
                      <option>Electric vehicle</option>
                      <option>Data Science and Machine Learning</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Computing</option>
                      <option>Network Design</option>
                      <option>Artificial Intelligence</option>
                      <option>Deep Learning</option>
                      <option>Internet of Things (IoT)</option>
                      <option>Blockchain Technology</option>
                      <option>Big Data Analytics</option>
                      <option>Embedded Systems Design</option>
                      <option>Robotics and Automation</option>
                      <option>Advanced Programming Languages</option>
                      <option>Systems Analysis</option>
                      <option>Vaccine Technology</option>
                      <option>Bioinformatics</option>
                      <option>Cancer Biology</option>
                      <option>Neurobiology</option>
                      <option>Personalized Medicine</option>
                      <option>Medical Microbiology</option>
                      <option>Biotechnology Innovations</option>
                      <option>Environmental Genomics</option>
                      <option>Forensic Science</option>
                      <option>Molecular Biology</option>
                    </select>
                  </div>

                  <div className="w-full mt-4">
                    <label className="block mb-1 text-sm text-gray-600">Message</label>
                    <textarea
                      className="block w-full h-24 px-3 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button className="w-full px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none">
                    get in touch
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};