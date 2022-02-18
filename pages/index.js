import Head from 'next/head'
import Footer from '@components/Footer'

import profilePic from '../public/me.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="main_pg">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='profile_pic_container'>
        <Image
          src={profilePic}
          className='profile-pic'
          layout='responsive'
          sizes='100vw'
        />
      </div>
      <div className='intro'>
        <h1 className='intro_sentence'>
          Hi, I'm Michael Huang, and I am an
        </h1>
        <ul className='intro_list'>
          <li>adventure seeker,</li>
          <li>extroverted introvert,</li>
          <li>and engineering and computer science graduate.</li>
        </ul>
      </div>
    </div>
  )
}