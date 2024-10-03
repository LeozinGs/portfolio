import NavigationAnchor from '../NavigationAnchor';
import NavigationFooter from '../NavigationFooter';
import NavigationHeader from '../NavigationHeader';

import profilePhoto from '../../images/Imagem do WhatsApp de 2024-09-30 à(s) 18.08.56_5004c754.jpg';

import './Nav.css';

const Nav = () => {
    return (
        <nav className='navigation'>

            <NavigationHeader
                profileImage={profilePhoto}
                logo={'Leonardo Gomes'}
                color={'grey'}
            />

            <NavigationAnchor
                link={'#'}
                icon={'thumb_up'}
                color={'yellow'}
            >
                Home
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'account_circle'}
                color={'lightOrange'}
            >
                About me
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'tune'}
                color={'darkOrange'}
            >
                Skills
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'business_center'}
                color={'red'}
            >
                Experience
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'auto_stories'}
                color={'darkPink'}
            >
                Education
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'image'}
                color={'pink'}
            >
                Portfolio
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'phone_in_talk'}
                color={'purple'}
            >
                Contact
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'description'}
                color={'blue'}
            >
                Blog
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'save'}
                color={'cyan'}
            >
                My Resume.PDF
            </NavigationAnchor>

            <NavigationFooter
                color={'greenYellow'}
            />

        </nav>
    );
}

export default Nav;