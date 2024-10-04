import Nav from '../Nav';
import './Container.css';
import HomePage from '../Section/HomePage';
import AboutMePage from '../Section/AboutMePage';

const Container = () => {
    return (
        <div className="main-page">
            <HomePage />
            <AboutMePage />
            <Nav />
        </div>
    );
}

export default Container;