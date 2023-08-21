"use client";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Navbar(): ReactElement {
  const [active, setActive] = useState("");

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="z-50 fixed w-full backdrop-blur-3xl backdrop-filter bg-purple-950 bg-opacity-30 top-0 drop-shadow shadow-md">
      <nav className="flex flex-wrap py-6 items-center justify-around">
        <div className="">
          <Link href="/">
            <span className="inline-flex text-2xl">
              {"<"}
              <p className="text-white">Dev</p>
              <p className=" text-amber-400">Khris&nbsp;</p>
              {"/>"}
            </span>
          </Link>
        </div>
        <div className="md:hidden block w-6 h-">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setToggleMenu(!toggleMenu);
            }}
          >
            <HiMenu cl size={24}></HiMenu>
          </Link>
        </div>
        <div
          className={`w-full md:flex md:flex-row md:items-center md:w-max sm:pt-2 sm:shadow-sm ${
            !toggleMenu === true ? "hidden" : ""
          } duration-300 ease-in-out transition-all `}
          id="menu"
        >
          <ul className="md:space-x-4 md:items-center md:gap-x-8 md:flex md:justify-between md:mt-0 mt-8">
            <li>
              <a
                href="#about"
                className={` mx-4 py-2 block duration-300 hover:text-yellow-400 ${
                  active == "#about" ? "text-yellow-400" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`mx-4 py-2 block duration-300 hover:text-yellow-400 ${
                  active == "#experience" ? "text-yellow-400" : ""
                }`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="/#skills"
                className={` mx-4 py-2 block duration-300 hover:text-yellow-400 ${
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
                className={` mx-4 py-2 block duration-300 hover:text-yellow-400 ${
                  active == "#projects" ? "text-yellow-400" : ""
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className={` mx-4 py-2 block duration-300 hover:text-yellow-400 ${
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
