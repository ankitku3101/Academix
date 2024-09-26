import React from 'react'

export default function CTA() {
  return (
    <div className="mx-auto mt-10 max-w-7xl p-4 sm:p-6 sm:mt-8 lg:p-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-4 py-16 shadow-2xl rounded-xl sm:rounded-3xl sm:px-16 lg:px-24 xl:py-32 mb-8 sm:mb-10">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Get in touch with us
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-7 text-gray-300 sm:text-lg">
          Drop in your email below to know more about our courses.
        </p>

        <form className="mx-auto mt-8 flex md:flex-row gap-y-4 sm:flex-col sm:gap-x-4 max-w-md">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />

          <button
            type="submit"
            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Notify me
          </button>
        </form>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#7775D6" />
              <stop offset="1" stopColor="#339cff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
