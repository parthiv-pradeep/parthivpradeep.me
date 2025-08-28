"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useKeyboardNavigation, useScrollNavigation } from "@/hooks/use-keyboard-navigation";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import { Particles } from "@/components/magicui/particles";

import Services from "./_components/services";
import AboutMeSection from "./_components/about-me-section";
import TechStack from "./_components/tech-stack";
import ProjectCard from "@/components/project-card";
import Testimonials from "./_components/testimonials";
import { ProjectSkeleton, TechStackSkeleton } from "@/components/loading-skeleton";

export default function Page() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [isLoading, setIsLoading] = useState(true);

  useKeyboardNavigation();
  useScrollNavigation();

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [theme]);

  // Structured data for SEO
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projects",
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "name": "Medieval Life",
        "description": "A comprehensive e-commerce platform for Medieval Life, featuring an intuitive shopping experience with advanced product management and seamless payment integration.",
        "url": "https://medievallife.ae"
      },
      {
        "@type": "CreativeWork",
        "name": "Nirantr",
        "description": "A dynamic web platform for Nirantr, showcasing their services and facilitating seamless client engagement through an interactive interface.",
        "url": "https://nirantr.com"
      },
      {
        "@type": "CreativeWork",
        "name": "Future Talk Edu",
        "description": "An educational platform for Future Talk Edu, providing comprehensive course management and student engagement features."
      }
    ]
  };

  const testimonialStructuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Person",
      "name": "Parthiv Pradeep"
    },
    "reviewBody": "Parthiv was a pleasure to work with. He delivered pixel-perfect HTML pages ahead of schedule and communicated clearly throughout the project. Highly recommended for any front-end work!",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Client"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialStructuredData) }} />
      <main>
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color={color}
        refresh
      />

      {/* About */}
      <section id="about" className="container py-24 lg:py-40">
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Full Stack Developer | Freelancer
            </h1>
            <p className="text-xl font-semibold text-primary">
              I build website apps and AI solutions that help businesses grow.
            </p>
            <p className="text-balance text-muted-foreground text-lg">
              Full Stack Developer crafting high-performance, scalable, and
              user-friendly web applications using modern technologies, clean
              code, and best practices for seamless user experiences.
            </p>
          </div>

          <div className="flex gap-4">
            <Link href="http://wa.me/+918078192618" target="_blank">
              <Button aria-label="Contact me on WhatsApp">
                <svg viewBox="0 0 24 24" className="size-4">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact Me
              </Button>
            </Link>

            {/* Social Links */}
            <div className="space-x-2">
              {/* Github */}
              <Link href="https://github.com/parthiv-pradeep" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="GitHub Profile"
                >
                  <svg viewBox="0 0 438.549 438.549" className="size-4">
                    <path
                      fill="currentColor"
                      d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                    ></path>
                  </svg>
                </Button>
              </Link>

              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/in/parthiv-pradeep" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                  >
                    <path
                      fill="currentColor"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    ></path>
                  </svg>
                </Button>
              </Link>

              {/* Instagram */}
              <Link href="https://www.instagram.com/paaarthiiv" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Instagram Profile"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* About Me Section */}
      <AboutMeSection />

      {/* Services */}
      <section className="container pb-24">
        <Services />
      </section>

      {/* Tech Stack */}
      <section className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
          Technology Stack
        </h2>

        {isLoading ? <TechStackSkeleton /> : <TechStack />}
      </section>

      {/* Latset Projects */}
      <section className="container py-12 md:py-24">
        <div className="flex justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Latset Projects
          </h2>

          <Link href={"/projects"} aria-label="See all projects">
            <Button variant={"outline"} className="ml-0.5">
              All Projects
              <ExternalLink className="size-4" />
            </Button>
          </Link>
        </div>

        {isLoading ? <ProjectSkeleton /> : <ProjectCard />}
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
          Testimonials
        </h2>
        <Testimonials />
      </section>


      </main>
    </>
  );
}
