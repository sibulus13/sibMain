import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

import Contacts from "./Contacts";
import Header_Directory from "./Header_Directory";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.title}>
          <h1 className={styles.title_text}>Michael</h1>
          <motion.div
            whileHover={{
              scale: [null, 1, 1.5, 1],
              rotate: [null, 30, -30, 0],
            }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <h1 className={styles.title_text}>黄</h1>
          </motion.div>
        </div>
      </Link>
      <div className={styles.links}>
        <Header_Directory />
        <Contacts />
      </div>
    </div>
  );
}
