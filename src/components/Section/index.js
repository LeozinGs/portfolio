import './Section.css';

const Section = ({ children, id }) => {
    return (
        <section className='section' id={id}>
            {children}
        </section>
    );
}

export default Section;