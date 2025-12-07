import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative z-[30]"
      id="projects"
      style={{ pointerEvents: 'auto' }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full max-w-5xl mx-auto px-10 relative z-[30]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            src="/project0managment.png"
            title="Project Management System"
            description="Full-stack MERN application with Kanban boards and task management, supporting 50+ concurrent users. Configured infrastructure-as-code using Terraform for AWS EC2, VPC, and RDS. Implemented Ansible playbooks for automated deployment workflows."
            skills="MERN, Terraform, Ansible"
          />
          <ProjectCard
            src="/project-code.png"
            title="Project Code"
            description="An AI-powered platform designed to revolutionize project-based learning. Stop watching tutorials and start building real-world applications with dynamically generated, step-by-step guidance. Features AI-powered tutorial generation, structured learning paths, on-demand content, interactive checklists, personalized AI assistance, and project discovery. Built with Next.js 15, TypeScript, Google Gemini via Genkit, ShadCN UI, and Tailwind CSS."
            link="https://projectcode.byteom.in/"
            skills="Next.js 15, TypeScript, Google Gemini, ShadCN UI, Tailwind CSS, React Hook Form, Zod"
          />
          <ProjectCard
            src="/certifyo.png"
            title="Certifyo - E-Learning Platform"
            description="Architected & deployed production-grade e-learning platform on AWS + Vercel serving 1000+ users with 99.99% uptime. Engineered AI-powered interview practice platform with OpenAI APIs. Optimized performance reducing page load time by 60% via database optimization, caching & CDN."
            link="https://certifyo.tech/"
            skills="AWS, Vercel, OpenAI, React, Next.js, Node.js"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
