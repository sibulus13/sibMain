// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'

import '@styles/globals.css'
import Layout from '../components/layout'
import ErrorBoundary from '../components/ErrorBoundary'

let src = "/vecteezy_animation-of-fog-or-smoke-moving-on-white-background-closeup-shot_1797524.mov"
// let src="/white_smoke.mp4"

function Application({ Component, pageProps }) {
  return (
    <div className='main'>
      <Layout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
      <video autoPlay muted loop className='video'>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag or format
      </video>
    </div >
  )
}

export default Application