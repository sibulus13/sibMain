import Link from 'next/link'
import styles from './Header.module.css'


export default function Header_Directory() {
    return (
        <div
            className={styles.header_links}>
            <h2>
                <Link href="/About-me">
                    <a>About me</a>
                </Link>
            </h2>
            <h2>
                <Link href="/Adventures">
                    <a>Adventures</a>
                </Link>
            </h2>
            <h2>
                <Link href="/Showcase">
                    <a>Showcase</a>
                </Link>
            </h2>
        </div>
    )
}