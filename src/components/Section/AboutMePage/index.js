import Section from '..';
import './AboutMePage.css';

const AboutMePage = () => {
    return (
        <Section
            id={'about-me'}
        >
            <div className="about-me">
                <h2 className="about-me-title">Leonardo Gomes</h2>
                <p className="about-me-description">Web Developer</p>

                <p className="about-me-text">
                    Hello, welcome to my website, here I will tell you a little about myself. I started studying programming when I was presented with a course at Alura, since then I have been studying front-end development. Going through HTML, CSS and Java Script, I am focusing my studies on React because it is a tool widely used by many websites on the internet and because it is very interesting to learn. I like playing video games, especially puzzle games like The Room franchise where I platinum 4 PC games, I also like survival games with a deep story, which leaves you immersed in the plot. I'm very adept at learning things, I'm always looking to learn something new and useful in my life so that I can exercise my brain and not sit still and do nothing.
                </p>
                <div className='count-container'>
                    <div className="count">
                        <p className='count-number'>20</p>
                        <p className="count-text">Complete studied projects</p>
                    </div>
                    <div className="count">
                        <p className='count-number'>1</p>
                        <p className="count-text">Running projects</p>
                    </div>
                    <div className="count">
                        <p className='count-number'>REACT</p>
                        <p className="count-text">Currently studying</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default AboutMePage;