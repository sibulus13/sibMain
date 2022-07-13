import { motion, AnimatePresence } from "framer-motion";

import "@styles/globals.css";
import Layout from "../components/layout";
import ErrorBoundary from "../components/ErrorBoundary";
import { useRef } from "react";
// import { MDXProvider } from "@mdx-js/react";

let src =
  "/vecteezy_animation-of-fog-or-smoke-moving-on-white-background-closeup-shot_1797524.mov";
// let src = "/compressedBackgroundVideo.mp4"
const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

function Application({ Component, pageProps, router }) {
  // fitbitAuthenticate()
  console.log(router.pathname);
  const videoRef = useRef();
  const setPlayBack = () => {
    console.log(`setting playback`);
    videoRef.current.playbackRate = 1;
  };
  // const video = Document.
  return (
    // <MDXProvider>
      <div className="main">
        <Layout>
          <ErrorBoundary>
            <AnimatePresence
              exitBeforeEnter
              // onExitComplete={() => window.scrollTo(0, 0)}
              initial={true}
            >
              <motion.main
                key={router.route}
                variants={variants} // Pass the variant object into Framer Motion
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: "linear", duration: 1 }} // Set the transition to linear
              >
                <Component {...pageProps} />
              </motion.main>
            </AnimatePresence>
          </ErrorBoundary>
        </Layout>
        <video
          autoPlay
          muted
          loop
          className="video"
          ref={videoRef}
          onCanPlay={() => setPlayBack()}
          on
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag or format
        </video>
      </div>
    // </MDXProvider>
  );
}

export default Application;
