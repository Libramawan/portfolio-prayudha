"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import useSectionInView from "@lib/use-section-in-view";
import Title from "../shared/title";
import { ImageFull } from "@components/shared/image-custom";
import { Experiences } from "@lib/data-type";
import { experiencesData } from "@lib/data";

export default function ExpSection() {
  const { ref } = useSectionInView("Experiences");
  return (
    <section ref={ref} id="expSection">
      <div className="container mx-auto">
        <div className="px-4 sm:px-24 mt-24">
          <div className="dark:bg-slate-800 rounded-lg">
            <div className="flex flex-col items-center justify-center p-8">
              <motion.div
                className="mt-20"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{
                  once: true,
                }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Title text={"My"} spanText={"Experiences"} />
              </motion.div>
              <ul className="divide-y divide-gray-700">
                {experiencesData.map((data: Experiences) => {
                  return (
                    <motion.li
                      key={data.id}
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{
                        once: true,
                      }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <div className="grid grid-cols-4 gap-4 p-8">
                        <div className="flex items-center justify-center col-span-full lg:col-span-1">
                          <div className="overflow-hidden border-none rounded">
                            <ImageFull
                              image_url={data.coverImage}
                              alt_text={data.title}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center lg:text-left col-span-full lg:col-span-3">
                          <h5>{data.date}</h5>
                          <h3>{data.title}</h3>
                          <div className="inline-flex justify-center lg:justify-start items-center gap-2">
                            {data.icons !== undefined && (
                              <>
                                <h5>Tech stack:</h5>
                                <span className="inline-flex gap-1 text-2xl">
                                  {data.icons.map(
                                    (icon: string, index: number) => {
                                      return (
                                        <Fragment key={index}>
                                          <Icon icon={`${icon}`} />
                                        </Fragment>
                                      );
                                    }
                                  )}
                                </span>
                              </>
                            )}
                          </div>

                          <div className="py-4">
                            <p className="text_black">{data.excerpt}</p>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
