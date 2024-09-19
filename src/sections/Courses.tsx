"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function Courses() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

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
  <AnimatePresence>
    {active && typeof active === "object" && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/20 h-full w-full z-10"
      />
    )}
  </AnimatePresence>
  <AnimatePresence>
    {active && typeof active === "object" ? (
      <div className="fixed inset-0 grid place-items-center z-[100]">
        <motion.button
          key={`button-${active.title}-${id}`}
          layout
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.05,
            },
          }}
          className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-900 rounded-full h-6 w-6"
          onClick={() => setActive(null)}
        >
          <CloseIcon />
        </motion.button>
        <motion.div
          layoutId={`card-${active.title}-${id}`}
          ref={ref}
          className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
        >
          <motion.div layoutId={`image-${active.title}-${id}`}>
            <Image
              priority
              width={1920}
              height={1080}
              src={active.src}
              alt={active.title}
              className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
            />
          </motion.div>

          <div>
            <div className="flex justify-between items-start p-4">
              <div className="">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-medium text-neutral-200 text-base text-[20px] pt-2 "
                >
                  {active.title}
                </motion.h3>
              </div>
              <motion.a
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                href={active.ctaLink}
                target="_blank"
                className=""
              >
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] pointer-events-none" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    {active.ctaText}
  </span>
</button>

              </motion.a>
            </div>
            <div className="relative px-4">
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-neutral-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
              >
                {typeof active.content === "function"
                  ? active.content()
                  : active.content}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    ) : null}
  </AnimatePresence>
  <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
    {cards.map((card, index) => (
      <motion.div
        layoutId={`card-${card.title}-${id}`}
        key={card.title}
        onClick={() => setActive(card)}
        className="p-4 flex flex-col hover:bg-neutral-800 rounded-xl cursor-pointer hover:text-white"
      >
        <div className="flex gap-4 flex-col w-full ">
          <motion.div layoutId={`image-${card.title}-${id}`}>
            <Image
              width={1920}
              height={1080}
              src={card.src}
              alt={card.title}
              className="h-60 w-full rounded-lg object-cover object-top shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            />
          </motion.div>
          <div className="flex justify-center items-center flex-col">
            <motion.h3
              layoutId={`title-${card.title}-${id}`}
              className="font-semibold text-black-800 text-center md:text-left text-base text-lg"
            >
              {card.title}
            </motion.h3>
          </div>
        </div>
      </motion.div>
    ))}
  </ul>
</div>

      </div>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Technical Courses",
    src: "/images/robot.jpg",
    ctaText: "View More",
    ctaLink: "/technical",
    content: () => {
      return (
        <p>
          Here's a list of all technical courses that we offer:
          <ul className="list-disc list-inside ">
            <li>AI & ML</li>
            <li>Electric vehicle</li>
            <li>Data Science and Machine Learning</li>
            <li>Cybersecurity</li>
            <li>Cloud Computing</li>
            <li>Network Design</li>
            <li>Artificial Intelligence</li>
            <li>Deep Learning</li>
            <li>Internet of Things (IoT)</li>
            <li>Blockchain Technology</li>
            <li>Big Data Analytics</li>
            <li>Embedded Systems Design</li>
            <li>Robotics and Automation</li>
            <li>Advanced Programming Languages</li>
            <li>Systems Analysis</li>
          </ul>
        </p>
      );
    },
  },
  {
    title: "Biological Courses",
    src: "/images/biotech.jpg",
    ctaText: "View More",
    ctaLink: "/biological",
    content: () => {
      return (
        <p>
          Here's a list of all biological courses that we offer:
          <ul className="list-disc list-inside ">
            <li>Vaccine Technology</li>
            <li>Bioinformatics</li>
            <li>Cancer Biology</li>
            <li>Neurobiology</li>
            <li>Personalized Medicine</li>
            <li>Medical Microbiology</li>
            <li>Biotechnology Innovations</li>
            <li>Environmental Genomics</li>
            <li>Systems Biology</li>
            <li>Forensic Science</li>
            <li>Molecular Biology</li>
          </ul>
        </p>
      );
    },
  },

];

<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Magic
  </span>
</button>