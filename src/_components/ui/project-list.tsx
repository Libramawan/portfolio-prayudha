"use client";

import { motion } from "framer-motion";
import { ButtonRead, ButtonToGithub } from "@components/shared/button-custom";
import { ImageFull } from "@components/shared/image-custom";

type Props = {
  post: BlogPosts;
  index: number;
};

export default function ProjectList({ post, index }: Props) {
  const i = index;
  const { title, date, coverImage, excerpt } = post;

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
      <div className="mt-8 px-0 lg:px-24">
        <div className="h-fit border-opacity-60 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="overflow-hidden rounded">
              <ImageFull image_url={coverImage} alt_text={title} />
            </div>
            <div className="w-full flex flex-col md:flex-grow px-4 py-2 gap-2">
              <div className="mb-2">
                <h5>{date}</h5>
              </div>
              <h4>{title}</h4>
              <h5>Made with:</h5>
              <p className="text_black">{excerpt}</p>
              <div className="flex flex-row gap-2">
                <ButtonToGithub
                  url={"https://github.com/Libramawan?tab=repositories"}
                />
                <ButtonRead url={`/posts/${post.slug}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
