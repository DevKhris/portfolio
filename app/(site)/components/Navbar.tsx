"use client";
import { themeToggle } from "@/app/utils/themeToggle";
import Link from "next/link";
import { MutableRefObject, ReactElement, useState } from "react";
import { motion, Variants } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { MenuToggle } from "./MenuToggle";
import { ThemeToggle } from "./ThemeToggle";

interface NavBarProps {
  html: MutableRefObject<null>;
}

const variants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  close: { opacity: 0, x: "-100%" },
};

export function Navbar({ html }: NavBarProps): ReactElement {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState<string>("light");
  const [toggleMenu, setToggleMenu] = useState<boolean>(true);

  const handleThemeToggle = () => {
    setMode(themeToggle(mode, html));
  };

  return (
    <motion.header className="fixed top-0 z-50 w-full transition-colors duration-300 shadow-md backdrop-blur-3xl backdrop-filter bg-purple-950 dark:bg-zinc-950 bg-opacity-30 drop-shadow dark:bg-opacity-70">
      <motion.nav
        initial={false}
        animate={toggleMenu ? "open" : "closed"}
        className="flex flex-wrap items-center justify-around py-6"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <Link href="/">
            <span className="inline-flex text-2xl">
              {"<"}
              <p className="text-white">Dev</p>
              <p className=" text-amber-400 dark:text-emerald-400 animate-pulse">
                Khris&nbsp;
              </p>
              {"/>"}
            </span>
          </Link>
        </motion.div>

        <motion.div className="block w-6 md:hidden h-full">
          <MenuToggle
            toggle={() => setToggleMenu((toggleMenu) => !toggleMenu)}
          ></MenuToggle>
        </motion.div>
        <motion.div
          className={`w-full md:flex md:flex-row md:items-center md:w-max sm:pt-2 sm:shadow-sm ${
            !toggleMenu === true ? "hidden" : ""
          } duration-300 ease-in-out transition-all `}
          id="menu"
        >
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            className="mt-8 md:space-x-4 md:items-center md:gap-x-8 md:flex md:justify-between md:mt-0"
          >
            <MenuItem
              href="/#about"
              className={` mx-4 py-2 block duration-300 hover:text-yellow-400 dark:hover:text-emerald-400`}
              active={false}
              text="About"
            ></MenuItem>
            <MenuItem
              href="/#experience"
              className={` mx-4 py-2 block duration-300 hover:text-yellow-400 dark:hover:text-emerald-400`}
              active={false}
              text="Experience"
            ></MenuItem>
            <MenuItem
              href="/#skills"
              className={` mx-4 py-2 block duration-300 hover:text-yellow-400 dark:hover:text-emerald-400`}
              active={false}
              text="Skills"
            ></MenuItem>
            <MenuItem
              href="/#projects"
              className={` mx-4 py-2 block duration-300 hover:text-yellow-400 dark:hover:text-emerald-400`}
              active={false}
              text="Projects"
            ></MenuItem>
            <MenuItem
              href="/#contact"
              className={` mx-4 py-2 block duration-300 hover:text-yellow-400 dark:hover:text-emerald-400`}
              active={false}
              text="Contact"
            ></MenuItem>
            <ThemeToggle
              toggle={handleThemeToggle}
              mode={mode}
              className="py-2 mx-4 text-lg font-bold transition-colors dark:text-white dark:hover:text-amber-300 hover:text-emerald-300"
            ></ThemeToggle>
          </motion.ul>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
}
