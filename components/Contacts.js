import { SocialIcon } from 'react-social-icons'
import styles from './Header.module.css'

export default function Contacts() {
    return (
        <div className={styles.header_contacts}>
            <SocialIcon
                network='facebook'
                // className={styles.socialIcon}
                // className='socialIcon'
                // className={SocialIcon}
                // color="currentColor"
                url='https://www.facebook.com/sibulus0/'
                bgColor='lightgrey'
                fgColor='black'
                // style={styles.SocialIcon}
                style={{
                    height: '3vh',
                    width: '3vh'
                }}
            />
            <SocialIcon
                network='instagram'
                url='https://www.instagram.com/_sibulus/'
                bgColor='lightgrey'
                fgColor='black'
                style={{
                    height: '3vh',
                    width: '3vh'
                }}
            />
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
        </div>
    )
}