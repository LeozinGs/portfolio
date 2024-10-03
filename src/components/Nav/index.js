import NavigationAnchor from '../NavigationAnchor';
import NavigationFooter from '../NavigationFooter';
import NavigationHeader from '../NavigationHeader';

import './Nav.css';

const Nav = () => {
    return (
        <nav className='navigation'>

            <NavigationHeader
                profileImage={'oi'}
                logo={'LOGO.'}
            />

            <NavigationAnchor
                link={'#'}
                icon={'thumb_up'}
            >
                Home
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'account_circle'}
            >
                About me
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'tune'}
            >
                Skills
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'business_center'}
            >
                Experience
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'auto_stories'}
            >
                Education
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'image'}
            >
                Portfolio
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'phone_in_talk'}
            >
                Contact
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'description'}
            >
                Blog
            </NavigationAnchor>

            <NavigationAnchor
                link={'#'}
                icon={'save'}
            >
                My Resume.PDF
            </NavigationAnchor>

            <NavigationFooter />

        </nav>
    );
}

export default Nav;