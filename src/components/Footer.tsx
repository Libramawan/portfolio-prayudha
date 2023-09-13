"use client";
import { useRouter } from "next/navigation";
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-black-custom">
      <div className="container flex flex-wrap flex-col sm:flex-row mx-auto p-5">
        <button
          className="text-white hover:text-gray-400 text-sm text-center sm:text-left"
          type="button"
          onClick={() => {
            router.push("mailto:prayudha.adhitia@gmail.com");
          }}
        >
          prayudha.adhitia@gmail.com
        </button>
        <a
          className="inline-flex justify-center text-center text-white hover:text-gray-400 text-sm sm:ml-2 mt-2 sm:mt-0"
          href="https://wa.me/+6281324788202"
          target="_blank"
          rel="noopener noreferrer"
        >
          +6281324788202
          <FaWhatsapp />
        </a>

        <span className="inline-flex sm:ml-auto mt-2 sm:mt-0 justify-center sm:justify-start gap-6 text-xl text-white hover:text-gray-700">
          <a
            className="text-white hover:text-gray-400"
            href="https://github.com/Libramawan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            className="text-white hover:text-gray-400"
            href="https://www.instagram.com/libramawan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            className="text-white hover:text-gray-400"
            href="https://www.linkedin.com/in/prayudha-adhitia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
