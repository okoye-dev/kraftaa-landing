import Image from "next/image";
import React, { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { downloadOptions } from "@/constants";
import logoSec from "@/assets/svgs/logo-sec.svg";
import mobileImage from "@/assets/images/mobile.png";
import { fadeInUp } from "./transitions";

const DownloadKraftaa: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="z-20 flex flex-col items-center py-16"
    >
      <div>
        <Image src={logoSec} alt="logo" className="w-40 md:w-60" />
      </div>

      <motion.p
        variants={fadeInUp}
        className="text-balance px-10 pb-6 text-center font-normal leading-5 text-[#242834] sm:text-xl md:text-left md:text-2xl md:font-medium"
      >
        Download Kraftaa mobile app for easy tracking...{" "}
      </motion.p>

      <div className="flex w-full items-center justify-center gap-[4vw]">
        <motion.div variants={phoneVariants} className="hidden md:block">
          <Image src={mobileImage} alt="mobile" />
        </motion.div>

        <div className="flex flex-col justify-center space-y-8 md:space-y-12">
          {downloadOptions.map((option, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              whileHover="hover"
              className="flex cursor-pointer items-center justify-center space-x-4"
            >
              <Image
                src={option.button}
                alt={option.store}
                className="w-60 md:w-80"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DownloadKraftaa;
