import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";

import styles from "./slug.module.css";

// https://chengjiemichaelhua.wixsite.com/sibulus/what-i-do
const TYPE = 'showcase'
const components = {
  p: (props) => <p className={styles.post_text}>{props.children}</p>,
  a: (props) => (
    <Link href={props.href}>
      <ins className={styles.inline_link}>{props.children}</ins>
    </Link>
  ),
  Image: (props) => (
    <div className={styles.img_container}>
      <Image
        height="1%"
        width="1%"
        quality={100}
        alt="thumbnail"
        layout="responsive"
        {...props}
      />
    </div>
  ),
  h1: (props) => <h1 className={styles.post_text}>{props.children}</h1>,
  h2: (props) => <h2 className={styles.post_text}>{props.children}</h2>,
  h3: (props) => <h3 className={styles.post_text}>{props.children}</h3>,
  h6: (props) => <h6 className={styles.subtitle}>{props.children}</h6>,
};

export default function Post({ post }) {
  return (
    <div className={styles.post_container}>
      <div className={styles.header_container}>
        <p className={styles.post_title}>{post.frontmatter.title}</p>
      </div>
      <hr className={styles.post_break_line}></hr>
      <p className={styles.post_description}>{post.frontmatter.description}</p>
      <p className={styles.post_date}>
        <small className={styles.post_date}>{post.frontmatter.date}</small>
      </p>
      <div>
        <MDXRemote {...post.source} components={components} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const dir = path.join('posts', TYPE);
  const advFiles = fs.readdirSync(dir);
  console.log(advFiles);
  const posts = advFiles.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts',  TYPE , filename),
      "utf-8"
    );
    return `/${TYPE}/${filename.split(".")[0]}`;
  });
  return {
    paths: posts,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);
  const mdxSource = await serialize(content);
  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  };
}

export async function getArticleFromSlug(slug) {
  const articlePath = path.join("showcase", `${slug}.mdx`);
  const source = fs.readFileSync(articlePath);
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      thumbnailUrl: data.thumbnailUrl,
      tags: data.tags,
      readingTime: readingTime(source).text,
      ...data,
    },
  };
}
