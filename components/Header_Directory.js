import Link from 'next/link'
import styles from './Header.module.css'

export default function Header_Directory() {
    return (
        <div
            className={styles.header_links}>
            {/* <h2>
                <Link href="/About-me">
                    <a>About me</a>
                </Link>
            </h2> */}
            <Link href="/Adventures">
                <div className={styles.normal_background}>
                    <h2 className={styles.normal_color}> Adventures</h2>
                </div>
            </Link>
            <Link href="/Showcase">
                <div className={styles.normal_background}>
                    <h2 className={styles.normal_color}> Showcases</h2>
                </div>
            </Link>
        </div>
    )
}