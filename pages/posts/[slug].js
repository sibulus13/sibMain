// import { useRouter } from 'next/router'
// import { getAllPostIds, getPostData } from '../../lib/posts'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'

import styles from './slug.module.css'

const components = {
  p: (props) => <p className={styles.post_text}>{props.children}</p>,
  h1: (props) => <h1 className={styles.post_text}>{props.children}</h1>,
  h2: (props) => <h2 className={styles.post_text}>{props.children}</h2>,
  h3: (props) => <h3 className={styles.post_text}>{props.children}</h3>,

};

export default function Post({ post }) {
  // console.log(post.source)
  return (
    <div className={styles.post_container}>
      {/* <div className={styles.post_text}> */}
      <div className={styles.header_container}>
        <p className={styles.post_title}>{post.frontmatter.title}</p>
        <div className={styles.post_img_container}>
          <Image
            src={post.frontmatter.thumbnailUrl}
            // className={}
            alt="thumbnail"
            width='250vw'
            height='300vh'
          // layout='responsive'
          // objectFit="cover"
          />
        </div>
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
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    // const { data: frontMatter } = matter(markdownWithMeta)
    return `/posts/${filename.split('.')[0]}`
  })
  return {
    paths: posts,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const { content, frontmatter } = await getArticleFromSlug(slug)
  const mdxSource = await serialize(content)
  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter
      }
    }
  }
}

export async function getArticleFromSlug(slug) {
  const articlesPath = path.join('posts')
  const articleDir = path.join(articlesPath, `${slug}.mdx`)
  const source = fs.readFileSync(articleDir)
  const { content, data } = matter(source)

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
  }
}