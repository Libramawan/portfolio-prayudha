import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import getFormattedDate from "@lib/getFormattedDate";

type Props = {
  post: BlogPosts;
};

const Card = ({ post }: Props) => {
  const { title, date, image_link, desc } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li key={post.id}>
      <div className="text-gray-700 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="flex flex-wrap gap-1 mx-auto">
          <div className="relative w-full h-72">
            <Image
              src={image_link}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col md:flex-grow px-4 py-2 gap-2">
            <div className="mb-2">
              <span className="text-md text-gray-500">{formattedDate}</span>
            </div>
            <h1 className="text-xl font-medium">{title}</h1>
            <p className="leading-relaxed">{desc}</p>
            <Link
              className="inline-flex gap-1 items-center text-md text-indigo-700 hover:text-indigo-400"
              href={`/posts/${post.id}`}
            >
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
