import { SocialIcon } from 'react-social-icons';
import Contacts from './Contacts';
import Header_Directory from './Header_Directory';

export default function Header({ title }) {
    return (
        <div className='header'>
            <div className='header-title'>
                <h3>Michael 黄</h3>
                <h4>🤓,🥔,🦝</h4>
            </div>
            <div className='header-links'>
                <Header_Directory />
                <Contacts />
            </div>
        </div>
    )
}