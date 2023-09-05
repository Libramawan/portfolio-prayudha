import { playfair_display, montserrat } from "@styles/fonts";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Nav = () => {
  return (
    <header className="bg-white dark:bg-[#20272D] text-gray-700 dark:text-white text-2xl sticky top-0 z-10">
      <div className="container flex flex-col md:flex-row flex-wrap mx-auto p-5 items-center">
        <span
          className={`${playfair_display.variable} font-playfair mb-4 md:mb-0`}
        >
          Prayudha A.L
        </span>

        <nav
          className={`${montserrat.variable} font-montserrat flex flex-wrap text-base md:ml-auto md:mr-8 md:gap-4 items-center`}
        >
          <Link className="mr-5 hover:text-gray-400" href="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-400" href="/projects">
            Projects
          </Link>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
