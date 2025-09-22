"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import assets from "@/assets/assets";

import { DownloadIcon, MoonIcon, SunIcon } from "@/assets/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlDark = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      htmlDark.classList.add("dark");
      setIsDarkMode(true);
    } else {
      htmlDark.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const htmlDark = document.documentElement;
    if (isDarkMode) {
      htmlDark.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlDark.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-white shadow-md top-0 dark:bg-[#d1d1d1] dark:text-[#0e0e0e]">
        <div className="relative px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between">
          <a href="#top">
            <Image
              src={assets.iconWeb}
              alt=""
              className="w-28 cursor-pointer"
            />
          </a>

          <ul className="font-bold hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            {/* <li>
              <a href="#services">My Work</a>
            </li> */}
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>

          <div className="flex items-center gap-3 shrink-0">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <SunIcon
                  className={`w-6 cursor-pointer transition-all duration-500 ease-in-out transform${
                    isDarkMode ? "opacity-0" : "opacity-100"
                  }`}
                  strokeWidth={2.5}
                />
              ) : (
                <MoonIcon
                  className={`w-6 cursor-pointer transition-all duration-500 ease-in-out transform${
                    isDarkMode ? "opacity-100" : "opacity-0"
                  }`}
                  strokeWidth={2.5}
                />
              )}
            </button>
            <a
              href="/mycv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center px-10 py-2.5 gap-3 border border-gray-500 rounded-full ml-4 dark:bg-[#1f1f1f] dark:border-white dark:hover:bg-[#e4e4db] dark:text-white dark:hover:text-black dark:hover:border-black"
            >
              Get my Resume <DownloadIcon className="w-5" strokeWidth={2.5} />
            </a>
            <button className="block md:hidden ml-3" onClick={toggleMenu}>
              <Image
                src={isMenuOpen ? assets.closeIcon : assets.hamburgerMenu}
                alt=""
                className="w-8 cursor-pointer"
              ></Image>
            </button>
          </div>

          {/* Mobile Menu */}

          <ul
            className={`absolute flex md:hidden flex-col px-8 py-6 gap-4 right-0 bg-gray-500 top-full w-64 rounded-bl-lg transition duration-500 z-40 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <li>
              <a href="#top" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                My Work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
