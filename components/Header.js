import Link from 'next/link'

import Contacts from './Contacts'
import Header_Directory from './Header_Directory'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/">
                <div className={styles.title}>
                    <h1 className={styles.title_text}>
                        <a>Michael 黄</a>
                    </h1>
                    {/* <h2 className={styles.title_emojis}>🦝 🥔 🤓</h2> */}
                </div>
            </Link>
            <div className={styles.links}>
                <Header_Directory />
                <Contacts />
            </div>
        </div>
    )
}