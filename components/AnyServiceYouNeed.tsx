import { motion, useInView } from "framer-motion";
import React, { FC, useRef } from "react";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import engineer from "@/assets/images/Categg.png";
import { services } from "@/constants";

const AnyServiceYouNeed: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const zoomInFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="mt-80 w-full">
      <div className="bg-darkblue px-3 sm:px-10">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex -translate-y-32 flex-col items-start justify-center gap-6 rounded-[30px] border border-[#1EAC23] bg-green-light p-4 sm:p-10 md:px-[5rem] md:py-[5rem] lg:flex-row lg:gap-[5rem]"
        >
          <div className="w-full py-3">
            <motion.h4
              variants={fadeInUp}
              className="text-ink mb-6 text-2xl font-bold sm:text-3xl md:mb-10 md:text-5xl"
            >
              Any <span className="text-purple">service</span> you need all in
              one <span className="text-purple">place</span>
            </motion.h4>

            <motion.div variants={zoomInFade}>
              <Image
                src={engineer}
                alt="service one"
                className="w-[80vw] lg:w-[40vw]"
              />
            </motion.div>
          </div>

          <div className="lg:flex lg:w-full lg:flex-col lg:justify-between lg:pt-6">
            <motion.p
              variants={fadeInUp}
              className="text-ink mb-6 text-lg font-medium leading-6 sm:text-xl md:text-2xl lg:mb-16"
            >
              With <span className="font-semibold text-purple">Kraftaa</span>,
              you will find a wide range of services you need whether at home or
              at work you can book from anywhere
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 rounded-[20px] border-2 border-darkblue bg-white/50 px-6 py-2 text-darkblue md:rounded-full md:py-3"
            >
              <input
                type="search"
                className="w-full bg-transparent focus:outline-none"
                placeholder="Find artisan"
              />
              <SearchIcon className="w-6" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2 py-6 lg:py-10"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  variants={serviceVariants}
                  custom={index}
                  className="w-fit cursor-pointer rounded-[20px] border-2 border-darkblue px-4 py-1 text-sm duration-500 hover:bg-white/50 md:py-2 md:text-base lg:px-6"
                >
                  {service}
                </motion.div>
              ))}
              <motion.div
                variants={serviceVariants}
                custom={services.length}
                className="w-fit cursor-pointer rounded-[20px] border-2 border-darkblue bg-white px-4 py-1 text-sm duration-500 hover:bg-white/50 md:py-2 md:text-base lg:px-6"
              >
                More...
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnyServiceYouNeed;
