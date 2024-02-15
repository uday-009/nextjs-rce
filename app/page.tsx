import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import FunFacts from "@/components/FunFacts";
import PricingTwo from "@/components/Pricing/PricingTwo";

export const metadata: Metadata = {
  title: "What We Do - RelateCentral",
  description: "RelateCentral",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <FunFacts />
      {/* <Video />
      <Brands /> */}
      <Pricing />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <PricingTwo />
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
