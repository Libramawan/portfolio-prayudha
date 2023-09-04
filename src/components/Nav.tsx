import { playfair_display, montserrat } from "@styles/fonts";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="bg-white text-gray-700 text-2xl sticky top-0">
      <div className="container flex flex-col md:flex-row flex-wrap mx-auto p-5 items-center">
        <span
          className={`${playfair_display.variable} font-playfair mb-4 md:mb-0`}
        >
          Prayudha A.L
        </span>

        <nav
          className={`${montserrat.variable} font-montserrat text-base flex flex-wrap md:ml-auto md:mr-8 md:gap-4 items-center`}
        >
          <Link className="mr-5 hover:text-gray-400" href="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-400" href="/projects">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
