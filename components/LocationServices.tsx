import { motion } from "framer-motion";
import React, { FC } from "react";
import {
  fadeInUp,
  popUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "./transitions";
import Image from "next/image";
import booked from "@/assets/svgs/booked.svg";
import busyRoad from "@/assets/images/busy-road2.png";
import pattern from "@/assets/images/pattern.png";

const LocationServices: FC = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="relative z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-white px-8 py-32 md:flex-row md:space-x-[5vw] md:px-8 lg:gap-6 lg:px-16"
  >
    <Image
      src={pattern}
      alt=""
      className="absolute top-0 h-full w-full object-cover"
    />

    <motion.div
      variants={slideInLeft}
      className="relative px-6 md:w-full md:px-0"
    >
      <Image src={busyRoad} alt="busy road" className="md:w-[50vw]" />
      <motion.div
        initial={{ rotate: -10, scale: 0.9 }}
        animate={{
          rotate: 10,
          scale: 1.1,
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        className="absolute -right-2 -top-10 w-32 sm:w-40 md:-right-10"
      >
        <Image src={booked} alt="busy road" className="w-full" />
      </motion.div>
    </motion.div>
    <motion.div
      variants={slideInRight}
      className="-order-last mb-6 flex flex-col gap-4 md:order-last md:mb-0 md:w-full md:space-y-[3.5vw] lg:gap-2"
    >
      <motion.h4
        variants={fadeInUp}
        className="z-10 text-center text-2xl font-bold leading-7 sm:px-10 sm:text-3xl md:px-0 md:text-left md:text-[5vw] md:font-semibold md:leading-[5vw] lg:text-5xl"
      >
        Find Artisan by <span className="text-[#6828B0]">location</span>
      </motion.h4>

      <motion.p
        variants={fadeInUp}
        className="z-10 text-balance pb-6 pt-4 text-center text-base font-normal leading-5 sm:text-xl md:p-0 md:text-left md:leading-7 lg:text-[1.7rem] lg:leading-10"
      >
        You can easily find skilled artisans based on your location. Whether
        you&apos;re at home or at work, simply search for the services you need
        and connect with trusted professionals nearby.
      </motion.p>

      <motion.button
        variants={popUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        className="z-10 hidden justify-center overflow-hidden rounded-[50px] bg-[#6828B0] py-3 font-normal text-white duration-300 hover:scale-105 hover:opacity-90 md:flex md:text-lg lg:py-6 lg:text-3xl"
      >
        Find nearby artisan
      </motion.button>
    </motion.div>
  </motion.section>
);

export default LocationServices;
