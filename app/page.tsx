"use client";

import Head from "next/head";
import * as React from "react";
import { motion } from "framer-motion";

import { HowItWorks } from "@/components/HowItWorks";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import GetInTouch from "@/components/GetInTouch";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationServices from "@/components/LocationServices";
import AnyServiceYouNeed from "@/components/AnyServiceYouNeed";
import DownloadKraftaa from "@/components/DownloadKraftaa";

export default function HomePage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center bg-[#FFFFFF]"
    >
      <Head>
        <title>kraftaa</title>
      </Head>

      <section>
        <Hero />
        <GetInTouch />
        <WhyChooseUs />
        <AnyServiceYouNeed />
        <LocationServices />
        <HowItWorks />
        <DownloadKraftaa />
        <SocialLinks />
        <Footer />
      </section>
    </motion.main>
  );
}
