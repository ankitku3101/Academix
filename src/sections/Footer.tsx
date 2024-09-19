import logo from "@/assets/logo.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#d1e3ee]">
      <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/#hero" className="flex items-center">
              <Image
                src={logo}
                height={40}
                width={50}
                className="h-8 me-3"
                alt="Academix Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                ACADEMIX
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Links
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/#courses" className="hover:underline">
                    Courses
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#whyus" className="hover:underline">
                    Why Us ?
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/#" className="hover:underline">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href={'/PrivacyPolicy'} className="hover:underline">
                      Privacy & Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={'/ShippingDeliveryPolicy'} className="hover:underline">
                      Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link href={'/RefundCancellationPolicy'} className="hover:underline">
                      Refund & Cancellation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <a href="/#hero" className="hover:underline">
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
