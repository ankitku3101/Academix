import logo from "@/assets/logo.png"
import Image from "next/image";
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedIn from "@/assets/social-linkedin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
          <Image src={logo} height={40} alt="logo" className="relative"/>
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href='#productshowcase'>About</a>
          <a href='#whyus'>Why Us</a>
          <a href='#courses'>Courses</a>
          <a href='#contact'>Contact</a> 
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Academix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
