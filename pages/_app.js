// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'
import { motion, AnimatePresence } from "framer-motion"
// import Header from './Header'
// import Router, { withRouter } from 'next/router'

import '@styles/globals.css'
import Layout from '../components/layout'
import ErrorBoundary from '../components/ErrorBoundary'

let src = "/vecteezy_animation-of-fog-or-smoke-moving-on-white-background-closeup-shot_1797524.mov"
const variants = {
  hidden: { opacity: 0, x: 0, y: -50, },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
}

function Application({ Component, pageProps, router }) {
  // fitbitAuthenticate()
  console.log(router.pathname)
  return (
    <div className='main'>
      <Layout>
        <ErrorBoundary>
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => window.scrollTo(0, 0)}
            initial={true}
          >
            <motion.main
              key={router.route}
              variants={variants} // Pass the variant object into Framer Motion 
              initial="hidden" // Set the initial state to variants.hidden
              animate="enter" // Animated state to variants.enter
              exit="exit" // Exit state (used later) to variants.exit
              transition={{ type: 'linear', duration: 2 }} // Set the transition to linear
            >
              <Component {...pageProps}/>
            </motion.main>
          </AnimatePresence>
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