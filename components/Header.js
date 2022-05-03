import Contacts from './Contacts'
import Header_Directory from './Header_Directory'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <h1 className={styles.title_text}>Michael 黄</h1>
                <h2 className={styles.title_emojis}>🦝 🥔 🤓</h2>
            </div>
            <div className={styles.links}>
                <Header_Directory />
                <Contacts />
            </div>
        </div>
    )
}