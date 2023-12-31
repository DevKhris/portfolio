import { ReactElement } from "react";

interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps): ReactElement {
  return (
    <footer className="mt-44">
      <div className="max-w-7x1 mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
        <small className="duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="hover:text-white duration-200">
          <a
            href="https://github.com/DevKhris"
            target="_blank"
            rel="noreferrer noopener"
          >
            Developed by{" "}
            <span className="dark:text-teal-300 text-yellow-300 hover:text-yellow-500  dark:hover:text-emerald-400 ">
              {name}
            </span>
          </a>
        </small>
      </div>
    </footer>
  );
}
