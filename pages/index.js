import Head from 'next/head'
import Footer from '@components/Footer'

import profilePic from '../public/me.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mainpg">
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <Image
        src={profilePic}
        className='profile-pic'
      />
      <h1 className='intro_sentence'>
        Hi, I'm Michael Huang, and I am an
      </h1>
      <ul className='intro_list'>
        <li>Engineering graduate,</li>
        <li>extroverted introvert,</li>
        <li>and adventure seeker.</li>
      </ul>
    </div>
  )
}