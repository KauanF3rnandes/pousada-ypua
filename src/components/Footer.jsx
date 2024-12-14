import React from "react";
import '../styles/Footer.css'
import Logo from '../img/logo.png';

const Footer = () => {
    return (
        <footer className="footerContainer">
            <img src={Logo} alt="Logo Pousada ypua"/>
        </footer>
    );
}

export default Footer