import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import Image from "next/image";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./slug.module.css";
import { carousel_caption, get_image_title } from "lib/utils";
import { useState } from "react";

const TYPE = 'adventure'

export default function Post(props) {
  let post = props.post;
  let carousel = props.carousel;
  return (
    <div className={styles.post_container}>
      <p className={styles.post_date}>
        <small className={styles.post_date}>{post.frontmatter.date}</small>
      </p>
      {/* <p>
        <small>
          {post.frontmatter.readingTime} Minutes
        </small>
      </p> */}
      <div className={styles.header_container}>
        <p className={styles.post_title}>{post.frontmatter.title}</p>
      </div>
      <p className={styles.post_description}>{post.frontmatter.description}</p>
      {carousel.length > 0 && (
        <div>
          <Carousel
            axis="horizontal"
            autoPlay={true}
            centerMode={true}
            centerSlidePercentage={70}
            infiniteLoop={true}
            interval={5000}
            showIndicators={false}
            stopOnHover={true}
          >
            {carousel.map((url) => (
              <div>
                <Image
                  src={url}
                  height="100vh"
                  width="100vw"
                  quality={100}
                  alt={carousel_caption(url)}
                  layout="responsive"
                  objectFit="contain"
                ></Image>
                <p>{carousel_caption(url)}</p>
              </div>
            ))}
          </Carousel>
        </div>
      )}
      <hr className={styles.post_break_line}></hr>
      <div>
        <MDXRemote {...post.source} components={components} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const dir = path.join('posts', TYPE);
  const advFiles = fs.readdirSync(dir);
  const posts = advFiles.map((filename) => `/${TYPE}/${filename.split(".")[0]}`);
  return {
    paths: posts,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  // mdx remote
  const { content, frontmatter } = await getArticleFromSlug(slug);
  const mdxSource = await serialize(content);
  let files = [];
  if (frontmatter.carousel_dir) {
    // grab name of all files in carousel_dir
    files = fs.readdirSync(path.join("public", 'posts', TYPE, frontmatter.carousel_dir));
    // console.log(files);
    files = files.map((file) => `/posts/${TYPE}/${frontmatter.carousel_dir}/${file}`);
    // console.log(files);
  }

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
      carousel: files,
    },
  };
}

export async function getArticleFromSlug(slug) {
  const articlePath = path.join('posts', TYPE, `${slug}.mdx`);
  const source = fs.readFileSync(articlePath);
  // mdx remote
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

export const components = {
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
        layout="fill"
        alt={get_image_title(props)}
        {...props}
      />
      <h6 className={styles.subtitle}>
        {get_image_title(props)}
      </h6>
    </div>
  ),
  h1: (props) => <h1 className={styles.post_text}>{props.children}</h1>,
  h2: (props) => <h2 className={styles.post_text}>{props.children}</h2>,
  h3: (props) => <h3 className={styles.post_text}>{props.children}</h3>,
  h6: (props) => <h6 className={styles.subtitle}>{props.children}</h6>,
};