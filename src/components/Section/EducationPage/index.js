import './EducationPage.css';
import Section from '..';

const EducationPage = () => {
    return (
        <Section
            id={'education'}
        >
            <div className="education">
                <h1 className="education-title">Formação</h1>
                <p className='education-description'>Minha formação acadêmica</p>

                <div className="education-container">
                    <div className="education-card">
                        <h2 className="education-name">Técnico em Administração</h2>
                        <p className="education-text">2017 - 2018 Pela ETEC. Professor Camargo Aranha - São Paulo - SP.</p>
                    </div>
                    <div className="education-card">
                        <h2 className="education-name">Ensino médio</h2>
                        <p className="education-text">Concluído em 2017 Pelo CEEJA. Dona Clara Mantelli - São Paulo - SP.</p>
                    </div>
                </div>
                <p className="education-text">
                    Estou, atualmente tentando entrar em uma faculdade de Análise e Desenvolvimento de sistemas, enquanto não entro estou estudando na Alura, onde concluí muitos cursos referentes a área de Front-End. Dentre os cursos que eu fiz, estão:
                    <ul className="education-list">
                        <li className="education-list-item">HTML</li>
                        <li className="education-list-item">CSS</li>
                        <li className="education-list-item">JavaScript</li>
                        <li className="education-list-item">Local Storage</li>
                        <li className="education-list-item">Consumo de API</li>
                        <li className="education-list-item">React</li>
                    </ul>
                    Entre muitos outros.
                    Quero aprender ainda mais e expandir meus conhecimentos em React que é uma ferramenta muito legal de se trabalhar, tanto que essa página toda foi feita com ela.
                </p>
            </div>
        </Section>
    );
}

export default EducationPage;