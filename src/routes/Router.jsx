import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;