import './Nav.css';

const Nav = () => {
    return (
        <nav className='navigation'>
            <a href="#"><span className='material-icons'>thumb_up</span>Home</a>
            <a href="#"><span className='material-icons'>account_circle</span>About me</a>
            <a href="#"><span className='material-icons'>tune</span>Skills</a>
            <a href="#"><span className='material-icons'>business_center</span>Experience</a>
            <a href="#"><span className='material-icons'>auto_stories</span>Education</a>
            <a href="#"><span className='material-icons'>image</span>Portfolio</a>
            <a href="#"><span className='material-icons'>phone_in_talk</span>Contact</a>
            <a href="#"><span className='material-icons'>description</span>Blog</a>
            <a href="#"><span className='material-icons'>save</span>My resume.PDF</a>
        </nav>
    );
}

export default Nav;