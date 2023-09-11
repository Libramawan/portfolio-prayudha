"use client";

import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (isBrowser()) window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

const scrollToTopVariants: Variants = {
  hide: { x: 100 },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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
      className="fixed text-white rounded-full md:rounded-none bg-blue-custom dark:bg-indigo-500 bottom-2 md:bottom-16 right-4 sm:right-2 md:right-0 p-4 md:p-8"
      variants={scrollToTopVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </motion.button>
  );
}
