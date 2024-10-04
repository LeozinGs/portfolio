import Section from '..';
import './HomePage.css';

const HomePage = () => {
    return (
        <Section
            id={'home'}
        >
            <div className='home overlay'>
                <div className='home-content'>
                    <p className='home-text'>Hello, I am</p>
                    <h1 className='home-title'>Leonardo Gomes</h1>
                    <p className='home-description'>WEB DEVELOPER</p>
                </div>
            </div>
        </Section>
    );
}

export default HomePage;