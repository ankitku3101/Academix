import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Alfa_Slab_One } from "next/font/google";

const Alfa = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
});

export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/#hero" className="flex flex-col items-start">
              <span
                className={`${Alfa.className} self-start text-2xl font-semibold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text`}
              >
                ACADEMIX
              </span>
            </a>
              <div className="hidden lg:block mt-8">
                <p className="text-gray-400 text-sm">
                  Join us now to access top-tier educational resources <br/> and training programs in future technologies, designed for <br/> students and professionals seeking to advance their skills.
                </p>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-2 md:gap-0 sm:grid-cols-3 lg:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Links
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/#courses" className="hover:underline text-white">
                    Courses
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#whyus" className="hover:underline text-white">
                    Why Us ?
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#contact" className="hover:underline text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/#" className="hover:underline text-white">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.facebook.com/profile.php?id=61562958069922" className="hover:underline text-white">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.instagram.com/__academix/" className="hover:underline text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href={'/PrivacyPolicy'} className="hover:underline text-white">
                    Privacy & Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={'/ShippingDeliveryPolicy'} className="hover:underline text-white">
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link href={'/RefundCancellationPolicy'} className="hover:underline text-white">
                    Refund & Cancellation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block ml-14">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Suggested
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/#ai-ml" className="hover:underline text-white">
                    AI & ML
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#robotics" className="hover:underline text-white">
                    Agriculture
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#cybersec" className="hover:underline text-white">
                    Cancer Biology
                  </a>
                </li>
                <li>
                  <a href="/#webdev" className="hover:underline text-white">
                    Web Dev
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2024{" "}
            <a href="/#hero" className="hover:underline text-white">
              Academix
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
