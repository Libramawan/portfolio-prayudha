import Link from "next/link";

import { playfair_display, montserrat } from "@styles/fonts";
import ThemeSwitcherButton from "@components/ui/theme-switcher-button";

export default function Navbar() {
  return (
    <header className="bg_white sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap items-center p-5">
          <span
            className={`${playfair_display.variable} font-playfair mb-4 md:mb-0`}
          >
            <h3>Prayudha A.L</h3>
          </span>

          <nav
            className={`${montserrat.variable} font-montserrat flex flex-wrap md:ml-auto md:mr-8 gap-4 sm:gap-8 items-center`}
          >
            <Link className="hover:text-gray-400" href="/">
              Home
            </Link>
            <Link className="hover:text-gray-400" href="/projects">
              Projects
            </Link>

            <ThemeSwitcherButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
