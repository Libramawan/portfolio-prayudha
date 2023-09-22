"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

import { ButtonRead } from "@components/shared/button-custom";
import { ImageCover } from "../shared/image-custom";

type Props = {
  post: BlogPosts;
  index: number;
};

export default function ProjectCard({ post, index }: Props) {
  const i = index;
  const { title, date, coverImage, icons, excerpt } = post;

  return (
    <motion.li
      key={post.slug}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{
        once: true,
      }}
      transition={{ delay: 0.5 * i, duration: 0.8, type: "tween" }}
    >
      <div className="container dark:bg-slate-800 rounded">
        <div className="flex flex-wrap gap-1 mx-auto">
          <div className="relative w-full h-72">
            <ImageCover image_url={coverImage} alt_text={title} />
          </div>
          <div className="w-full flex flex-col md:flex-grow p-4 gap-2">
            <h5>{date}</h5>
            <h4>{title}</h4>
            <h5>Tech stack:</h5>
            <span className="inline-flex gap-1 text-2xl">
              {icons.map((icon: string, index: number) => {
                return (
                  <Fragment key={index}>
                    <Icon icon={`${icon}`} />
                  </Fragment>
                );
              })}
            </span>
            <p className="text_black">{excerpt}</p>
            <ButtonRead url={`/posts/${post.slug}`} />
          </div>
        </div>
      </div>
    </motion.li>
  );
}
