import './NavigationHeader.css';

const NavigationHeader = ({ profileImage, logo, color }) => {
    return (
        <div className="navigation-header" style={{ backgroundColor: `var(--clr-${color})` }}>
            <img src={profileImage} alt="Profile" className="photo" />
            <h1 className='logo'>{logo}</h1>
        </div>
    );
}

export default NavigationHeader;