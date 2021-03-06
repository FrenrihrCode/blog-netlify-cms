import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Post } from "../../interfaces/post.interface";

const postsDirectory = join(process.cwd(), "content", "blogPosts");

export const getAllPostsSlug = () => {
  const slugs = fs.readdirSync(postsDirectory);
  return slugs.map((s) => s.replace(/\.md$/, ""));
};

export const getPostBySlug = (slug: string): Post => {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    title: data["title"],
    header: data["header"],
    date: data["date"],
    content,
    tag: data["tags"],
    thumbnail: data["thumbnail"] || "/img/default.jpg",
  };
};

export const getRecentPosts = (): Post[] => {
  const allPostsSlug = getAllPostsSlug();
  if (allPostsSlug.length > 0) {
    const allPostsSlugLimited = allPostsSlug.slice(0, 6);
    return allPostsSlugLimited.map((slug) => {
      const post = getPostBySlug(slug);
      return post;
    });
  }
  return [];
};
