import { playfair_display, montserrat } from "@styles/fonts";

const Nav = () => {
  return (
    <header className="text-gray-700 text-2xl">
      <div className="container flex flex-col md:flex-row flex-wrap mx-auto p-5 items-center">
        <span
          className={`${playfair_display.variable} font-playfair mb-4 md:mb-0`}
        >
          Prayudha A.L
        </span>

        <nav
          className={`${montserrat.variable} font-montserrat text-base flex flex-wrap md:ml-auto md:mr-8 md:gap-4 items-center`}
        >
          <a className="mr-5 hover:text-gray-400">Home</a>
          <a className="mr-5 hover:text-gray-400">Experiences</a>
          <a className="mr-5 hover:text-gray-400">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
