import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black-custom">
      <div className="container flex flex-wrap flex-col sm:flex-row mx-auto p-5">
        <p className="text-white text-sm text-center sm:text-left">
          prayudha.adhitia@gmail.com —
        </p>

        <Link
          className="inline-flex justify-center text-center text-white hover:text-gray-700 text-sm sm:ml-2 mt-2 sm:mt-0"
          href="https://wa.me/+6281324788202"
        >
          +6281324788202
          <FaWhatsapp />
        </Link>

        <span className="inline-flex sm:ml-auto mt-2 sm:mt-0 justify-center sm:justify-start gap-6 text-xl text-white hover:text-gray-700">
          <Link
            className="text-white hover:text-gray-700"
            href="https://github.com/Libramawan?tab=repositories"
          >
            <FaGithub />
          </Link>

          <Link
            className="text-white hover:text-gray-700"
            href="https://www.instagram.com/libramawan/"
          >
            <FaInstagram />
          </Link>

          <Link
            className="text-white hover:text-gray-700"
            href="https://www.linkedin.com/in/prayudha-adhitia/"
          >
            <FaLinkedin />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
