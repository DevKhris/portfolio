'use client';
import './../globals.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Oswald } from 'next/font/google';
import GoogleAnalytics from '../utils/googleAnalytics';
import { MutableRefObject, useRef } from 'react';

const font = Oswald({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const htmlRef: MutableRefObject<null> = useRef(null);
  return (
    <html className='scroll-smooth' lang='en' ref={htmlRef}>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        ></link>
      </head>
      <body
        className={`${font.className} text-white bg-gradient-to-r  from-dark_purple-500 via-indigo-700 to-indigo-600 dark:from-zinc-950 dark:via-stone-900 dark:to-zinc-900`}
      >
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <header>
          <Navbar html={htmlRef} />
        </header>
        <main>{children}</main>
        <Footer name='Christian Hernandez' />
      </body>
    </html>
  );
}
