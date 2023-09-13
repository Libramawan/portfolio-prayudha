"use client";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {
  const router = useRouter();
  return (
    <div className="hidden sm:flex rounded fixed bg-blue-custom dark:bg-indigo-500 lg:top-1/4 left-0 z-10">
      <div className="flex flex-col text-lg lg:text-2xl divide-y divide-white">
        <button
          className="text-white hover:text-gray-400 p-2 lg:p-4"
          type="button"
          onClick={() => {
            router.push("mailto:prayudha.adhitia@gmail.com");
          }}
        >
          <MdMail />
        </button>
        <a
          className="text-white hover:text-gray-400 p-2 lg:p-4"
          href="https://wa.me/+6281324788202"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>

        <a
          className="text-white hover:text-gray-400 p-2 lg:p-4"
          href="https://www.instagram.com/libramawan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="text-white hover:text-gray-400 p-2 lg:p-4"
          href="https://www.linkedin.com/in/prayudha-adhitia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
