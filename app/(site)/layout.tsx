import "./../globals.css";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Oswald } from "next/font/google";
import GoogleAnalytics from "../utils/googleAnalytics";

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
        className={`${font.className} text-white bg-gradient-to-l from-violet-900 via-indigo-700 to-indigo-500`}
      >
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Navbar />
        {children}
        <Footer name="Christian Hernandez" />
      </body>
    </html>
  );
}
