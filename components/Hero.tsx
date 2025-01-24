import { motion } from "framer-motion";
import { fadeIn, fadeInUp, popUp, staggerContainer } from "./transitions";
import Image from "next/image";
import heroLogo from "@/assets/images/hero-logo.png";
import circleBg from "@/assets/images/circle.png";
import location from "@/assets/svgs/location.svg";
import pattern from "@/assets/images/pattern.png";
import clippers from "@/assets/svgs/clippers.svg";
import Navbar from "./Navbar";

export const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      className="hero-bg flex h-screen flex-col items-center justify-center pt-12"
    >
      <Image
        src={circleBg}
        alt=""
        className="absolute z-20 w-[90vw] translate-y-2 sm:w-[80vw] md:w-[68vw] lg:w-[42vw] lg:min-w-[32rem]"
      />
      <Image
        src={pattern}
        alt=""
        className="absolute top-0 h-screen w-full object-cover"
      />
      <Navbar />

      <motion.div
        variants={staggerContainer}
        className="z-20 flex flex-col items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg"
      >
        <motion.div
          variants={fadeInUp}
          className="flex items-center space-x-2 rounded-[60px] border border-[#E8E8E8] bg-white p-2 md:py-2 lg:space-x-3 lg:px-3"
        >
          <Image src={location} alt="" className="md:w-10 lg:w-12" />
          <h4 className="font-semibold text-[#242834]">Find artisan</h4>
          <div className="h-5 border-r border-r-[#D9D9D9]"></div>
          <Image src={clippers} alt="clipper icon" className="w-4 md:w-5" />
          <h5 className="lg:-translate-x-2">
            Barber <span className="text-sm text-darkblue/30">etc...</span>
          </h5>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Image
            src={heroLogo}
            alt=""
            className="w-80 sm:w-96 md:w-[25rem] lg:w-[30rem]"
          />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold text-[#5C6378] sm:text-xl md:text-2xl lg:text-[1.25rem]"
        >
          Your Personal Connection to Local Experts
        </motion.p>

        <motion.div
          variants={popUp}
          whileHover={{ scale: 1.05 }}
          className="z-20 mt-3 overflow-hidden rounded-[50px] border-2 border-purple px-4 py-1 duration-300 hover:bg-purple hover:px-0 hover:py-0 sm:mt-5"
        >
          <button
            type="button"
            className="cursor-pointer rounded-[100px] bg-purple px-5 py-[10px] text-sm font-semibold text-white duration-300 hover:px-12 hover:py-3 hover:text-lg sm:px-7 sm:text-base"
          >
            Get started
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
