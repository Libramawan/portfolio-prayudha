import Image from "next/image";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import Link from "next/link";
import getFormattedDate from "@lib/getFormattedDate";

type Props = {
  post: BlogPosts;
};

const ListProject = ({ post }: Props) => {
  const { title, date, image_link, desc } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li key={post.id}>
      <div className="mt-8 px-0 lg:px-24">
        <div className="h-fit text-gray-700 dark:text-gray-300 border-opacity-60 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="overflow-hidden border-2 border-gray-200 border-opacity-60">
              <Image
                src={image_link}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="w-full flex flex-col md:flex-grow px-4 py-2 gap-2">
              <div className="mb-2">
                <span className="text-md text-gray-500 dark:text-gray-400">
                  {formattedDate}
                </span>
              </div>
              <h1 className="text-xl font-medium">{title}</h1>
              <h2 className="text-md font-medium text-gray-400">Made with:</h2>
              <p className="leading-relaxed">{desc}</p>
              <div className="flex flex-row gap-2">
                <Link
                  className="inline-flex w-fit py-2 px-4 items-center justify-center rounded border-2 gap-1 text-blue-custom hover:text-white dark:text-white bg-white dark:bg-slate-800 border-blue-custom dark:border-gray-700 hover:bg-blue-custom dark:hover:bg-indigo-500"
                  href={`/posts/${post.id}`}
                >
                  <FaGithub />
                  Code
                </Link>
                <Link
                  className="inline-flex w-fit py-2 px-4 text-white gap-1 items-center justify-center rounded bg-blue-custom dark:bg-indigo-500 hover:bg-blue-custom-hover dark:hover:bg-indigo-600"
                  href={`/posts/${post.id}`}
                >
                  Read <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListProject;
