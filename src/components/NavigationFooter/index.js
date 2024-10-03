import './NavigationFooter.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import NavigationFooterLink from './NavigationFooterLink';

const NavigationFooter = ({ link, children }) => {
    return (
        <div className="navigation-footer">
            <NavigationFooterLink
                link={'#'}
            >
                <GitHubIcon />
            </NavigationFooterLink>
            <NavigationFooterLink
                link={'#'}
            >
                <LinkedInIcon />
            </NavigationFooterLink>
            <NavigationFooterLink
                link={'#'}
            >
                <FacebookIcon />
            </NavigationFooterLink>
        </div>
    );
}

export default NavigationFooter;