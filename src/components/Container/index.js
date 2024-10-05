import Nav from '../Nav';
import './Container.css';
import HomePage from '../Section/HomePage';
import AboutMePage from '../Section/AboutMePage';
import MySKillsPage from '../Section/MySkillsPage';
import ExperiencePage from '../Section/ExperiencePage';

const Container = () => {
    return (
        <div className="main-page">
            <HomePage />
            <AboutMePage />
            <MySKillsPage />
            <ExperiencePage />
            <Nav />
        </div>
    );
}

export default Container;