import { motion, AnimatePresence } from "framer-motion";

import "@styles/globals.css";
import Layout from "../components/layout";
import ErrorBoundary from "../components/ErrorBoundary";
import { useRef } from "react";
import { variants } from "lib/constants";
import styles from "./App.module.css";
import { labelMapper } from "lib/utils";

// import { MDXProvider } from "@mdx-js/react";

let src =
  "smoke_background.mov";

function Application(props) {
  // console.log(pageProps.type)
  // console.log(`isMobileView`, props.isMobileView)
  let Component = props.Component
  let pageProps = props.pageProps
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 1;
  };

  return (
    <div className="main">
      <Layout>
        <ErrorBoundary>
          <motion.main>
            <motion.div
              className={styles.title}
              // className={props.isMobileView?styles.title_m:styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "linear", duration: 1 }} // Set the transition to linear
            >
              <h1 className={styles.normal_color}> {labelMapper(pageProps.type)} </h1>
            </motion.div>
            <AnimatePresence
              exitBeforeEnter
              initial={true}
            >
              <motion.div
                key={pageProps.type}
                variants={variants} // Pass the variant object into Framer Motion
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: "linear", duration: 1 }} // Set the transition to linear
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </motion.main>
        </ErrorBoundary>
      </Layout>
      <video
        autoPlay
        muted
        loop
        className="video"
        ref={videoRef}
        onCanPlay={() => setPlayBack()}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag or format
      </video>
    </div>

  );
}

export default Application;

// Application.getInitialProps = async ({ ctx }) => {
//   let isMobileView = (ctx.req
//     ? ctx.req.headers['user-agent']
//     : navigator.userAgent).match(
//       /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
//     )
//   //Returning the isMobileView as a prop to the component for further use.
//   return {
//     isMobileView: Boolean(isMobileView)
//   }
// }