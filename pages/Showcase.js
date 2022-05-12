import Link from 'next/link'
import Image from 'next/image'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import styles from './Showcase.module.css'

export default function Showcase({ posts }) {
  return (
    <div className={styles.post_column}>
      <div>
        <h1>Roles</h1>
        <h1>Show previous titles with sublinks to descriptive properties, ex: Lifeguard > observant & safety & preventative</h1>

      </div>

    </div>)
}
