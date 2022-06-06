import Link from "next/link";
import Image from "next/image";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import styles from "./Adventures.module.css";
import { getDates, getTags } from "lib/utils";
import { useState } from "react";

export default function Adventures({ posts }) {
  let tags = getTags(posts);
  let dates = getDates(posts);
  // console.log(tags, dates);
  const [filter, setFilter] = useState({ date: [], tags: [] });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.normal_color}> 冒险 </h1>
        {/* <br className={[styles.normal_color, styles.break_line]}></br> */}
      </div>
      <div className={styles.post_column} key="adventurepg">
        {posts.map((post, index) => (
          <Link href={"/adventures/" + post.slug} passHref key={index}>
            <div className={styles.post_container}>
              <div className={styles.post_text}>
                <p className={styles.post_title}>{post.frontMatter.title}</p>
                <hr className={styles.post_break_line}></hr>
                <p className={styles.post_description}>
                  {post.frontMatter.description}
                </p>
                <p className={styles.post_date}>
                  <small className={styles.post_date}>
                    {post.frontMatter.date}
                  </small>
                </p>
              </div>
              <div className={styles.post_img_container}>
                <Image
                  src={post.frontMatter.thumbnailUrl}
                  // className={}
                  alt="thumbnail"
                  width='100%'
                  height='100%'
                  layout="fill"
                  objectFit="scale-down"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  let folder = path.join("posts", "adventures");
  console.log(folder);
  // let posts = []
  const files = fs.readdirSync(folder);
  // console.log(files);
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", "adventures", filename),
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
