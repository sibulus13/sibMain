import useEmblaCarousel from 'embla-carousel-react'
import React, { useEffect } from 'react'
// import Autoplay from 'embla-carousel-autoplay'

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

// you can implement flashy graphics later, get your first post out

export default function Showcase({ posts }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.normal_color}> 展示 </h1>
      </div>
      <div
        className={styles.post_column}
      >
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.mbla__slide}>Slide 1</div>
            <div className={styles.bla__slide}>Slide 2</div>
            <div className={styles.embla__slide}>Slide 3</div>
          </div>
        </div>
      </div>
    </div>)
}
