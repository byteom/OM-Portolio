"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { RxGithubLogo, RxLinkedinLogo, RxDownload, RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
            />

            <span className="font-bold ml-[8px] sm:ml-[10px] hidden sm:block text-gray-300 text-sm sm:text-base">
              OM SINGH
            </span>
          </a>

          <div className="hidden md:flex md:w-[500px] h-full flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-sm">
              <a href="#about-me" className="cursor-pointer hover:text-purple-400 transition-colors">
                About me
              </a>
              <a href="#skills" className="cursor-pointer hover:text-purple-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer hover:text-purple-400 transition-colors">
                Projects
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-2 sm:gap-3 md:gap-5 items-center">
            <a
              href="https://drive.google.com/file/d/1IZILbeq8gIOsFQAt6uDbnFyqaHNRQFQk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-xs sm:text-sm font-medium"
            >
              <RxDownload size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <a
              href="https://linkedin.com/in/byteom"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity text-gray-300 hidden sm:block"
            >
              <RxLinkedinLogo size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/byteom"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity text-gray-300 hidden sm:block"
            >
              <RxGithubLogo size={20} className="sm:w-6 sm:h-6" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-[65px] left-0 w-full bg-[#030014] bg-opacity-95 backdrop-blur-md z-40 md:hidden border-b border-[#7042f861]">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#about-me"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 hover:text-purple-400 transition-colors py-2 px-4 rounded-lg hover:bg-[#0300145e]"
            >
              About me
            </a>
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 hover:text-purple-400 transition-colors py-2 px-4 rounded-lg hover:bg-[#0300145e]"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 hover:text-purple-400 transition-colors py-2 px-4 rounded-lg hover:bg-[#0300145e]"
            >
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1IZILbeq8gIOsFQAt6uDbnFyqaHNRQFQk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-sm font-medium"
            >
              <RxDownload size={18} />
              Resume
            </a>
            <div className="flex flex-row gap-4 pt-2 border-t border-[#7042f861]">
              <a
                href="https://linkedin.com/in/byteom"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80 transition-opacity text-gray-300"
              >
                <RxLinkedinLogo size={24} />
              </a>
              <a
                href="https://github.com/byteom"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80 transition-opacity text-gray-300"
              >
                <RxGithubLogo size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
