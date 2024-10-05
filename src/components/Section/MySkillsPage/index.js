import './MySkillsPage.css';
import Section from '..';

const MySKillsPage = () => {
    return (
        <Section
            id={'my-skills'}
        >
            <div className='skills'>
                <h1 className="skills-title">Minhas Habilidades</h1>
                <p className="skills-description">Habilidades</p>
                <p className="skills-text">
                    Coloquei abaixo meu nível de habilidade de cada coisa que eu estudei dependendo do tempo de exposição ou estudo/prática.
                </p>
                <div className="skills-container">
                    <div className="skills-bars-left">
                        <div className="bar">
                            <p className='skills-bars-title'><strong>HTML</strong>80%</p>
                            <div className="progress-bar">
                                <div className="bar-color"></div>
                            </div>
                        </div>
                        <div className="bar">
                            <p className='skills-bars-title'><strong>CSS</strong>85%</p>
                            <div className="progress-bar">
                                <div className="bar-color"></div>
                            </div>
                        </div>
                        <div className="bar">
                            <p className='skills-bars-title'><strong>JavaScript</strong>75%</p>
                            <div className="progress-bar">
                                <div className="bar-color"></div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-bars-right">
                        <div className="bar">
                            <p className='skills-bars-title'><strong>React</strong>55%</p>
                            <div className="progress-bar">
                                <div className="bar-color"></div>
                            </div>
                        </div>
                        <div className="bar">
                            <p className='skills-bars-title'><strong>UI/UX design</strong>20%</p>
                            <div className="progress-bar">
                                <div className="bar-color"></div>
                            </div>
                        </div>
                        <div className="bar">
                            <p className='skills-bars-title'><strong>Figma/Photophop</strong>25%</p>
                            <div className="progress-bar">
                                <div className="bar-color"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default MySKillsPage;