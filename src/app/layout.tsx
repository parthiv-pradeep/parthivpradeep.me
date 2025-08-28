import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/contact-form-modal";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parthiv | Web Developer Kerala | AI & Website Solutions",
  description:
    "Parthiv is a web developer in Kerala specializing in website apps and AI solutions. Fast, responsive, SEO-optimized web development for businesses in Kerala and worldwide.",
  keywords: [
    "Parthiv",
    "Web Developer Kerala",
    "AI Solutions Kerala",
    "Website Developer Kerala",
    "Full-Stack Developer",
    "Web Apps",
    "AI Developer",
    "Freelance Web Developer",
    "Kerala Web Development",
    "Modern Web Technologies",
    "SEO Kerala",
    "Business Websites Kerala"
  ],
  authors: [{ name: "Parthiv Pradeep", url: "https://www.parthivpradeep.me/" }],
  openGraph: {
    title: "Parthiv Pradeep | Full-Stack Developer Portfolio",
    description:
      "Explore Parthiv Pradeep's cutting-edge full-stack development projects, utilizing modern frameworks like React, Next.js, and Tailwind CSS.",
    url: "https://www.parthivpradeep.me/",
    siteName: "Parthiv Pradeep Portfolio",
    images: [
      {
        url: "https://www.parthivpradeep.me/preview.png",
        width: 1200,
        height: 630,
        alt: "Parthiv Pradeep Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parthiv Pradeep | Full-Stack Developer Portfolio",
    description:
      "Showcasing innovative web projects using React, Next.js, and modern UI/UX practices.",
    images: ["https://www.parthivpradeep.me/preview.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={cn("font-sans antialiased relative", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children} {/* Main Page Content */}
          <Footer />
          <ContactFormModal />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
