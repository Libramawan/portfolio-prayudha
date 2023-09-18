import { ButtonRead, ButtonToGithub } from "@components/shared/button-custom";
import { ImageFull } from "@components/shared/image-custom";

export default function ProjectList({ post }: { post: BlogPosts }) {
  const { title, date, coverImage, excerpt } = post;

  return (
    <li key={post.slug}>
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
    </li>
  );
}
