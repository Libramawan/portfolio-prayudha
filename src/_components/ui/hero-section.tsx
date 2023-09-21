"use client";
import { motion } from "framer-motion";

import useSectionInView from "@lib/use-section-in-view";
import { ButtonToExternal } from "@components/shared/button-custom";
import { ImageFull } from "@components/shared/image-custom";

export default function HeroSection() {
  const { ref } = useSectionInView("Home");
  return (
    <motion.section ref={ref} className="py-24 md:py-0" id="heroSection">
      <div className="container mx-auto">
        <div className="grid grid-rows-1 md:grid-cols-3 items-center px-5 py-1 mt-20 md:mt-0">
          <div className="col-span-2 lg:flex-grow md:w-full flex flex-col md:items-start text-center md:text-left gap-8 mb-16 md:mb-0">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "tween" }}
            >
              <h1>
                Hi, <br className="max-md:hidden" />
                the name is{" "}
                <span className="text-blue-custom dark:text-indigo-300">
                  Prayudha
                </span>
              </h1>
              <p className="text_black">
                Greetings, I&apos;m delighted to present my portfolio
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -50, y: -50, opacity: 0, scale: 0 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "tween" }}
            >
              <ButtonToExternal
                text={"Resume"}
                url={
                  "https://drive.google.com/file/d/18EOv7vwK8cRsQjYYv3sj-htFhMBcbtuK/view?usp=sharing"
                }
              />
            </motion.div>
          </div>
          <motion.div
            className="col-span-1 lg:max-w-lg hidden md:flex"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "tween" }}
          >
            <ImageFull
              image_url={"https://i.ibb.co/JFjNVwh/heroespict.png"}
              alt_text={"hero"}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
