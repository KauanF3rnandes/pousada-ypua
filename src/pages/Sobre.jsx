import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Sobre.css";
import ilustrativa1 from '../img/pousada1.jpeg';
import ilustrativa2 from '../img/pousada2.jpg';
import ilustrativa3 from '../img/pousada3.jpg';

const Sobre = () => {
    return (
        <body className="sobre-page">
            <Header />
            <main className="sobre-content">
                <section className="hero-section">
                    <div className="hero-overlay">
                        <h1>Bem-vindo à Pousada Ypua</h1>
                        <p>Seu refúgio de tranquilidade e conforto na natureza.</p>
                    </div>
                </section>
                <section className="info-section">
                    <div className="info-container">
                        <h2>Sobre Nós</h2>
                        <p>
                            Localizada em um paraíso escondido, a Pousada Ypua é o destino perfeito para quem busca relaxar e se conectar com a natureza. 
                            Com uma estrutura aconchegante e serviços personalizados, proporcionamos momentos inesquecíveis para nossos hóspedes.
                        </p>
                        <p>
                            Nossa pousada oferece acomodações confortáveis, uma culinária local deliciosa e diversas atividades ao ar livre, 
                            como trilhas ecológicas, passeios de barco e muito mais. Tudo isso em harmonia com o meio ambiente.
                        </p>
                    </div>
                </section>
                <section className="highlights-section">
                    <div className="highlights-grid">
                        <div className="highlight-item">
                            <img src={ilustrativa1} alt="Natureza exuberante" />
                            <h3>Natureza Exuberante</h3>
                            <p>Desfrute de paisagens deslumbrantes e da tranquilidade da natureza.</p>
                        </div>
                        <div className="highlight-item">
                            <img src={ilustrativa2} alt="Culinária local" />
                            <h3>Culinária Local</h3>
                            <p>Saboreie pratos regionais preparados com ingredientes frescos.</p>
                        </div>
                        <div className="highlight-item">
                            <img src={ilustrativa3} alt="Atividades ao ar livre" />
                            <h3>Atividades ao Ar Livre</h3>
                            <p>Aventure-se em trilhas, passeios e muito mais!</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </body>
    );
}

export default Sobre

