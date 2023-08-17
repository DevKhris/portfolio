import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed w-full backdrop-blur-3xl backdrop-filter bg-purple-950 bg-opacity-30 top-0 drop-shadow shadow-md">
      <nav className="container mx-auto py-6">
        <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto">
          <Link href="/">
            <span className="inline-flex text-2xl">
              {"<"}
              <p>Dev</p>
              <p className=" text-amber-400">Khris</p>
              {"/>"}
            </span>
          </Link>
          <ul className="flex space-x-4 items-center gap-x-8">
            <li>
              <Link
                href="#about"
                className="duration-300 hover:text-yellow-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="duration-300 hover:text-yellow-400"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="duration-300 hover:text-yellow-400"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className="duration-300 hover:text-yellow-400"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="duration-300 hover:text-yellow-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="duration-300 hover:text-yellow-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
