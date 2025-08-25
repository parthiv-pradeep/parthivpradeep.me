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
  title: "Parthiv Pradeep | Portfolio",
  description:
    "Discover Parthiv Pradeep's full-stack developer portfolio featuring innovative projects, modern web technologies, and a passion for clean, user-friendly design. Explore expertise in React, Next.js, Tailwind CSS, and more.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "UI/UX Design",
    "Responsive Web Design",
    "Tailwind CSS",
    "Web Development Projects",
    "Modern Web Technologies",
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
