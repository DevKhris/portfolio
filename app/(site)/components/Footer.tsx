import { ReactElement } from "react";

interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps): ReactElement {
  return (
    <footer className="mt-44">
      <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto max-w-7x1 lg:flex-row lg:justify-between gap-y-4 md:px-16 text-zinc-400">
        <small className="duration-200 ">
          All rights reserved &copy; {new Date().getFullYear()} DevKhris
        </small>

        <small className="duration-200 hover:text-white">
          <a
            href="https://github.com/DevKhris"
            target="_blank"
            rel="noreferrer noopener"
          >
            Developed by
            <span className="text-yellow-300 dark:text-teal-300 hover:text-yellow-500 dark:hover:text-emerald-400 ">
              {" " + name}
            </span>
          </a>
        </small>
      </div>
    </footer>
  );
}
