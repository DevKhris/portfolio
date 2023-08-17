import "./../globals.css";

import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const font = Oswald({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian Hernandez",
  description: "A personal software developer portfolio",
  openGraph: {
    images: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        ></link>
      </head>
      <body
        className={`${font.className} bg-gradient-to-bl from-violet-950 to-violet-700 text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

