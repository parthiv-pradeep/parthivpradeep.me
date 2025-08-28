"use client";
import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = [
  {
    title: "Medieval Life",
    description:
      "A comprehensive e-commerce platform for Medieval Life, featuring an intuitive shopping experience with advanced product management and seamless payment integration.",
    short: "/projects/medivallife.mp4",
    features: [
      "Advanced product categorization and filtering",
      "Secure payment gateway integration",
      "Real-time inventory management",
      "User-friendly admin dashboard",
      "Responsive mobile-first design"
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Stripe"
    ],
    link: "https://medievallife.ae",
    sourceCode: "https://github.com/parthiv-pradeep/medieval-life",
  },

  {
    title: "Nirantr",
    description:
      "A dynamic web platform for Nirantr, showcasing their services and facilitating seamless client engagement through an interactive interface.",
    short: "/projects/nirantr.mp4",
    features: [
      "Interactive service showcase",
      "Contact form integration",
      "Portfolio gallery",
      "Blog section with CMS",
      "Performance optimized animations"
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express"
    ],
    link: "https://nirantr.com",
    sourceCode: "https://github.com/parthiv-pradeep/nirantr",
  },

  {
    title: "Future Talk Edu",
    description:
      "An educational platform for Future Talk Edu, providing comprehensive course management and student engagement features.",
    short: "/projects/futuretalkedu.mp4",
    features: [
      "Course management system",
      "Student progress tracking",
      "Interactive learning modules",
      "Live session integration",
      "Automated assessment system"
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Prisma",
      "PostgreSQL"
    ],
    link: "https://futuretalkedu.in",
    sourceCode: "https://github.com/parthiv-pradeep/future-talk-edu",
  },
];

export default function ProjectCard() {
  return (
    <div className="space-y-28">
      {Projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row justify-center gap-10"
        >
          <section className="lg:w-1/2">
            <video
              src={project.short}
              autoPlay={true}
              loop
              muted
              playsInline
              className="rounded-3xl"
            ></video>
          </section>

          <section className="flex gap-4 pt-3 lg:w-1/2">
            <div className="hidden md:block">
              <h2 className="text-3xl lg:text-4xl">🎉</h2>
            </div>

            <div className="space-y-4 lg:space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold">
                  {project.title}
                </h3>

                <p>{project.description}</p>

                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex gap-1"
                    >
                      <span>✨</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`hover:opacity-90 transition-opacity px-4 py-2 text-xs`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {/* Live Demo and View Code buttons removed as requested */}
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
