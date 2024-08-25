import Image from "next/image";
import { WobbleCard } from "@/components/WobbleCard";

export const WhyUs = () => {
  return (
    <section id="whyus" className="bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF] py-10 overflow-x-clip">
      <div className="container">
        <h1 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">Why Choose Us ?</h1>
        <p className="text-center text-[22px] leading-[30-px] tracking-tight text-[#010D3E] mt-5">
          Choosing Academix means choosing excellence. Our
          distinguished faculty, state-of-the-art facilities, and
          commitment to innovative teaching methods set us
          apart. We pride ourselves on fostering a collaborative
          and inclusive learning environment where every
          student can thrive.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-4xl mx-auto w-full mt-10">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Certified Courses 
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              All our courses are supervised & conducted by professionals and ceritified by top brands.
            </p>
          </div>
          <Image
            src="/images/cert.jpg"
            width={350}
            height={350}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[30%] filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           Your Success, Our Mission
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Personalized guidance and unmatched support.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Tailored Learning for Every Ambition: From Degrees to Career Growth
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Comprehensive programs for students and professionals alike, designed to propel your academic and career goals
            </p>
          </div>
          <Image
            src="/images/class.jpg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
    </section>
  );
};
