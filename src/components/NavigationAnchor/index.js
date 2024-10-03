import './NavigationAnchor.css';

const NavigationAnchor = ({ link, icon, children, color }) => {
    return (
        <a className='naivgation-anchor' href={link} style={{ backgroundColor: `var(--clr-${color})` }}>
            <span className='material-icons icon'>{icon}</span>
            {children}
        </a>
    );
}

export default NavigationAnchor;