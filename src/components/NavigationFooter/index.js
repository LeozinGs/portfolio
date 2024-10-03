import './NavigationFooter.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import NavigationFooterLink from './NavigationFooterLink';

const NavigationFooter = ({ color }) => {
    return (
        <div className="navigation-footer" style={{ backgroundColor: `var(--clr-${color})` }}>
            <NavigationFooterLink
                link={'#'}
            >
                <GitHubIcon style={{ fontSize: '2.5em' }} />
            </NavigationFooterLink>
            <NavigationFooterLink
                link={'#'}
            >
                <LinkedInIcon style={{ fontSize: '2.5em' }} />
            </NavigationFooterLink>
            <NavigationFooterLink
                link={'#'}
            >
                <FacebookIcon style={{ fontSize: '2.5em' }} />
            </NavigationFooterLink>
        </div>
    );
}

export default NavigationFooter;