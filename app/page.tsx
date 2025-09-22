"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
// import Main from "@/app/components/main/main";
import Hero from "./components/main/hero";
import About from "./components/main/about";
import Contact from "./components/main/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
}
