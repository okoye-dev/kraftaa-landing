import { motion } from "framer-motion";
import React, { FC } from "react";
import { fadeInUp, staggerContainer, zoomInFade } from "./transitions";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";
import logo from "@/assets/svgs/logo.svg";

const Footer: FC = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="flex flex-col items-center bg-black py-[50px]"
    >
      <motion.div variants={zoomInFade}>
        <Image src={logo} alt="logo" className="h-fit w-40 md:w-52" />
      </motion.div>

      <motion.p
        variants={fadeInUp}
        className="-mt-3 text-xs font-normal text-green-light md:text-base lg:text-lg"
      >
        Your Personal Connection to Local Experts...
      </motion.p>

      <motion.ul
        variants={staggerContainer}
        className="flex items-center gap-6 pt-4 text-[10px] font-medium text-white sm:text-xs md:flex md:gap-12 md:text-base lg:gap-16 lg:pt-8 lg:text-lg"
      >
        {footerLinks.map((link, i) => (
          <motion.li key={i} variants={fadeInUp} whileHover={{ scale: 1.1 }}>
            <Link
              href={link.href}
              className="duration-300 hover:text-[#BB22BB]"
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.footer>
  );
};

export default Footer;
