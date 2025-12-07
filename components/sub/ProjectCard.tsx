"use client";

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
  skills?: string;
}

const ProjectCard = ({ src, title, description, link, skills }: Props) => {
  const imageContent = link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain hover:opacity-90 transition-opacity"
      />
    </a>
  ) : (
    <Image
      src={src}
      alt={title}
      width={1000}
      height={1000}
      className="w-full object-contain"
    />
  );

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[30] h-full flex flex-col">
      <div className="flex-shrink-0">
        {imageContent}
      </div>

      <div className="relative p-3 sm:p-4 z-[30] flex flex-col flex-grow" style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>
        <h1 className="text-xl sm:text-2xl font-semibold text-white" style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>{title}</h1>
        {skills && (
          <p className="mt-2 text-xs sm:text-sm text-purple-400 break-words" style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>
            <span className="font-semibold">Skills: </span>{skills}
          </p>
        )}
        <p className="mt-2 text-sm sm:text-base text-gray-300 flex-grow" style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 sm:mt-4 inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-xs sm:text-sm font-medium z-[40] relative cursor-pointer self-start"
            style={{ pointerEvents: 'auto' }}
          >
            Visit Live Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
