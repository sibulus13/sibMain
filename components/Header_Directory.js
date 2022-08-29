import { motion, AnimatePresence } from "framer-motion"

import Link from 'next/link'
import styles from './Header.module.css'

export default function Header_Directory() {
    return (
        <div
            className={styles.header_links}>
            <Link href="/Adventure">
                <motion.div
                    className={styles.normal_background}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        scale: 0.8
                    }}
                >
                    <h2 className={styles.normal_color}> Adventures</h2>
                </motion.div>
            </Link>
            <Link href="/Showcase">
                <motion.div
                    className={styles.normal_background}
                    whileHover={{
                        scale: 1.1
                    }}
                    whileTap={{
                        scale: 0.8
                    }}
                >
                    <h2 className={styles.normal_color}> Showcase</h2>
                </motion.div>
            </Link>
        </div>
    )
}