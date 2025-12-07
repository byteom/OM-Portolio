import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-col sm:flex-row items-center justify-around flex-wrap gap-6 sm:gap-4">
                

                <div className="w-full sm:min-w-[200px] sm:max-w-[250px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-sm sm:text-base mb-2 sm:mb-0">Contact</div>
                    <a href="tel:+917488804979" className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <span className="text-xs sm:text-sm md:text-[15px] break-all text-center">+91-7488804979</span>    
                    </a>
                    <a href="mailto:anweerathour9@gmail.com" className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <span className="text-xs sm:text-sm md:text-[15px] break-all text-center">anweerathour9@gmail.com</span>    
                    </a>
                </div>
                <div className="w-full sm:min-w-[200px] sm:max-w-[250px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-sm sm:text-base mb-2 sm:mb-0">Social Media</div>
                    <a href="https://linkedin.com/in/byteom" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <RxLinkedinLogo className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm md:text-[15px] ml-2 sm:ml-[6px]">LinkedIn</span>    
                    </a>
                    <a href="https://github.com/byteom" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-2 sm:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                        <RxGithubLogo className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm md:text-[15px] ml-2 sm:ml-[6px]">GitHub</span>    
                    </a>
                </div>
                <div className="w-full sm:min-w-[200px] sm:max-w-[250px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-sm sm:text-base mb-2 sm:mb-0">About</div>
                   <p className="flex flex-row items-center my-2 sm:my-[15px]">
                        <span className="text-xs sm:text-sm md:text-[15px] text-center">Full Stack Developer</span>    
                    </p>
                    <p className="flex flex-row items-center my-2 sm:my-[15px]">
                        <span className="text-xs sm:text-sm md:text-[15px] text-center">Cloud Engineer</span>    
                    </p>
                    <p className="flex flex-row items-center my-2 sm:my-[15px]">
                        <span className="text-xs sm:text-sm md:text-[15px] text-center">Certifyo | Jan 2025 - Present</span>    
                    </p>
                </div>
            </div>

            <div className="mb-4 sm:mb-[20px] mt-4 text-xs sm:text-sm md:text-[15px] text-center px-4">
                &copy; OM SINGH 2025. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer