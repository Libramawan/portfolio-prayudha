import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import getFormattedDate from "./get-formatted-date";

// get markdown folder path
const postDir = join(process.cwd(), "/src/_blog");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postDir);
  const allPostData = fileNames
    .map((fileName) => {
      // remove '.md' to get slug
      const slug = fileName.replace(/\.md/, "");

      // read markdown file as a string
      const fullPath = join(postDir, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf-8");

      // use gray-matter to parse the post metadata section
      const matterResult = matter(fileContent);
      const blogPosts: BlogPosts = {
        slug,
        title: matterResult.data.title,
        date: getFormattedDate(matterResult.data.date),
        coverImage: matterResult.data.coverImage,
        icons: matterResult.data.icons,
        excerpt: matterResult.data.excerpt,
      };
      return blogPosts;
    })
    // sorts post by date
    .sort((postA, postB) => (postA.date < postB.date ? 1 : -1));
  return allPostData;
}

export async function getPostData(slug: string) {
  const fullPath = join(postDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  const blogPostWithHtml: BlogPosts & { contentHtml: string } = {
    slug,
    title: matterResult.data.title,
    date: getFormattedDate(matterResult.data.date),
    coverImage: matterResult.data.coverImage,
    icons: matterResult.data.icons,
    excerpt: matterResult.data.excerpt,
    contentHtml,
  };

  return blogPostWithHtml;
}
