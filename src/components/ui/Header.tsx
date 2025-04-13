'use client';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks } from '@/data/navLinks';

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
      <header className="fixed w-full text-sm px-5 py-7 z-10 text-white">
         <nav className="relative w-full px-4 flex items-center justify-between">
            <a className="font-semibold text-xl" href="#" aria-label="Brand">trasvelo</a>

            <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
               <Menu
                  size={32}
                  className="bg-white text-black rounded-full p-2 active:scale-90 duration-200 ease"
               />
            </button>

            <motion.div
               className={`${isMenuOpen ? "block" : "hidden"} absolute top-12 right-5 flex flex-col items-end gap-3`}

               animate={isMenuOpen ? "open" : "closed"}
               variants={variants}
            >
               {navLinks.map((link, i) => (
                  <a
                     key={i}
                     href={link.path}
                     onClick={toggleMenu}
                     className="font-medium active:text-white"
                  >
                     {link.name}
                  </a>
               ))}
            </motion.div>

            {/* Menu for large screens */}
            <div className="hidden md:flex md:flex-row md:gap-8 md:static">
               {navLinks.map((link, i) => (
                  <a
                     key={i}
                     href={link.path}
                     className="font-medium active:text-white"
                  >
                     {link.name}
                  </a>
               ))}
            </div>
         </nav>
      </header>
   );
}