import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// get markdown folder path
const POST_PATH = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(POST_PATH);
  const allPostData = fileNames.map((fileName) => {
    // remove '.md' to get id
    const id = fileName.replace(/\.md/, "");

    // read markdown file as a string
    const fullPath = path.join(POST_PATH, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContent);
    const blogPosts: BlogPosts = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      image_link: matterResult.data.image_link,
      desc: matterResult.data.desc,
    };
    return blogPosts;
  });
  // sorts post by date
  return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(POST_PATH, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  const blogPostWithHtml: BlogPosts & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    image_link: matterResult.data.image_link,
    desc: matterResult.data.desc,
    contentHtml,
  };

  return blogPostWithHtml;
}
