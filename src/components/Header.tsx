'use client';
import { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { motion } from "framer-motion";
import { navLinks } from "@/data/navLinks";

const variants = {
   open: {
      opacity: 1,
      transform: "translateX(0)",
   },
   closed: {
      opacity: 0,
      transform: "translateX(10%)",
   },
};

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header className="w-full text-sm py-4">
         <nav className="relative w-full px-4 flex items-center justify-between">
            <a className="font-semibold text-xl" href="#" aria-label="Brand">trasvelo</a>

            <button className="sm:hidden" onClick={toggleMenu} aria-label="Toggle menu">
               <TbMenu
                  title="Menu icon"
                  size={35}
                  className="bg-black text-white rounded-full p-2"
               />
            </button>

            <motion.div
               className={`${isMenuOpen ? "block" : "hidden"} absolute top-12 right-5 flex flex-col items-end gap-5`}

               animate={isMenuOpen ? "open" : "closed"}
               variants={variants}
            >
               {navLinks.map((link, i) => (
                  <a
                     key={i}
                     href={link.path}
                     onClick={toggleMenu}
                     className="font-medium hover:text-[var(--secondary)] active:text-[var(--accent)]"
                  >
                     {link.name}
                  </a>
               ))}
            </motion.div>

            {/* Menu for large screens */}
            <div className="hidden sm:flex sm:flex-row sm:gap-8 sm:static">
               {navLinks.map((link, i) => (
                  <a
                     key={i}
                     href={link.path}
                     className="font-medium hover:text-[var(--secondary)] active:text-[var(--accent)]"
                  >
                     {link.name}
                  </a>
               ))}
            </div>
         </nav>
      </header>
   );
}