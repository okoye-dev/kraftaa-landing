import { motion } from "framer-motion";
import React, { FC } from "react";
import { fadeInUp, staggerContainer, zoomInFade } from "./transitions";
import Image from "next/image";
import webExample from "@/assets/images/example-img.png";

const GetInTouch: FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="my-20"
    >
      <motion.h4
        variants={fadeInUp}
        className="text-ink px-6 text-center text-2xl font-bold sm:px-10 sm:text-3xl md:px-[5vw] md:text-5xl"
      >
        Get in touch with the best{" "}
        <motion.span
          animate={{
            color: ["#6828B0", "#8A4FD3", "#6828B0"],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          Artisans
        </motion.span>{" "}
        <br className="hidden lg:flex" /> that offer{" "}
        <motion.span
          animate={{
            color: ["#6828B0", "#8A4FD3", "#6828B0"],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        >
          Quality
        </motion.span>{" "}
        services
      </motion.h4>
      <motion.div
        variants={zoomInFade}
        className="flex w-full items-center justify-center"
      >
        <Image
          src={webExample}
          alt="demo image"
          className="max-h-[90vh] w-fit"
        />
      </motion.div>
    </motion.section>
  );
};

export default GetInTouch;
