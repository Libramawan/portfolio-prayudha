import { ButtonRead } from "@components/shared/button-custom";
import { ImageCover } from "../shared/image-custom";

export default function ProjectCard({ post }: { post: BlogPosts }) {
  const { title, date, coverImage, excerpt } = post;

  return (
    <li key={post.slug}>
      <div className="container dark:bg-slate-800 rounded">
        <div className="flex flex-wrap gap-1 mx-auto">
          <div className="relative w-full h-72">
            <ImageCover image_url={coverImage} alt_text={title} />
          </div>
          <div className="w-full flex flex-col md:flex-grow p-4 gap-2">
            <h5>{date}</h5>
            <h4>{title}</h4>
            <p className="text_black">{excerpt}</p>
            <ButtonRead url={`/posts/${post.slug}`} />
          </div>
        </div>
      </div>
    </li>
  );
}
