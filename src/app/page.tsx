import { CallToAction } from "@/sections/CallToAction";
import { Courses } from "@/sections/Courses";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { WhyUs } from "@/sections/WhyUs";


export default function Home() {
  return <>
    <Header />
    <Hero />
    <LogoTicker />
    <ProductShowcase />
    <WhyUs />
    <Courses />
    <CallToAction />
    <Footer />
  </>
}
