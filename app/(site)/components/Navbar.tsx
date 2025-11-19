'use client';
import { themeToggle } from '@/app/utils/themeToggle';
import Link from 'next/link';
import { MutableRefObject, ReactElement, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { MenuToggle } from './MenuToggle';
import { ThemeToggle } from './ThemeToggle';
import { isMobile } from '@/app/utils/isMobile';

interface NavBarProps {
  html: MutableRefObject<null>;
}

const variants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
  close: { opacity: 0, x: '-100%' },
};

export function Navbar({ html }: NavBarProps): ReactElement {
  const [isMobileCheck, setIsMobileCheck] = useState<boolean>(
    isMobile(navigator.userAgent)
  );
  const [active, setActive] = useState();
  const [mode, setMode] = useState<string>('light');
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleThemeToggle = () => {
    setMode(themeToggle(mode, html));
  };

  return (
    <motion.header className='fixed top-0 z-50 w-full transition-all duration-300 shadow-md backdrop-blur-3xl bg-purple-950/20 dark:bg-zinc-950/70 drop-shadow'>
      <motion.nav
        initial={false}
        className='flex-wrap items-center hidden w-full py-6 align-middle justify-evenly md:flex'
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <motion.ul>
            <motion.li>
              {' '}
              <Link href='/'>
                <span className='inline-flex text-2xl'>
                  <p>{'{/'}</p>
                  <p className='text-white'>Dev</p>
                  <p className=' text-amber-400 dark:text-emerald-400 animate-pulse'>
                    Khris
                  </p>
                  <p>{'/}'}</p>
                </span>
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          className='flex transition-all duration-300 ease-in-out md:flex-row md:items-center md:w-max sm:pt-2 sm:shadow-sm'
          id='menu'
        >
          <motion.ul className='flex items-center justify-between space-x-4 gap-x-8'>
            <MenuItem
              href='/#about'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// ABOUT ME'
            ></MenuItem>
            <MenuItem
              href='/#experience'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// EXPERIENCE'
            ></MenuItem>
            <MenuItem
              href='/#skills'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// SKILLS'
            ></MenuItem>
            <MenuItem
              href='/#projects'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// PROJECTS'
            ></MenuItem>
            {/* <MenuItem
              href='/blog'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// BLOG'
            ></MenuItem> */}
            <MenuItem
              href='/#contact'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// CONTACT'
            ></MenuItem>
            <ThemeToggle
              toggle={handleThemeToggle}
              mode={mode}
              className='py-2 text-xl font-bold transition-colors dark:text-white dark:hover:text-amber-300 hover:text-emerald-300 md:hidden'
            ></ThemeToggle>
          </motion.ul>
        </motion.div>
        <motion.div>
          <motion.ul>
            <ThemeToggle
              toggle={handleThemeToggle}
              mode={mode}
              className='py-2 mx-4 text-xl font-bold transition-colors dark:text-white dark:hover:text-amber-300 hover:text-emerald-300'
            ></ThemeToggle>
          </motion.ul>
        </motion.div>
      </motion.nav>

      <motion.nav
        initial={false}
        animate={toggleMenu ? 'open' : 'closed'}
        className='flex flex-wrap items-center w-full py-6 align-middle md:hidden justify-evenly'
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <Link href='/'>
            <span className='inline-flex text-2xl'>
              <p>{'{/'}</p>
              <p className='text-white'>Dev</p>
              <p className=' text-amber-400 dark:text-emerald-400 animate-pulse'>
                Khris
              </p>
              <p>{'/}'}</p>
            </span>
          </Link>
        </motion.div>

        <motion.div className='flex h-auto md:hidden'>
          <MenuToggle
            toggle={() => setToggleMenu((toggleMenu) => !toggleMenu)}
          ></MenuToggle>
        </motion.div>

        <motion.div
          className={`w-full m-1 md:hidden shadow-sm duration-300 ease-in-out transition-all
             ${toggleMenu === false ? 'hidden' : 'md:hidden'}
             `}
          id='menu'
        >
          <motion.ul
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
            }}
            className='block mx-4 mt-6 space-y-3 gap-x-4'
          >
            <MenuItem
              href='/#about'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// ABOUT ME'
            ></MenuItem>
            <MenuItem
              href='/#experience'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// EXPERIENCE'
            ></MenuItem>
            <MenuItem
              href='/#skills'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// SKILLS'
            ></MenuItem>
            <MenuItem
              href='/#projects'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// PROJECTS'
            ></MenuItem>
            <MenuItem
              href='/#contact'
              className='block text-xl duration-300 hover:text-amber-400 dark:hover:text-emerald-400'
              active={false}
              text='// CONTACT'
            ></MenuItem>
            <ThemeToggle
              toggle={handleThemeToggle}
              mode={mode}
              className='block text-xl font-bold transition-colors dark:text-white dark:hover:text-amber-300 hover:text-emerald-300 md:hidden'
            ></ThemeToggle>
          </motion.ul>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
}
