import { motion } from "framer-motion";
import React, { FC } from "react";
import { fadeInUp, staggerContainer, zoomInFade } from "./transitions";
import { carouselImages } from "@/constants";
import { Carousel } from "./Carousel";

const WhyChooseUs: FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="space-y-3 my-16"
    >
      <motion.h4
        variants={fadeInUp}
        className="mb-3 text-center text-2xl font-bold sm:mb-10 sm:px-10 sm:text-3xl md:text-5xl"
      >
        Why Choose{" "}
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
          Kraftaa
        </motion.span>
      </motion.h4>

      <motion.div variants={zoomInFade}>
        <Carousel images={carouselImages} />
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;
