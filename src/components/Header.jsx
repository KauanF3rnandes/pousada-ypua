import React from "react";
import Logo from '../img/logo.png';
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <img src={Logo} alt="Logo Pousada ypua"/>
                <a href="/">Inicio</a>
                <a href="/sobre">Sobre</a>
                <a href="/acomodações">Acomodações</a>
                <a href="/contato">Contato</a>
            </div>
        </div>
    );
}

export default Header