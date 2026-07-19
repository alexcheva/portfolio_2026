import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexandra Lukinicheva | Senior Frontend Software Engineer",
  description: "Senior Frontend Software Engineer building performant, accessible, and intuitive web applications with React, Next.js, and TypeScript. View my portfolio, experience, and projects.",
  keywords: [
    "Alexandra Lukinicheva",
    "Senior Frontend Engineer",
    "Frontend Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Accessibility",
    "Performance",
    "WCAG",
    "Web Accessibility",
    "Storybook",
    "Data Visualization",
    "Responsive Design",
    "Web Performance Optimization",
    "San Francisco Bay Area",
    "Bay Area Frontend Engineer",
    "Bay Area Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Interactive Data Visualization",
    "Mapbox GL",
    "Canvas.js",
    "D3.js",
    "Frontend Architecture",
    "UI Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
