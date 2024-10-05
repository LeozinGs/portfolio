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
                    Olá, seja bem vindo ao meu site, aqui vou contar um pouco sobre mim. <br />
                    Comecei a estudar programação quando me foi apresentado um curso na Alura, desde então venho estudando desenvolvimento front-end. Passando por HTML, CSS e Java Script, estou focando meus estudos em React por ser uma ferramenta muito utilizada por diversos sites na internet e por ser muito interessante de aprender. Gosto de jogar videogame, principalmente jogos de quebra-cabeça como a franquia The Room onde platinei os 4 jogos para PC, também gosto de jogos de sobrevivência ou jogos com uma história profunda, que te deixa imerso na trama. Sou muito adepto de aprender coisas, procuro sempre aprender algo novo e útil na minha vida para poder exercitar meu cérebro e não ficar parado sem fazer nada.                   </p>
                <div className='count-container'>
                    <div className="count">
                        <p className='count-number'>20</p>
                        <p className="count-text">Projetos de estudo completos</p>
                    </div>
                    <div className="count">
                        <p className='count-number'>1</p>
                        <p className="count-text">Projetos em andamento</p>
                    </div>
                    <div className="count">
                        <p className='count-number'>REACT</p>
                        <p className="count-text">Atualmente estudando</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default AboutMePage;