import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useState } from "react";
import { NavMenu } from "./NavMenu";
import { links } from "@/constants";
import Image from "next/image";
import { fadeInUp, popUp } from "./transitions";
import { usePathname } from "next/navigation";

import menu from "@/assets/svgs/menu.svg";
import logo from "@/assets/svgs/logo.svg";
import Link from "next/link";

const Navbar: FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={fadeInUp}
      className="absolute top-4 z-50 flex w-[90vw] items-center justify-between rounded-[100px] bg-purple px-[21px] md:py-1"
    >
      <motion.div whileHover={{ scale: 1.05 }}>
        <Image src={logo} alt="logo" className="w-24" />
      </motion.div>

      <ul className="hidden items-center space-x-11 text-base font-medium text-white md:flex">
        {links.map((link, i) => (
          <li key={i} className={pathname == link.href ? "" : "text-white"}>
            <Link href="/">{link.name}</Link>
          </li>
        ))}
      </ul>

      <motion.button
        variants={popUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden rounded-[100px] bg-darkblue px-5 py-[10px] font-semibold text-white md:block"
      >
        Sign up
      </motion.button>

      <div className="relative flex md:hidden">
        <button
          type="button"
          title="menu toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="transition-opacity hover:opacity-80"
        >
          <Image alt="menu" src={menu} height={24} width={24} />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <div>
              <NavMenu links={links} isOpen={isMenuOpen} pathname={pathname} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
