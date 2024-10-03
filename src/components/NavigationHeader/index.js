import './NavigationHeader.css';

const NavigationHeader = ({ profileImage, logo }) => {
    return (
        <div className="navigation-header">
            <img src={profileImage} alt="Profile" className="photo" />
            <h1>{logo}</h1>
        </div>
    );
}

export default NavigationHeader;