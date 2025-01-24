import { motion } from "framer-motion";
import React, { FC } from "react";
import { popUp, staggerContainer, zoomInFade } from "./transitions";
import Link from "next/link";
import Image from "next/image";

import facebook from "@/assets/svgs/facebook.svg";
import insta from "@/assets/svgs/instagram.svg";
import tiktok from "@/assets/svgs/tiktok.svg";
import linkedin from "@/assets/svgs/x.svg";

const SocialLinks: FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.ul
        variants={zoomInFade}
        className="mb-[39px] flex items-center justify-center space-x-7 md:mb-[77px] md:space-x-12"
      >
        {[facebook, insta, tiktok, linkedin].map((icon, index) => (
          <motion.li key={index} variants={popUp} whileHover={{ scale: 1.2 }}>
            <Link href="/">
              <Image
                className="w-6 md:w-10"
                src={icon}
                alt={`social media ${index + 1}`}
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default SocialLinks;
