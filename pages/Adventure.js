import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Posts_layout from "layout/Posts_layout";

const type = 'adventures'

export default function Posts({ posts }) {
  return (
    <Posts_layout posts={posts} href_prefix={`/${type}/`} title = {'Adventure:冒险'}></Posts_layout>
  );
}

export const getStaticProps = async () => {
  let folder = type;
  const files = fs.readdirSync(folder);
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(folder, filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
