import Link from 'next/link'

import Contacts from './Contacts'
import Header_Directory from './Header_Directory'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/">
                <div className={styles.title}>
                    <h1 className={styles.title_text}>Michael 黄</h1>
                </div>
            </Link>
            <div className={styles.links}>
                <Header_Directory />
                <Contacts />
            </div>
        </div>
    )
}