import Head from 'next/head'
import Footer from '@components/Footer'

import profilePic from '../public/me.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <Image
        src={profilePic}
        className='profile-pic'
        layout='responsive'
      />
      <h1>
        Hi, I'm Michael Huang
      </h1>
    </div>
  )
}
