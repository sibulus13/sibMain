import { SocialIcon } from 'react-social-icons'
import styles from './Header.module.css'

import { motion } from "framer-motion"


export default function Contacts() {
    return (
        <div className={styles.header_contacts}>
            <motion.div
                whileHover={{
                    y: -5
                }}
                whileTap={{
                    scale: 1.5
                }}
            >
                <SocialIcon
                    network='facebook'
                    url='https://www.facebook.com/sibulus0/'
                    bgColor='lightgrey'
                    fgColor='black'
                    style={{
                        height: '3vh',
                        width: '3vh'
                    }}
                />
            </motion.div>
            <motion.div
                whileHover={{
                    y: -5
                }}
                whileTap={{
                    scale: 1.5
                }}
            >
                <SocialIcon
                    network='instagram'
                    url='https://www.instagram.com/mikey3i8/'
                    bgColor='lightgrey'
                    fgColor='black'
                    style={{
                        height: '3vh',
                        width: '3vh'
                    }}
                />
            </motion.div>
            <motion.div
                whileHover={{
                    y: -5
                }}
                whileTap={{
                    scale: 1.5
                }}
            >
                <SocialIcon
                    network='linkedin'
                    url='https://www.linkedin.com/in/sibulus0/'
                    bgColor='lightgrey'
                    fgColor='black'
                    style={{
                        height: '3vh',
                        width: '3vh'
                    }}
                />
            </motion.div>
        </div>
    )
}