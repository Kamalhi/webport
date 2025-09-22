import React from "react";
import Image from "next/image";
import assets from "@/assets/assets";
import { listMap } from "@/assets/icons";

const About = () => {
  return (
    <section id="about" className="w-full px-[12%] py-20 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl font-medium">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 mb-4">
        <div className="w-64 sm:w-80  rounded-3xl max-w-none">
          <Image
            src={assets.avatarImage}
            alt=""
            className="w-full rounded-3xl"
          ></Image>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-center text-lg">
            Lulusan Teknik Informatika-Universitas Dian Nuswantoro Semarang
            dengan GPA 3.53. Memiliki kemauan kuat dalam mempelajari hal baru
            dan memiliki pengalaman magang di Tata Usaha Fakultas Ekonomi dan
            Bisnis Universitas Dian Nuswantoro. Memiliki pemahaman dalam
            pengembangan Website serta memiliki pengalaman dalam membuat Game
            Android dalam event ulang tahun Direktoral Jenderal Pajak.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {listMap.map(
              ({ icon: Icon, titlE, iconAlt, description }, index) => (
                <li
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#eff1ed] hover:-translate-y-1 duration-300 flex flex-col items-center hover:shadow-[4px_4px_0_#080808] dark:bg-[#1f1f1f] dark:text-white dark:border-white dark:hover:bg-[#cbcbcb] dark:hover:text-black dark:hover:shadow-[4px_4px_0_#dceacd] dark:hover:border-black"
                  key={index}
                >
                  <div className="">
                    <Icon
                      className="w-12 mt-3"
                      aria-label={iconAlt}
                      title={iconAlt}
                      strokeWidth={1}
                    />
                  </div>
                  <p className="font-bold my-4 text-center">{titlE}</p>
                  {/* Cek apakah description array atau string */}
                  {Array.isArray(description) ? (
                    <ul className="ml-4 list-disc text-justify self-stretch">
                      {description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <h3>{description}</h3>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
