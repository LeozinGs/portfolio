import './NavigationAnchor.css';

const NavigationAnchor = ({ link, icon, children }) => {
    return (
        <a className='naivgation-anchor' href={link}>
            <span className='material-icons'>{icon}</span>
            {children}
        </a>
    );
}

export default NavigationAnchor;