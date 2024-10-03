import './NavigationFooterLink.css';

const NavigationFooterLink = ({ link, children }) => {
    return (
        <a className='navigation-footer-link' href={link}>{children}</a>
    );
}

export default NavigationFooterLink;