import React from "react";
import Image from "next/image";
import assets from "@/assets/assets";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { EmailEnvelope } from "@/assets/icons";

const Footer = () => {
  return (
    <div className="bg-[#eff1ed] mt-20 py-8 dark:bg-[#d1d1d1] dark:text-[#0e0e0e]">
      <div className="max-w-[85rem] mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a
            href="#top"
            className="w-full flex justify-center md:justify-start hover:cursor-pointer"
          >
            <Image src={assets.iconWeb} alt="" className="w-36 block mx-auto" />
          </a>
          <div className="flex items-center gap-2">
            <EmailEnvelope className="w-8" strokeWidth={2.5} />
            <span>muhammedzyan@gmail.com</span>
          </div>
        </div>

        <div className="hidden md:block border-l-2 border-black h-20" />
        {/* +++++++++++ */}

        <div className="flex flex-row justify-center gap-8">
          <a
            href="https://whatsapp.com/username"
            className="gap-1 flex flex-col items-center hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-xl" />
            <span className="text-xs sm:text-sm">WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/username"
            className="gap-1 flex flex-col items-center hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl" />
            <span className="text-xs sm:text-sm">Instagram</span>
          </a>
          <a
            href="https://facebook.com/username"
            className="gap-1 flex flex-col items-center hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl" />
            <span className="text-xs sm:text-sm">Facebook</span>
          </a>
          <a
            href="https://linkedin.com/in/username"
            className="gap-1 flex flex-col items-center hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-xs sm:text-sm">Linkedin</span>
          </a>
          <a
            href="https://github.com/username"
            className="gap-1 flex flex-col items-center hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl" />
            <span className="text-xs sm:text-sm">Github</span>
          </a>
        </div>
        <div className="hidden md:block border-l-2 border-black h-20" />
        {/* +++++ */}

        <div className="flex flex-row justify-center md:justify-end gap-8 font-semibold ">
          <a href="#home" className="hover:underline hover:cursor-pointer">
            HOME
          </a>
          <a href="#about" className="hover:underline hover:cursor-pointer">
            ABOUT ME
          </a>
          <a href="#contact" className="hover:underline hover:cursor-pointer">
            CONTACT ME
          </a>
        </div>
      </div>
      {/* +++ */}
      <div className="border-t mx-auto max-w-5xl" />
      <p className="text-center text-sm py-4">
        &copy; 2025. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
