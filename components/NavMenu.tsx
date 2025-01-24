import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Store, Users, HomeIcon } from "lucide-react";

interface NavMenuProps {
  links: Array<{ name: string; href: string }>;
  isOpen: boolean;
  pathname: string;
}

export const NavMenu = ({ links, isOpen, pathname }: NavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute -left-40 -right-5 top-[175%] z-50 mt-2 rounded-2xl bg-white text-xs shadow-lg"
        >
          <ul className="overflow-hidden rounded-2xl">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const icons = {
                Home: [<Home key="1" />, <HomeIcon key="2" />],
                Services: [<Store key="1" />, <Store key="2" />],
                "Top Clients": [<Users key="1" />, <Users key="2" />],
              }[link.name];

              return (
                <li key={link.name} className="overflow-hidden">
                  <Link
                    href={link.href}
                    className={`group flex items-center px-4 py-4 font-semibold duration-500 hover:bg-green-light/40 ${
                      isActive ? "text-purple" : "text-darkblue/60"
                    }`}
                  >
                    <span className="absolute left-4 transition-opacity duration-300 group-hover:opacity-0">
                      {icons?.[0]}
                    </span>

                    <span className="absolute left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {icons?.[1]}
                    </span>

                    <span className="ml-8">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
