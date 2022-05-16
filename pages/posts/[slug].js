import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";

import styles from "./slug.module.css";
import testComponent from "@components/testComponent";

const components = {
  p: (props) => <p className={styles.post_text}>{props.children}</p>,
  a: (props) => (
    <Link href={props.href}>
      <ins className={styles.inline_link}>{props.children}</ins>
    </Link>
  ),
  Image: (props) => <Image {...props} />,
  h1: (props) => <h1 className={styles.post_text}>{props.children}</h1>,
  h2: (props) => <h2 className={styles.post_text}>{props.children}</h2>,
  h3: (props) => <h3 className={styles.post_text}>{props.children}</h3>,
  h6: (props) => <h6 className={styles.subtitle}>{props.children}</h6>,
};

export default function Post({ post }) {
  return (
    <div className={styles.post_container}>
      {/* <div className={styles.post_text}> */}
      <div className={styles.header_container}>
        <p className={styles.post_title}>{post.frontmatter.title}</p>
        {/* <div className={styles.post_img_container}>
          <Image
            src={post.frontmatter.thumbnailUrl}
            // className={}
            alt="thumbnail"
            width='250vw'
            height='300vh'
            layout='responsive'
            // objectFit="cover"
          />
        </div> */}
      </div>
      <hr className={styles.post_break_line}></hr>
      <p className={styles.post_description}>{post.frontmatter.description}</p>
      <p className={styles.post_date}>
        <small className={styles.post_date}>{post.frontmatter.date}</small>
      </p>
      {/* </div> */}
      <div>
        <MDXRemote {...post.source} components={components} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const advPath = path.join("posts", "adventures");
  const advFiles = fs.readdirSync(path.join("posts", "adventures"));
  console.log(advFiles);
  const posts = advFiles.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", "adventures", filename),
      "utf-8"
    );
    // const { data: frontMatter } = matter(markdownWithMeta)
    return `/posts/${filename.split(".")[0]}`;
  });
  return {
    paths: posts,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  console.log(`param`, params);
  const type = "adventures";
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
  const articleDir = path.join("posts", "adventures");
  // const advFiles = fs.readdirSync(path.join("posts", "adventures"));
  // const showFiles = fs.readdirSync(path.join("posts", "showcase"));
  const articlePath = path.join("posts", "adventures", `${slug}.mdx`);
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
