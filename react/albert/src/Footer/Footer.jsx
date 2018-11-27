import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div id="icons">
            <a href="https://www.linkedin.com/in/joni-vainio-kaila-924726143/" dangerouslySetInnerHTML={{ __html: '' }} target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"></a>
            </div>
            <p id="copyright">Tribute page project for <i className="fa fa-free-code-camp"></i> by Joni Vainio-Kaila</p>
        </footer>
    );
};

export default Footer;