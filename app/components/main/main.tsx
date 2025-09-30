import React from "react";
import Image from "next/image";
import assets from "@/assets/assets";
import { ArrowUp, ChevronDown } from "@/assets/icons";

const Main = () => {
  return (
    <main className="scroll-smooth">
      {/* Home Section */}
      <section
        id="home"
        className="w-11/12 max-w-3xl text-center items-center mx-auto h-screen flex flex-col justify-center gap-4"
      >
        <div>
          <Image
            src={assets.avatarImage}
            alt=""
            className="rounded-full w-32"
          ></Image>
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
          Halo!, Saya Kamal.
        </h3>
        <h1 className="text-2xl sm:text-6xl lg:text-[66px]">
          Pengembang Website Junior, Indonesia.
        </h1>
        <p className="max-w-2xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
          mollitia?
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="rounded-full bg-white shadow-md hover:bg-black hover:text-white hover:cursor-pointer px-10 py-3 border border-gray-300 flex items-center gap-2"
          >
            Contact Me
            <ArrowUp className="w-5" strokeWidth={2.5} />
            {/* <Image src={assets.rightUpIcon} alt="" className="w-5"></Image> */}
          </a>
          <a
            href="#about"
            className="rounded-full bg-white shadow-md hover:bg-black hover:text-white hover:cursor-pointer px-10 py-3 border border-gray-300 flex items-center gap-2"
          >
            Let&apos;s Go
            <ChevronDown className="w-5" strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className=""></section>
    </main>
  );
};

export default Main;
