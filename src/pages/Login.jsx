import React from "react";
import '../styles/Login.css'
import Logo from '../img/logo.png';
import Main from '../img/main.png';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
    return(
        <div className="bodyLogin">
            <Header/>
            <div className="imageContainer">
                <img src={Main} alt="Foto ilustrativa Pousada ypua" className="imageBelowHeader" />
            </div>
            <main>
                <div className="container">
                    <div className="left-section">
                        <h4>Pousada Quinta do Ypuá</h4>
                        <h2>Bem-vindo de volta!</h2>
                        <p>Acesse sua conta agora mesmo.</p>
                        <button>Entrar</button>
                        <a href="#">Esqueci minha senha</a>
                    </div>
                    <div className="right-section">
                        <h2>Faça seu Login</h2>
                        <p>Preencha seus dados</p>
                        <form>
                            <div className="form-group">
                                <label for="email"></label>
                                <input type="email" id="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label for="senha"></label>
                                <input type="password" id="senha" placeholder="Senha"/>
                            </div>
                            <button className="buttonJoin">Entrar</button>
                        </form>
                        <div className="buttons">
                            <span>Não possui login? <a href="/cadastro">Cadastre-se</a></span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Login;