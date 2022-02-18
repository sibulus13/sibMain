import { SocialIcon } from 'react-social-icons';

export default function Contacts() {
    return (
        <div className='contacts'>
            <SocialIcon
                network='facebook'
                url='https://www.facebook.com/sibulus0/'
            />
            <SocialIcon
                network='instagram'
                url='https://www.instagram.com/_sibulus/'
            />
            <SocialIcon
                network='linkedin'
                url='https://www.linkedin.com/in/sibulus0/'
            />
        </div>
    )
}