import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import profilePic from '../public/me.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Header/>
      <Head>
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <p className="description">
          Testing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
