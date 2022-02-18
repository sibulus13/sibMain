import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h5 className={styles.footer_text}>
          Copyright Michael Huang © 2021, Built with NextJS.
        </h5>
      </footer>
    </>
  )
}