"use client";

import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const scrollToTopVariants: Variants = {
  hide: {
    x: 100,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (isBrowser()) window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export default function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.3) controls.start("show");
      else controls.start("hide");
    });
  });

  return (
    <motion.button
      className="fixed bg_blue hover:bg-blue-custom-hover dark:hover:bg-indigo-600 p-4 md:p-8 text-white rounded-full md:rounded-r bottom-2 sm:bottom-16 right-4 sm:right-2 md:right-0"
      variants={scrollToTopVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </motion.button>
  );
}
