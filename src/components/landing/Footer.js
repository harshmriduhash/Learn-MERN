import React from 'react';
import FooterContent from './FooterContent';

const Footer = () => {
    return (
        <div>
        <FooterContent />
        <footer className="footer d-flex justify-content-center align-items-center">
            <a href="#!" className="nav-link text-dark font-weight-bold font-italic">&copy; 2019 MakeItSimple All Right Reserved.</a>
        </footer>
        </div>
    )
}

export default Footer;