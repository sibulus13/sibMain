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

// import { bundleMDX } from "mdx-bundler";
// import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

// import Media_Carousel from "@components/Carousel";
import styles from "./slug.module.css";
import { carousel_caption } from "lib/utils";

const components = {
  p: (props) => <p className={styles.post_text}>{props.children}</p>,
  a: (props) => (
    <Link href={props.href}>
      <ins className={styles.inline_link}>{props.children}</ins>
    </Link>
  ),
  Image: (props) => (
    <div className={styles.img_container}>
      <Image {...props} />
    </div>
  ),
  h1: (props) => <h1 className={styles.post_text}>{props.children}</h1>,
  h2: (props) => <h2 className={styles.post_text}>{props.children}</h2>,
  h3: (props) => <h3 className={styles.post_text}>{props.children}</h3>,
  h6: (props) => <h6 className={styles.subtitle}>{props.children}</h6>,
  // Carousel: (props) => (
  //   <div>
  //     <Media_Carousel {...props}></Media_Carousel>
  //   </div>
  // ),
};

export default function Post(props) {
  let post = props.post;
  let carousel = props.carousel;
  console.log(carousel);
  // const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <div className={styles.post_container}>
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
            centerSlidePercentage={60}
            infiniteLoop={true}
            interval={5000}
            showIndicators={false}
            stopOnHover={true}
          >
            {carousel.map((url) => (
              <div>
                <Image
                  src={url}
                  height="1%"
                  width="1%"
                  alt="thumbnail"
                  layout="responsive"
                ></Image>
                <p>{carousel_caption(url)}</p>
              </div>
            ))}
          </Carousel>
        </div>
      )}
      <hr className={styles.post_break_line}></hr>
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
  const dir = "adventures";
  const advFiles = fs.readdirSync(dir);
  // console.log(advFiles);
  const posts = advFiles.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("adventures", filename),
      "utf-8"
    );
    return `/adventures/${filename.split(".")[0]}`;
  });
  return {
    paths: posts,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const type = "adventures";

  // mdx-bundler
  // const postData = await getArticleFromSlug(slug);
  // return { props: { ...postData } };

  // mdx remote
  const { content, frontmatter } = await getArticleFromSlug(slug);
  const mdxSource = await serialize(content);
  let files = [];
  if (frontmatter.carousel_dir) {
    // grab name of all files in carousel_dir
    let dir = "adventures";
    files = fs.readdirSync(path.join("public", dir, frontmatter.carousel_dir));
    // console.log(files);
    files = files.map((file) => `/${dir}/${frontmatter.carousel_dir}/${file}`);
    console.log(files);
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
  const articlePath = path.join("adventures", `${slug}.mdx`);
  const source = fs.readFileSync(articlePath);

  // // mdxbundler
  // const { code, frontmatter } = await bundleMDX({source: source});

  // return {
  //   slug,
  //   frontmatter,
  //   code,
  // };

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
