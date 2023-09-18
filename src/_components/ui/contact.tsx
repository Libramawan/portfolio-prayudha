"use client";
import { useRouter } from "next/navigation";
import { MdMail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const contactVariant = {
  hide: { x: -100 },
  show: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Contact() {
  const router = useRouter();
  return (
    <div className="hidden sm:flex fixed lg:top-1/4 left-0 z-10">
      <motion.div variants={contactVariant} initial="hide" animate="show">
        <div className="rounded bg_blue">
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
      </motion.div>
    </div>
  );
}
