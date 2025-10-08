import { ReactElement } from 'react';
import { Variants, motion } from 'framer-motion';

type ItemProps = {
  href: string;
  className: string;
  active: boolean;
  text: string;
};

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: 1000 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000, velocity: 1000 },
    },
  },
};

export function MenuItem({
  href,
  className,
  active,
  text,
}: ItemProps): ReactElement {
  return (
    <motion.li
      variants={variants}
      whileHover={{ translate: '2%' }}
      whileTap={{ scale: 0.9 }}
    >
      <a
        href={href}
        className={`
          ${className} 
          ${active ? 'text-yellow-400  dark:text-emerald-400' : ''}`}
      >
        {text}
      </a>
    </motion.li>
  );
}
