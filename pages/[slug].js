import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Posts_layout from "layout/Posts_layout";
import { pageLabelMapper } from "lib/constants";
import Link from 'next/link'

export default function Posts({ posts, type }) {
  return (
    <div>
      <Posts_layout posts={posts} href_prefix={`/${type}/`} title={pageLabelMapper[type]}></Posts_layout>
      {
        type == 'showcase' &&
        <div style={{ "text-align": 'center', marginTop: '4vh',}}>
          <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '4px 4px', fontSize:'24px'}}>
          <Link href="https://chengjiemichaelhua.wixsite.com/sibulus/what-i-do">
            Click here for my legacy projects!
          </Link>
          </span>
        </div>
      }
    </div >
  );
}

export async function getStaticPaths() {
  const posts = ['/Adventure', '/Showcase']
  return {
    paths: posts,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  console.log('context', context)
  let type = (context.params.slug).toLowerCase();
  let folder = path.join('posts', type);
  console.log(type)
  console.log(folder)
  let posts = [];
  const files = fs.readdirSync(folder);
  posts = files.map((filename) => {
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
      type,
    },
  };
};