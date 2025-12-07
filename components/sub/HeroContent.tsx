"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-20 mt-20 sm:mt-32 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-3 sm:gap-5 justify-center m-auto text-start order-2 md:order-1">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] px-[6px] sm:py-[8px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[8px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
          <h1 className="Welcome-text text-[11px] sm:text-[13px]">
            Full Stack Developer & Cloud Engineer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 sm:gap-6 mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              OM SINGH
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-3 sm:my-5 max-w-[600px]"
        >
          Full Stack Developer & Cloud Engineer at Certifyo. I architect and deploy production-grade applications on AWS + Vercel, engineer AI-powered platforms, and optimize performance. Passionate about building scalable solutions with 99.99% uptime.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg w-full sm:w-auto sm:max-w-[200px] text-sm sm:text-base"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
