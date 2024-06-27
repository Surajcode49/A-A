import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NavMenu from "./NavMenu";
import Link from "next/link";
import logo from "../../../public/Images/Header/AplusA-Logo.svg";

const Navbar = () => {
 
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="relative flex items-center justify-between w-full p-2 bg-white z-20">
    
      <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src={logo}
              width={200}
              height={150}
              className="mx-10 my-2"
              alt="Logo"
            />
          </a>
        </Link>
      </motion.div>

    
      <div className="lg:hidden cursor-pointer mr-10" onClick={toggleMenu}>
        <div className="bg-main3 w-6 h-1 rounded-lg my-1"></div>
        <div className="bg-main3 w-6 h-1 rounded-lg my-1"></div>
        <div className="bg-main3 w-6 h-1 rounded-lg my-1"></div>
      </div>

      {/*Navbar*/}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none lg:flex lg:items-center z-30`}
      >
       
        <div
          className="lg:hidden cursor-pointer ml-10 mt-10"
          onClick={toggleMenu}
        >
          <div
            className={`transform -translate-x-1/2 -translate-y-1 bg-[#9C9A99] rounded-lg w-7 h-1 mb-1 transition-all ${
              menuOpen ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`transform -translate-x-1/2 -translate-y-1 bg-main3 rounded-lg w-7 h-1 mb-1 transition-all ${
              menuOpen ? "rotate-45 w-10 translate-y-1" : ""
            }`}
          ></div>
          <div
            className={`transform -translate-x-1/2 -translate-y-1 bg-[#9C9A99] rounded-lg w-7 h-1 mb-1 transition-all ${
              menuOpen ? "-rotate-45 w-10" : "rotate-0"
            }`}
          ></div>
        </div>

       
        <ul className="text-black text-lg flex flex-col lg:flex-row list-none space-y-4 lg:space-y-0 lg:space-x-8 p-6 lg:p-0 lg:ml-[-35vw]">
          <NavMenu Menu="Services" Route="/Services" />
          <NavMenu Menu="Industries" Route="/industries" />
          <NavMenu Menu="Partners" Route="/partners" />
          <NavMenu Menu="AplusA" Route="/AplusA" />
          <NavMenu Menu="Career" Route="/Career" />
          <NavMenu Menu="Contact" Route="/contact" />
        </ul>
      </nav>

     
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default React.memo(Navbar);
