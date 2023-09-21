"use client";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

import { links } from "@lib/data";
import { useActiveContextSection } from "@components/providers/active-section-provider";

export default function SectionTracker() {
  const { activeSection, setActiveSection } = useActiveContextSection();

  return (
    <div className="flex items-center justify-center z-10 relative">
      <motion.div
        className="fixed w-[26rem] h-12 rounded-full border-opacity-40 bg-white dark:bg-gray-950 bg-opacity-80 dark:bg-opacity-75 backdrop-blur-lg bottom-2 sm:bottom-12 lg:bottom-auto lg:top-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed h-12 left-1/2 -translate-x-1/2 bottom-2 sm:bottom-12 lg:bottom-auto lg:top-4">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-md text-gray-500 sm:flex-nowrap md:gap-2 lg:gap-4">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-blue-custom transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "lg:text-white lg:dark:text-white lg:hover:text-white":
                      activeSection === link.sectionName,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.sectionName);
                }}
              >
                {link.sectionName}

                {link.sectionName === activeSection && (
                  <div className="hidden lg:flex">
                    <motion.span
                      className="rounded-full absolute inset-0 -z-20 bg-blue-custom dark:bg-gray-800"
                      layoutId="activeSection"
                    ></motion.span>
                  </div>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
