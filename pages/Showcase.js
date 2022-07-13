import Link from "next/link";
import Image from "next/image";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Filter from "@components/Filter";
import styles from "./Adventures.module.css";
import { getDates, getTags } from "lib/utils";
import { useState } from "react";

export default function Adventures({ posts }) {
  let tags = getTags(posts);
  let dates = getDates(posts);
  let tag_dict = {};
  tags.forEach((e) => {
    tag_dict[e] = true;
  });

  // console.log(tags, dates);
  const [filter, setFilter] = useState(tag_dict);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.normal_color}> 展示 </h1>
        {/* <br className={[styles.normal_color, styles.break_line]}></br> */}
      </div>
      <div className={styles.post_column} key="adventurepg">
        <Filter tags={tags} tag_dict={tag_dict} set_tags={setFilter}></Filter>
        {posts.map((post, index) => {
          if (post.frontMatter.published) {
            return (
              <Link href={"/showcase/" + post.slug} passHref key={index}>
                <div className={styles.post_container}>
                  <div className={styles.post_text}>
                    <p className={styles.post_title}>
                      {post.frontMatter.title}
                    </p>
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
                  {post.frontMatter.thumbnailUrl && (
                    <div className={styles.post_img_container}>
                      (
                      <Image
                        src={post.frontMatter.thumbnailUrl}
                        // className={}
                        alt="thumbnail"
                        width="100%"
                        height="100%"
                        layout="fill"
                        objectFit="scale-down"
                      />
                      )
                    </div>
                  )}
                </div>
              </Link>
            );
          }
        })}
        <Link
          href="https://chengjiemichaelhua.wixsite.com/sibulus/what-i-do"
          // className={styles.inline_text}
        >
          <h3>Click here to see some of my notable pre grad projects!</h3>
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // let folder = path.join("posts", "adventures");
  let folder = "showcase";
  // console.log(folder);
  // let posts = []
  const files = fs.readdirSync(folder);
  // console.log(files);
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("showcase", filename),
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
