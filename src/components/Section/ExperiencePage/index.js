import Section from '..';
import './ExperiencePage.css';

const ExperiencePage = () => {
    return (
        <Section
            id={'experience'}
        >
            <div className="experience">
                <h1 className="experience-title">Experiências</h1>
                <p className="experience-text">
                    No meu tempo de estudo, passei por alguns conteúdos dos quais eu tentei adiquirir alguma experiência criando um projeto básico somente para fixar e entender os conceitos aprendidos nos cursos, alguns dos conteúdos com os quais tive uma experiência maior são:
                </p>
                <ul className="experience-list">
                    <li className="experience-list-item">FlexBox e Grid</li>
                    <li className="experience-list-item">JavaScript</li>
                    <li className="experience-list-item">HTML</li>
                    <li className="experience-list-item">Local Storage</li>
                    <li className="experience-list-item">Criação de componentes em React</li>
                    <li className="experience-list-item">Recuperação de API's</li>
                    <li className="experience-list-item">Hooks React</li>
                </ul>
                <p className="experience-text">
                    Entre outras coisas, pretendo expandir essa lista mas, por agora, estou focando em aprimorar ainda mais o conhecimento nessas áreas.
                </p>
            </div>
        </Section>
    );
}

export default ExperiencePage;