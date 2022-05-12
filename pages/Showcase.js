import Link from 'next/link'
import Image from 'next/image'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import styles from './Showcase.module.css'

let skillTree = {
  'Me': {
    'Engineering': {
      'MATLAB': {},
      'SolidWorks': {},
      'PLC': {},
      'LabVIEW': {},
    },
    'Programming': {
      'Python': {},
      'JavaScript': {
        'React Native': {},
        'NextJS': {},
      },
      'HTML': {},
      'CSS': {},
    },
  }
}

export default function Showcase({ posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.normal_color}> 展示 </h1>
      </div>
      <div
        className={styles.post_column}
      >
      </div>
    </div>)
}
