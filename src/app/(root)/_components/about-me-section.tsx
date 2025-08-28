import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section id="about-me" className="container py-24 lg:py-32 flex flex-col md:flex-row items-center gap-10 md:gap-20">
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-64 h-80 md:w-80 md:h-96 flex items-center justify-center">
          {/* Decorative blob shape */}
          <div className="absolute inset-0 z-0" aria-hidden="true"
            style={{
              clipPath: 'ellipse(60% 75% at 50% 50%)',
              background: 'linear-gradient(135deg, var(--primary)/10 0%, var(--secondary)/10 100%)',
              backgroundColor: 'var(--background)',
              opacity: 0.7
            }}
          />
          {/* Decorative hexagon shape */}
          <div className="absolute inset-0 z-0" aria-hidden="true"
            style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
              background: 'linear-gradient(120deg, var(--secondary)/10 0%, var(--primary)/10 100%)',
              backgroundColor: 'var(--background)',
              opacity: 0.5
            }}
          />
          {/* Main photo */}
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl z-10 bg-background flex items-center justify-center">
            <Image
              src="/parthiv.png"
              alt="Parthiv Pradeep photo"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tighter text-primary mb-2">
          About Me
        </h2>
        <p className="text-lg text-muted-foreground font-medium">
          I’m an <span className="text-primary font-semibold">AI Engineer</span> and <span className="text-primary font-semibold">Full Stack Developer</span> passionate about building intelligent, scalable, and user-focused solutions. With expertise in both AI/ML systems and end-to-end web development, I bridge the gap between advanced technology and real-world applications.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">AI/ML Systems</span>
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">Full Stack Web</span>
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">User Experience</span>
        </div>
      </div>
    </section>
  );
}
