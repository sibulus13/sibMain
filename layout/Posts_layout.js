import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Filter from "components/Filter";
import styles from "./Posts.module.css";
import { filter_include_tags, getDates, getTags } from "lib/utils";

export default function Posts_layout({ posts, href_prefix, title }) {
  // console.log(posts)
  let tags = getTags(posts);
  let dates = getDates(posts);
  posts = Array.from(posts).reverse(); //to get posts in reverse chrono order

  const [checkedState, setCheckedState] = useState(
    new Array(tags.length).fill(true)
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.normal_color}> {title} </h1>
        {/* <br className={[styles.normal_color, styles.break_line]}></br> */}
      </div>
      <div className={styles.post_column}>
        <Filter tags={tags} setTags={setCheckedState.bind(this)}></Filter>
        {posts.map((post, index) => {
          if (
            post.frontMatter.published &&
            filter_include_tags(post.frontMatter.tags, tags, checkedState)
          ) {
            return (
              <Link href={href_prefix + post.slug} passHref key={index}>
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
                        {post.frontMatter.last_updated_date ||
                          post.frontMatter.date}
                      </small>
                    </p>
                  </div>
                  <div className={styles.post_img_container}>
                    {post.frontMatter.thumbnailUrl && (
                      <Image
                        src={post.frontMatter.thumbnailUrl}
                        alt="thumbnail"
                        quality={100}
                        layout="fill"
                        objectFit="scale-down"
                        // className={}
                        // width="100%"
                        // height="100%"
                      />
                    )}
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}