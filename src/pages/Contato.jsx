import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Contato.css"

const Contato = () => {
    return (
        <body className="bgContato">
            <Header />
            <main className="contato-container">
                <h1 className="contato-title">Entre em Contato</h1>
                <p className="contato-description">Ficaremos felizes em ouvir de você. Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
                <form className="contato-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn-enviar">Enviar</button>
                </form>
            </main>
            <Footer />
        </body>
    );
}

export default Contato