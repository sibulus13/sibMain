import Link from 'next/link'
import Image from 'next/image'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import styles from './Adventures.module.css'

export default function Adventures({ posts }) {
  return (
    <div className={styles.post_column}>
      {/* <h1>Adventure Pg</h1> */}
      {posts.map((post, index) => (
        <Link href={'/posts/' + post.slug} passHref key={index}>
        <div className={styles.post_container}>
          <div className={styles.post_text}>
            <p className={styles.post_title}>{post.frontMatter.title}</p>
            <hr className={styles.post_break_line}></hr>
            <p className={styles.post_description}>{post.frontMatter.description}</p>
            <p className={styles.post_date}>
              <small className={styles.post_date}>{post.frontMatter.date}</small>
            </p>
          </div>
          <div className={styles.post_img_container}>
            <Image
              src={post.frontMatter.thumbnailUrl}
              // className={}
              alt="thumbnail"
              // width='150vw'
              // height='150vh'
              layout='fill'
              objectFit="cover"
            />
          </div>
        </div>
        </Link>
      ))}
    </div>)
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  console.log(posts)
  return {
    props: {
      posts
    }
  }
}