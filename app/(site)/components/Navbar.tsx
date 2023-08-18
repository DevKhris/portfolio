"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <header className="z-50 fixed w-full backdrop-blur-3xl backdrop-filter bg-purple-950 bg-opacity-30 top-0 drop-shadow shadow-md">
      <nav className="container mx-auto py-6">
        <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto">
          <Link href="/">
            <span className="inline-flex text-2xl">
              {"<"}
              <p className="text-white">Dev</p>
              <p className=" text-amber-400">Khris&nbsp;</p>
              {"/>"}
            </span>
          </Link>
          <ul className="flex space-x-4 items-center gap-x-8">
            <li>
              <a
                href="#about"
                className={`duration-300 hover:text-yellow-400 ${
                  active == "#about" ? "text-yellow-400" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`duration-300 hover:text-yellow-400 ${
                  active == "#experience" ? "text-yellow-400" : ""
                }`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="/#skills"
                className={`duration-300 hover:text-yellow-400 ${
                  active == "#skills" ? "text-yellow-400" : ""
                }`}
              >
                Skills
              </a>
            </li>
            {/* <li>
              <Link
                href="/articles"
                className={`duration-300 hover:text-yellow-400 ${
                  active == "articles" ? "text-yellow-400" : ""
                }`}
              >
                Blog
              </Link>
            </li> */}
            <li>
              <a
                href="/#projects"
                className={`duration-300 hover:text-yellow-400 ${
                  active == "#projects" ? "text-yellow-400" : ""
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className={`duration-300 hover:text-yellow-400 ${
                  active == "#contact" ? "text-yellow-400" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
