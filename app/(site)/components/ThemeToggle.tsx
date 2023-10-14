import { Variants, motion } from "framer-motion";
import { ReactElement } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

type ThemeHandler = () => void;

type ThemeProps = {
  toggle: ThemeHandler;
  mode: string;
  className: string;
};

const variants: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export function ThemeToggle({
  toggle,
  mode,
  className,
}: ThemeProps): ReactElement {
  return (
    <motion.li>
      <motion.button
        variants={variants}
        whileHover={{ translate: "20%" }}
        whileTap={{ scale: 0.9 }}
        className={className}
        onClick={toggle}
        aria-label="Theme toggler button"
        role="button"
      >
        {mode === "light" ? <HiMoon size={24} /> : <HiSun size={24} />}
      </motion.button>
    </motion.li>
  );
}
